- MVVM
    Vue技术是MVVM开发模式的实现者。
  MVC
    M model   V view    C controller
  MVVM
    M model   V view    VM  viewmodel 连接视图和数据的中间件

  1.cdn 内容分发网络
    这是一种加速策略，能够从离自己最近的服务器上快速的获取外部的资源。
  2.VM的实现原理
    view model 中内置了一个观察者，这个观察者观察两个维度。
    1）观察视图的变化：当视图变了，就通知数据进行变化。
    2）观察数据的变化：当数据变了，就通知视图进行变化。

    MVVM 通过VM进行了双向绑定。

补充知识：
    在响应函数里，可以指明使用event内置的参数对象。
    该对象表示当前事件，可以通过event.target.value来获取当前事件对象的value的值。

    