/*
前言React 库的架构通常包含核心逻辑和与 React 组件连接的绑定部分。
React 以其强大的生态系统而闻名。
我们有各种各样的工具来处理状态管理、表单、路由、样式等，但它们在内部是如何工作的呢？
其实，大多数工具在架构选择上都有相似之处，更倾向于遵循 React 的工作方式。
接下来我们来探讨一下这些常见的结构。
    一、绑定机制（Binding）大多数库的架构通常分为两个主要部分：
    核心（core）和绑定（binding）。核心部分负责逻辑和功能的实现，而绑定则负责将核心与前端工具连接起来。
    在 React 中，这个连接通常表现为组件和自定义 hooks。在很多工具中，核心对象都是在组件外部创建的。
    这么做有一个好处，就是可以避开 React 的重新渲染周期，也无需关注 React 的记忆优化机制（memoization）。
    接下来，要与 React 连接，通常是通过 Context API 来实现的。
*/
// 示例：Zustand 的外部 store 设计// store.ts

import{ create }from'zustand';
export const useStore =create((set)=>({
count:0,
increment:()=>set((state)=>({count: state.count +1})),
}));

// 然后在组件中使用：
const count =useStore((state)=> state.count);
/** 
 * 这也是为什么那么多库中都有 Provider（提供器）组件。
    这些 Provider 组件的作用就是将核心的数据注入到整个组件树中。
    虽然 Context API 对动态数据的处理存在性能问题，但由于核心对象是稳定引用的，所以并不会带来太大问题。
    不优雅的 React Hooks因此，只要把其他组件或 hooks 放在 Provider 之下，就可以直接使用核心的数据和功能，即使你并没有直接传递这些内容。
    比如 Tanstack Query，你只需要创建一个核心 client 并通过 Provider 提供，
    就可以在不同页面中使用相同的查询缓存，只要 key 一样即可。不需要手动共享数据，库会通过核心和 Context Provider 自动完成这一连接。
*/
// 示例：TanStack Query 的使用
<QueryClientProvider client={queryClient}>
<App />
</QueryClientProvider>
// 组件中使用：
const{ data }=useQuery(['user'], fetchUser);
/**
 * 你也可以在像 React-router 这样的库中看到类似的结构，
    你调用 useParams、useNavigate 等 hook 时，其实就是从路由核心中获取数据和方法，
    而这些 hook 底层是通过 Context 来连接核心的。
    二、外部连接（External connection）不过接下来就面临另一个问题：
    客户端需要有某种机制来与 React 的渲染模型进行连接。
    React 怎么知道客户端的某些状态发生了变化，并需要重新渲染来获取最新的值呢？
    大多数库会使用 “观察者模式”（Observer pattern）。
    这种模式通常包含三个核心方法：
    一个订阅（subscribe）方法，用于注册监听函数，在数据变更时执行回调。
    一个 getState 方法，用于获取当前的原始数据。
    一个触发更新的方法，比如设置状态（setter）、派发操作（dispatch）或重新获取数据（refetch）等。
    虽然库的核心中可能会有更多方法，但这三个是基本的组成部分。
 */

/**
 * 要将这些外部数据与 React 连接，有两种方式：
    1、useSyncExternalStore：这是 React 提供的原生 hook，专门用于处理外部状态。
    你需要向它传入核心的 getState 和 subscribe 方法（如果支持服务端渲染，还需要额外的 getServerSnapshot），
    它会自动订阅变更并触发重新渲染，从而返回最新数据。
    const value =useSyncExternalStore(store.subscribe, store.getState);
    2、自定义 hook：你也可以使用 useEffect 和 useReducer 来实现一个自己的 hook。
    在 useSyncExternalStore 出现之前，大家通常都是用这种方式，它也有自己的优势。
 */
function useCustomStore(store) {
const[state, setState]=useState(store.getState());

useEffect(()=>{
const unsubscribe = store.subscribe(setState);
return unsubscribe;
},[store]);

return state;
}
/**
 * 需要注意的是，useSyncExternalStore 已被反优化，这意味着它会被 React 视为高优先级更新，
    这会影响到应用中并发特性的优化。不过，这种行为在某些场景下是你想要的，
    因为它可以避免 “撕裂”（tearing）—— 也就是组件使用了旧的状态数据。
    从 React 看前端 UI 代码范式革命虽然 React 在并发特性中默认允许某些状态撕裂，
    以优先渲染更重要的内容，但对于外部状态，React 认为撕裂是不好的。
    因此，一旦外部状态变更，它会立即同步更新并重新渲染，确保使用的是最新状态。
    如果你自己实现连接逻辑，就可以避开这种高优先级更新，把外部状态当作低优先级处理。
    这样的话，就可以暂停上一次的更新渲染，去先处理其他交互逻辑。
    这是一个需要权衡的选择，但目前大多数库都倾向于使用 useSyncExternalStore 方案。
 */
/**
 * 三、React 19React 当前的最新版本（React 19）带来了一些新特性，会影响很多库的实现方式。
    其中，处理 Suspense 和 Promise 的原始 hook 会被大量使用，但在某些场景下，也可能需要用到更多的新 hook。
    比如表单库，就可以很好地利用 useOptimistic、useFormStatus 和 useActionState 这些新 hook，
    尤其是在使用 React Server Components 的框架中，比如 Next.js、Waku 和 Tanstack Start。
    Hook说明场景useOptimistic支持乐观更新，
    先显示 UI 后验证数据评论、点赞、输入延迟useFormStatus表单是否正在提交的状态表单交互体验优化useActionState异步表单动作状态管理与 server action 一起使用示例：
    使用 useFormStatus 控制按钮状态
 */
function SubmitButton(){
const{ pending }=useFormStatus();
return<button disabled={pending}>{pending ?'提交中...':'提交'}</button>;
}
/**
 * 四、常见状态管理库架构对比虽然大多数库都遵循 “核心 + 绑定” 模型，
    但具体实现存在差异：
    Reac状态管理比较与原理实现. Redux,Zustand,Jotai,Recoil, MobX,Valtio库名架构方式绑定方式特点
    Redux单一 store + dispatchProvider + useSelector可预测、
    调试强Zustand外部 store + subscribe自定义 hook简洁、
    性能好Jotai原子化状态Provider + useAtom状态粒度细Recoil数据依赖图
    RecoilRoot + hook自动依赖追踪TanStack Query客户端缓存器Provider + useQuery专注异步请求和缓存这些架构
    会随着具体场景的不同而不断演进和调整，但总体来看，这就是当前 React 生态系统中常见的结构设计思路。
 */