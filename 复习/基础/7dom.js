// dom   dom就是js操作页面的一个接口 
/**
 * 节点类型7种
 * Document 整个文档树的顶层节点     9
 * Element 网页的各种html标签        1
 * DocumentType doctype标签
 * Attribute 网页元素的属性          2
 * Text 标签之间或标签包含的文本      3
 * Comment 注释
 * DocumentFragment 文档的片段      11 
 */

document.nodeType  //9   查看当前的节点类型

/**
 * 1 读取元素
 *  document.getElementByTagName()[]  获取标签 后面可接[]，按顺序只读取一个
 *  document.getElementByClassName()[] 获取class类名 "a b" 空格写的话可以读两个class 后面可接[]，按顺序只读取一个
 *  document.getElementByName() 获取name名字 如表单上的name   不常用
 *  document.getElementById() 获取id
 * 
 *  document.querySelector(".container")  里面的参数接收的是css选择器 只返回第一个节点与ById一样 没有则返回null
 *  document.querySelectorAll("nav")[] 能返回全部符合条件的节点 后面可接[]，按顺序只读取一个
  */

/**
 * 2 创建元素
 *  document.createElement("div") 创建标签(元素节点)
 *  document.createTextNode("hello") 创建文本
 *  document.createAttribute("id") 创建属性  赋值直接 .value =  就可以了
 *  document.setAttributeNode()  设置属性  在谁的身上设置上什么属性
 *  
 */

// 3 插入元素
// let newDiv = document.createElement("div");
// let content = document.createTextNode("hello")
newDiv.appendChild(content);   //插入元素标签或文本内容
document.setAttributeNode()  //插入属性 记住是属性 css属性 id属性等

/**
 * 4 Element对象属性  Element就是元素标签 你在js中获取之后点就是了
 *  Element.id  
 *  Element.className 一整个的class注意添加时要带上之前的 他是覆盖的 
 *  Element.classList 添加add()和删除remove()查看是否含有contains()移入和移出toggle() 的对象集合
 *  Element.innerHTML  设置读取都可以
 *  Element.innerText 与上面的区别是text无法识别标签
 */

root.classList.add("box")


/**
 * 5 Element获取元素位置
 *  Element.clientWidth 获取元素自身宽度只包括padding
 *  Element.clientHeight
 *  Element.scrollWidth 与clientWidth基本用法一致 无需多记
 *  Element.scrollHeight
 *  Element.scrollTop 上下滚动高度 注意是已经滚动的高度 可实时
 *  Element.scrollLeft
 *  Element.offsetWidth 获取元素自身宽度包括padding 和 border
 *  Element.offsetHeight
 *  Element.offsetLeft 到定位父级元素的左边界的距离
 *  Element.offsetTop
 */
// clientHeight常用于获取页面的高度与视口的高度
document.body.clientHeight;
document.documentElement.clientHeight; //视口高度
// 常用
root.scrollTop
root.offsetLeft
root.offsetTop


/**
 * 6 css设置
 *  root.setAttribute('style','color:red;border:none;') 
 *  root.style.width = "300px"
 *  root.style.cssText = "color:red;border:none;"
 */

/**
 * 7 事件处理程序
 *  html事件 <button id="btn" onclick = "dome()">点击html事件直接写</button>
 *  dom0级事件 btn.onclick = function(){}
 *  dom2级事件 bth.addEventListener("click",function(){})
 */

/**
 * 8 鼠标事件
 *  click 点击
 *  dblclick 双击
 *  mousedown 按下不松
 *  mouseup 抬起
 *  mousemove 移动 连续触发
 * 
 *  mouseenter 进入触发 子子不触发
 *  mouseleave 离开触发 子子不触发
 *  mouseover 进入触达 子子再触发
 *  mouseout 离开触发 子子再触发
 *  wheel 滚轮触发
 */

/**
 * 9 event事件
 *  event事件对象就是function(e)里的参数e
 *  e.target  返回当前点击的节点
 *  e.target.value 当前节点里面的值
 *  e.type 获取当前的事件类型 如单击移动等
 * 
 *  e.preventDefault() 阻止默认事件 如点击a标签后默认跳转
 *  e.stopPropagation() 阻止事件冒泡 冒泡其实就是嵌套标签一层一层向上传递 点击子标签父标签也会被点击工作
 */

/**
 * 10 键盘事件
 *  keydown 按下触发
 *  keypress 按下触发(仅有值能触发 ctrl alt shift tab等这些无值不触发)
 *  keyup 抬起触发
 *  e.keyCode 按键标识 如 e.keyCode === 13  为回车键
 *  
 */

/**
 * 11 表单事件
 *  input input事件会连续触发 常用为<input><select><textarea><input type=checkbox/radio>
 *  select 选中内容时会触发事件 如<input><textarea>中选中文本时
 *  change 值发生改变时触发 失去焦点或回车时才会触发 
 *  reset submit 这两个事件是发生在form表单上的与上面的不同 reset重置时触发 submit提交时触发  
 *  发生在form表单上 这个要注意该方法是指要获取form的节点再.reset()才能触发 
 */

/**
 * 12 事件代理/事件委托
 *  把子节点的监听函数定义在父节点上，利用事件冒泡机制
 *  event.target.tagName 获取的是大写标签字母 如 LI P 注意是标签字母而不是标签
 */

var ul = document.querySelector("ul");
ul.addEventListener("click", function (e) {
  if(e.target.tagName === "LI"){
    console.log(e.target.innerHTML)
  }

})