**一props、**

1.数组方法
 props:['prentice''slogan']
2.对象方法，确定传参类型

 props:{
prentice: String,}
***eg：父子组件的使用场景***

师傅给徒弟传值，传递徒弟的名字，徒弟的标语
子组件吧标语展示出来，写一个方法，提供一些服务，供父组件调用



**二、**

***ref***

通过ref将值传递过来

以标签属性的形式存在，接收string 

以标签属性 的形式存在，接收String参数ref 被用来给元素或者子组件注册引用信息
分为两种情况:
1、如果在普通的DOM元素上使用，引用指向的就是真实的DOM元素2、如果用在子组件上，引用则指向的是组件实例对象

***2.refs***

以对象的方式存在，表示持有ref属性的所有组件该对象对应着ref属性:
1、如果ref是在普通的标签上，则$ref指向的就是该DOM元素2、如果ref是在子组件上，则指向的是该组件的实例对象。

**三、$nextTick: 异步调用回调方法，监听dom元素渲染完毕，渲染完毕执行方法**

**四、mixins（混入）**

概念: 公用方法和数据的时候，抽出可以进行混入

作用：来分发 Vue 组件中的可复用功能

使用：新建一个文件夹，创建一个mixins.js，const  一个名称={data（）{return{内容}}}，用export default denomination 	；

在组件内引入，mixins：[名称]

特点：

1.当mixins中和组件有重复的命名和方法时，最终以组件为准

2.mixins生命周期先执行，组件后执行【执行顺序与在组件内的引入顺序有关】

3.当两个mixins有重复值时候，mixins的引入顺序决定值的顺序

4.会和组件中的data进行混合，如果mixins和组件有相同命名，组件优先

**五、plugins（插件）**


插件通常用来为 Vue 添加全局功能。插件的功能范围没有严格的限制--一般有下面几种:
1.添加全局方法或者 property。如: vue-custom-element
2.添加全局资源: 指令/过滤器/过渡等。如 vue-touch
3.通过全局混入来添加一些组件选项。如 vue-router
4.添加 Vue 实例方法，通过把它们添加到 Vue.prototype 上实现。
5.一个库，提供自己的 API，同时提供上面提到的一个或多个功能。如 vue-router





**六、本地储存**
  localStorage和sessionStorage
 1. localStorage
    同一个会话机制可以读取到我们储存的内容，换一个会话机制 不行
    （长期存储）：与 sessionStorage 一样，但是浏览器关闭后，数据依然会一直存在
 2. sessionStorage
    （临时存储）：为每一个数据源维持一个存储区域，在浏览器打开期间存在，包括页面重新加载

  

-![image-20231123083502471](C:\Users\86152\AppData\Roaming\Typora\typora-user-images\image-20231123083502471.png)