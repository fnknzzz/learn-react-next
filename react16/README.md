# React v16 更新内容

## React v16.0

### ErrorBound

新的生命周期函数: `componentDidCatch`。类似于 JS 的 `try catch`, 可捕获在渲染过程中的错误。但无法捕获 render 以外的错误，如异步请求。

### Portal

`Portal` 可意会为“传送门”，即可以在外部 DOM 渲染 React 组件。

### Fragment

只是用来包裹，并不会生成真正DOM的静态组件。

## React v16.2

### Fragment

对`Fragment`更好的支持，加入jsx的`<></>`模板来表示。

## React v16.3

### Context

官方正式发布的 `Context` API，可以告别原来的 `Context` 了。

### Lifecycle Changes

即将移除三个生命周期函数: `componentWillMount`, `componentWillUpdate`, `componentWillReceiveProps`。
取而代之的是新的两个生命周期函数: `static getDerivedStateFromProps`, `getSnapShotBeforeUpdate`。

### Ref

新的取得 Ref 的“无副作用”的形式。`createRef` 用于取得Ref，`forwardRef` 用于取得高阶组件里的Ref。

### StrictMode

新的 React 静态组件，类似于 `Fragment`，不会渲染成真正的 DOM，并加入了提示功能，生产环境下会提醒即将废弃的 API。