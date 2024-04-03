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

// 插入元素
// let newDiv = document.createElement("div");
// let content = document.createTextNode("hello")
newDiv.appendChild(content);   //插入元素标签或文本内容
document.setAttributeNode()  //插入属性 记住是属性 css属性 id属性等
