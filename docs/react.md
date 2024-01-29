---
title: 'react'
---

# React

## react

React 是一个用于构建用户界面的 JavaScript 库，它由 Facebook 开发并维护。React 的核心概念包括以下几点：

1. **组件（Components）**:
   React 应用由多个独立、可复用的组件组成。每个组件代表了 UI 的一部分，可以是一个按钮、一个表单、一个对话框等。组件可以是类组件或函数组件，并且可以包含自己的状态和生命周期方法。

2. **JSX（JavaScript XML）**:
   JSX 是一种语法扩展，它允许你在 JavaScript 代码中编写类似于 XML 或 HTML 的标记。React 使用 JSX 来描述组件的结构，它在编译时会被转换成相应的 JavaScript 对象。

3. **元素（Elements）**:
   React 元素是构成 React 应用的最小单位，它们是对 UI 的轻量级描述。元素是不可变的，一旦创建就不能更改其子元素或属性。

4. **虚拟 DOM（Virtual DOM）**:
   React 为每个 DOM 对象维护了一个轻量级的虚拟 DOM 表示。当组件的状态发生变化时，React 会首先在虚拟 DOM 上进行变更，然后通过对比新旧虚拟 DOM 来确定实际 DOM 需要进行的最小更新。

5. **数据流（Data Flow）**:
   React 采用单向数据流，父组件可以将 props 传递给子组件，但子组件不能直接修改接收到的 props。组件的状态（state）可以在组件内部更改，通常通过事件处理函数来更新。

6. **状态（State）和属性（Props）**:

   - **状态（State）**: 组件的状态是私有的并且完全由组件控制。状态可以通过 `this.setState`（类组件）或 `useState`（函数组件）来更新。
   - **属性（Props）**: 组件接收的属性是不可变的，它们由父组件传递给子组件。

7. **生命周期方法（Lifecycle Methods）**:
   类组件有多个生命周期方法，如 `componentDidMount`、`componentDidUpdate` 和 `componentWillUnmount`，它们在组件的不同阶段被调用。函数组件可以通过 `useEffect` Hook 来模拟这些生命周期行为。

8. **Hooks**:
   Hooks 是 React 16.8 中引入的新特性，它允许你在函数组件中使用状态和其他 React 特性，如副作用、上下文、引用（refs）等。

9. **上下文（Context）**:
   Context 提供了一种在组件树中传递数据的方法，而不必在每个层级手动传递 props。这对于全局数据（如主题、用户偏好等）特别有用。

10. **Refs**:
    Refs 提供了一种访问 React DOM 节点或在 render 方法中创建的 React 元素的方法。

11. **Fragments**:
    Fragments 允许你将多个元素组合在一起，而不需要额外的父元素包裹它们。

12. **错误边界（Error Boundaries）**:
    错误边界是一种 React 组件，它可以捕获其子组件树中的 JavaScript 错误，并记录这些错误，展示备用 UI，而不是使整个组件树崩溃。

这些核心概念构成了 React 的基础，使得它成为一个强大且灵活的用于构建用户界面的库。通过理解和运用这些概念，开发者可以创建高效、可维护和可扩展的前端应用程序。

React Hooks 是在 React 16.8 版本中引入的一项新特性，它允许你在不编写类（class）的情况下使用 state 和其他 React 特性。Hooks 提供了一种更加函数式的方法来编写组件，并解决了类组件中存在的一些问题和局限性。

## react hooks

### React Hooks 的主要特点：

1. **useState**: 允许你在函数组件中添加 state。
2. **useEffect**: 用于处理副作用，可以看作是 `componentDidMount`、`componentDidUpdate` 和 `componentWillUnmount` 这些生命周期方法的组合。
3. **useContext**: 提供了一种在组件之间共享数据的方式，而不必显式地通过组件树逐层传递 props。
4. **useReducer**: 类似于 Redux 中的 reducer，用于管理复杂的组件状态逻辑。
5. **useCallback**: 返回一个记忆化的回调函数。
6. **useMemo**: 返回一个记忆化的值。
7. **useRef**: 返回一个可变的 ref 对象，其 `.current` 属性被初始化为传入的参数。
8. **useImperativeHandle**: 自定义使用 ref 时公开给父组件的实例值。
9. **useLayoutEffect**: 其作用类似于 `useEffect`，但它在所有的 DOM 变更之后同步触发重渲染。
10. **useDebugValue**: 用于在 React 开发者工具中显示自定义的 hook 标签。

### Hooks 与类组件的区别：

1. **简化代码**:

   - Hooks 允许你在不使用类的情况下使用 state 和生命周期特性，这使得组件更容易理解和维护。
   - 函数组件通常比类组件更简洁，因为它们不需要 `this` 关键字，也不需要考虑 `this` 绑定的问题。

2. **重用状态逻辑**:

   - 在类组件中，状态逻辑的重用通常需要高阶组件（HOCs）或渲染属性（render props）等模式，这可能导致组件树层级的增加。
   - Hooks 允许你在不增加组件层级的情况下重用状态逻辑，使得代码更加清晰。

3. **副作用的处理**:

   - 类组件中处理副作用需要使用多个生命周期方法，这可能导致逻辑分散和重复。
   - `useEffect` Hook 允许你将相关的副作用逻辑组织在一起，使得代码更加模块化。

4. **避免类相关的问题**:

   - 类组件中经常需要注意 `this` 的指向问题，以及生命周期方法中的陷阱（如忘记调用 `super(props)` 或错误地使用箭头函数导致方法不绑定到实例上）。
   - Hooks 避免了这些问题，因为它们不依赖于 `this`。

5. **更好的逻辑组织**:

   - 在类组件中，相似的逻辑可能会分散在不同的生命周期方法中。
   - Hooks 允许你按逻辑关联将代码组织在一起，而不是按照生命周期方法分割。

6. **更好的默认行为**:
   - `useEffect` 等 Hooks 提供了更好的默认行为，例如自动清理副作用，这减少了潜在的内存泄漏问题。

总的来说，Hooks 提供了一种更加灵活和强大的方式来编写函数组件，它们使得状态和副作用的管理变得更加简单和直观。尽管如此，React 仍然支持类组件，并且没有计划将其废弃。开发者可以根据自己的喜好和项目需求选择使用类组件还是函数组件。

## react常用hooks

React Hooks 是在函数组件中使用的，它们提供了一种在没有类的情况下使用 state 和其他 React 特性的方式。虽然函数组件没有类似于类组件的生命周期方法，但是 Hooks 提供了生命周期行为的替代方案。

以下是 React Hooks 及其与生命周期相关的应用：

1. **useState**:

   - 用于在函数组件中添加 state。
   - 应用案例：在组件中存储和更新用户输入。

   ```jsx
   const [count, setCount] = useState(0)
   ```

2. **useEffect**:

   - 用于处理副作用，类似于类组件中的 `componentDidMount`、`componentDidUpdate` 和 `componentWillUnmount`。
   - 应用案例：数据获取、订阅或手动更改 DOM。

   ```jsx
   useEffect(() => {
     // componentDidMount 和 componentDidUpdate:
     document.title = `You clicked ${count} times`

     // componentWillUnmount:
     return () => {
       // 清理订阅、定时器等
     }
   }, [count]) // 仅在 count 更改时更新
   ```

3. **useContext**:

   - 用于订阅 React 上下文（Context）的变化。
   - 应用案例：访问父组件提供的数据，如主题或用户认证状态。

   ```jsx
   const theme = useContext(ThemeContext)
   ```

4. **useReducer**:

   - 用于管理复杂组件状态逻辑，类似于 Redux 中的 reducer。
   - 应用案例：在有复杂状态逻辑的组件中替代 `useState`。

   ```jsx
   const [state, dispatch] = useReducer(reducer, initialState)
   ```

5. **useCallback**:

   - 返回一个记忆化的回调函数。
   - 应用案例：传递给子组件的回调函数，以避免不必要的子组件重新渲染。

   ```jsx
   const memoizedCallback = useCallback(() => {
     doSomething(a, b)
   }, [a, b])
   ```

6. **useMemo**:

   - 返回一个记忆化的值。
   - 应用案例：对复杂计算的结果进行缓存，只有当依赖项改变时才重新计算。

   ```jsx
   const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b])
   ```

7. **useRef**:

   - 返回一个可变的 ref 对象，其 `.current` 属性被初始化为传入的参数。
   - 应用案例：存储对 DOM 节点的引用或在组件的整个生命周期内保持不变的可变值。

   ```jsx
   const inputEl = useRef(null)
   const onButtonClick = () => {
     // `current` 指向已挂载到 DOM 上的文本输入元素
     inputEl.current.focus()
   }
   ```

8. **useLayoutEffect**:

   - 其作用类似于 `useEffect`，但它在所有的 DOM 变更之后同步触发重渲染。
   - 应用案例：读取 DOM 布局并同步触发重渲染，如测量元素大小或位置。

   ```jsx
   useLayoutEffect(() => {
     measureRef.current = measureDomNode()
   })
   ```

9. **useImperativeHandle**:

   - 用于在使用 ref 时自定义暴露给父组件的实例值。
   - 应用案例：在父组件中调用子组件的实例方法。

   ```jsx
   useImperativeHandle(ref, () => ({
     focus: () => {
       inputRef.current.focus()
     },
   }))
   ```

这些 Hooks 提供了在函数组件中处理各种生命周期场景的能力，使得函数组件可以执行几乎所有类组件能做的事情。通过组合这些 Hooks，你可以构建出复杂且高效的组件。

## react hooks中的组件通信

在 React Hooks 版本中，组件通信的方式与类组件中的通信方式类似，但是使用了 Hooks 提供的 API 来实现。以下是几种常见的组件通信方式：

### 1. Props 传递（父子组件通信）

父组件可以通过 props 向子组件传递数据和回调函数。

**父组件**:

```jsx
function ParentComponent() {
  const [parentData, setParentData] = useState('some data')

  const handleChildAction = (childData) => {
    // 处理子组件传来的数据
  }

  return <ChildComponent data={parentData} onAction={handleChildAction} />
}
```

**子组件**:

```jsx
function ChildComponent({ data, onAction }) {
  const [childData, setChildData] = useState('child data')

  const doSomething = () => {
    onAction(childData)
  }

  return (
    <div>
      <p>{data}</p>
      <button onClick={doSomething}>Click me</button>
    </div>
  )
}
```

### 2. Context API（跨组件层级通信）

当你需要在组件树中的多个层级之间共享数据时，可以使用 Context API。

**创建 Context**:

```jsx
const MyContext = React.createContext()
```

**提供者组件**:

```jsx
function App() {
  const [sharedData, setSharedData] = useState('shared data')

  return (
    <MyContext.Provider value={{ sharedData, setSharedData }}>
      {/* 其他组件 */}
    </MyContext.Provider>
  )
}
```

**消费者组件**:

```jsx
function SomeDeepChildComponent() {
  const { sharedData, setSharedData } = useContext(MyContext)

  const updateSharedData = () => {
    setSharedData('updated data')
  }

  return (
    <div>
      <p>{sharedData}</p>
      <button onClick={updateSharedData}>Update shared data</button>
    </div>
  )
}
```

### 3. 使用回调函数（子父组件通信）

子组件可以接收一个回调函数作为 prop，并在适当的时候调用它，将数据传递回父组件。

**父组件**:

```jsx
function ParentComponent() {
  const handleChildData = (data) => {
    console.log(data)
  }

  return <ChildComponent onChildData={handleChildData} />
}
```

**子组件**:

```jsx
function ChildComponent({ onChildData }) {
  const sendDataToParent = () => {
    const data = 'data from child'
    onChildData(data)
  }

  return <button onClick={sendDataToParent}>Send Data to Parent</button>
}
```

### 4. 使用自定义 Hooks（共享逻辑）

自定义 Hooks 可以用来封装可在多个组件之间共享的状态逻辑。

**自定义 Hook**:

```jsx
function useSharedState(initialValue) {
  const [state, setState] = useState(initialValue)
  // 可以添加更多的逻辑
  return [state, setState]
}
```

**组件使用自定义 Hook**:

```jsx
function ComponentOne() {
  const [sharedState, setSharedState] = useSharedState('initial value')
  // ...
}

function ComponentTwo() {
  const [sharedState, setSharedState] = useSharedState('initial value')
  // ...
}
```

### 5. 使用事件（非父子组件通信）

在某些情况下，你可能需要在不相关的组件之间通信。这时，可以使用事件系统。

**事件发射**:

```jsx
import EventEmitter from 'events'
const eventEmitter = new EventEmitter()

function ComponentOne() {
  const sendData = () => {
    eventEmitter.emit('sendData', 'some data')
  }

  return <button onClick={sendData}>Send Data</button>
}
```

**事件监听**:

```jsx
function ComponentTwo() {
  useEffect(() => {
    const handleData = (data) => {
      console.log(data)
    }

    eventEmitter.on('sendData', handleData)

    return () => {
      eventEmitter.removeListener('sendData', handleData)
    }
  }, [])

  return <div>Component Two</div>
}
```

这些是 React Hooks 版本中组件通信的一些常见方式。选择哪种方式取决于你的应用结构和特定需求。

## 基本实现原理

React Hooks 的实现原理涉及到 React 的内部工作机制，特别是它如何在函数组件的多次渲染之间保持状态和其他值。以下是 React Hooks 实现原理的一些关键点：

### 1. Hooks 是如何存储状态的？

React Hooks 使用一个内部的数据结构（通常是一个数组）来存储每个组件的状态和副作用。每次渲染时，React 都会按照 Hooks 被调用的顺序来访问这个数组。这就是为什么 Hooks 必须按照相同的顺序和不变的方式被调用的原因。

### 2. 函数组件的闭包问题

在类组件中，`this.state` 和 `this.props` 总是指向最新的状态和属性。但在函数组件中，每次组件渲染都会创建一个新的闭包，因此状态和属性可能会被“固定”在某个渲染时刻。Hooks 通过闭包捕获了渲染时的状态，但 React 内部保证了通过 `useState` 和 `useEffect` 等 Hooks 设置的状态和副作用总是最新的。

### 3. useState 和 useReducer

`useState` 和 `useReducer` Hooks 提供了一种在函数组件中存储和更新状态的方法。它们利用 React 的调度和更新机制来确保状态的更新能够触发组件的重新渲染，并且在下一次渲染时提供最新的状态。

### 4. useEffect

`useEffect` Hook 用于处理副作用，它在组件渲染到屏幕之后执行。React 保持了一个副作用列表，这些副作用会在 DOM 更新完成后运行。如果提供了依赖数组，React 将对比依赖项是否改变，以决定是否需要重新执行副作用。

### 5. useContext

`useContext` Hook 允许函数组件订阅 React 的 Context 对象。当 Context 的值变化时，所有使用了该 Context 的组件都会重新渲染。React 内部通过一个发布-订阅模式来实现这一点。

### 6. useRef

`useRef` Hook 返回一个可变的 ref 对象，其 `.current` 属性被初始化为传入的参数。这个对象在组件的整个生命周期内保持不变，因此可以用来存储任何可变值，包括 DOM 节点的引用。

### 7. 自定义 Hooks

自定义 Hooks 允许你将组件逻辑提取到可重用的函数中。自定义 Hooks 本质上是普通的 JavaScript 函数，但它们可以调用其他 Hooks，从而共享状态逻辑。

### 8. Hooks 的规则

React 强制执行两个主要的 Hooks 规则：只能在函数组件的顶层调用 Hooks（不能在循环、条件或嵌套函数中调用），并且只能在 React 函数组件或自定义 Hooks 中调用 Hooks。这些规则确保了 Hooks 在每次渲染时都能以相同的顺序被调用，从而使 React 能够正确地保持 Hooks 的内部状态。

### 9. 并发模式和其他新特性

React 18 引入了并发模式（Concurrent Mode）和其他新特性，如 `useTransition` 和 `useDeferredValue`。这些特性利用了 React 的并发渲染能力，允许 React 在长时间运行的任务中中断和恢复渲染工作，从而提高应用的响应性。

总的来说，React Hooks 的实现原理依赖于 React 的内部状态管理和更新机制。Hooks 提供了一种在函数组件中使用 React 特性的新方式，同时保持了组件的轻量和可组合性。通过维护一个内部的状态数组，并且确保 Hooks 的调用顺序一致，React 能够在函数组件之间保持状态的连续性和一致性。

## 更新机制

React Hooks 的更新机制与 React 类组件的更新机制相似，但它是专门为函数组件设计的。在 Hooks 出现之前，函数组件没有自己的状态或生命周期方法，因此无法轻松地管理状态或副作用。Hooks 的引入改变了这一点，使得函数组件能够利用 React 的更新机制。以下是 React Hooks 版本的更新机制的详细介绍：

### useState 和 useReducer 的更新

`useState` 和 `useReducer` Hooks 允许你在函数组件中添加状态。当你调用由 `useState` 提供的状态更新函数（例如 `setState`）时，React 会将新的状态值排队，并触发组件的重新渲染。

```jsx
const [count, setCount] = useState(0)

// 当这个函数被调用时，React 会安排一个更新，并重新渲染组件
const increment = () => {
  setCount(count + 1)
}
```

对于 `useReducer`，当你调用 `dispatch` 函数并传递一个 action 时，React 会执行 reducer 函数来计算新的状态，并触发组件的重新渲染。

```jsx
const [state, dispatch] = useReducer(reducer, initialState)

// 当这个函数被调用时，React 会执行 reducer 函数，然后安排一个更新，并重新渲染组件
const doSomething = () => {
  dispatch({ type: 'ACTION_TYPE' })
}
```

### useEffect 的更新

`useEffect` Hook 用于处理副作用，如数据获取、订阅或手动更改 DOM。它接受两个参数：一个副作用函数和一个依赖项数组。当组件渲染后，React 会在浏览器完成布局和绘制后，延迟执行副作用函数。

如果提供了依赖项数组，React 会在执行副作用之前对比依赖项是否发生变化。只有当依赖项改变时，副作用才会重新执行。如果依赖项数组为空（`[]`），副作用只会在组件挂载和卸载时执行一次。

```jsx
useEffect(() => {
  // 执行副作用操作
  const subscription = dataSource.subscribe()

  // 清理函数
  return () => {
    subscription.unsubscribe()
  }
}, [dataSource]) // 仅在 dataSource 改变时重新执行
```

### 更新的批处理

React 通常会对状态更新进行批处理，这意味着多个 `setState` 调用会合并成一个更新，从而减少不必要的渲染次数。在 React 18 中，这种批处理行为在所有情况下都是默认的，包括在 Promise、setTimeout、原生事件处理函数等异步代码中。

### 优先级和并发特性

React 18 引入了并发特性，如 `startTransition`，它允许你将某些更新标记为非紧急的。这意味着 React 可以在保持界面响应的同时，延迟这些更新的处理。

```jsx
const [inputValue, setInputValue] = useState('')

// 输入处理是即时的，但数据过滤可以延迟进行
const handleInputChange = (e) => {
  const value = e.target.value
  setInputValue(value)

  startTransition(() => {
    // 执行可能会导致较慢渲染的更新
  })
}
```

### 更新的合并和调度

React 的更新机制包括更新的合并和调度。当组件状态改变时，React 会将更新合并到一个队列中，并智能地调度这些更新，以便以最有效的方式更新 DOM。这个过程包括确定哪些组件需要更新、计算新的组件输出，并高效地更新 DOM。

### 总结

React Hooks 的更新机制使得函数组件能够以声明式的方式处理状态和副作用。React 通过维护一个内部的状态和副作用列表，确保了组件的更新是可预测和高效的。Hooks 的引入还使得开发者能够更容易地利用 React 的并发特性，从而创建更平滑和响应式的用户界面。

## react中的状态管理方案

在 React 中，状态管理是一个重要的概念，因为它决定了如何在组件之间共享和管理数据。随着应用程序的增长，状态管理变得越来越复杂。以下是 React 中常用的几种状态管理方案：

### 1. React 的内置状态管理

- **useState**: 用于在函数组件中声明状态变量。
- **useReducer**: 用于更复杂的状态逻辑，它接受一个 reducer 函数来管理多个子值的状态。
- **Context API**: 提供了一个无需为每层组件手动添加 props 的方式来共享值（如当前认证的用户、主题或首选语言）。

### 2. Redux

Redux 是一个独立的状态管理库，它可以与 React 一起使用。它提供了一个中央存储，用于存放应用程序的整个状态树，并按照严格的规则更新这些状态。

- **单一可预测的状态源**。
- **使用纯函数（reducers）来执行状态更新**。
- **中间件支持**，如 redux-thunk 和 redux-saga，用于处理异步逻辑。

### 3. MobX

MobX 是另一个流行的状态管理库，它通过响应式编程原则来简化状态管理。

- **使用可观察的状态**，当状态变化时自动更新组件。
- **更少的样板代码**，相比于 Redux。
- **更灵活的架构**，不强制要求单一的状态树或不可变数据。

### 4. Context API 结合 useReducer

React 的 Context API 可以与 useReducer 钩子结合使用，以在更大的应用程序中管理共享状态。

- **无需额外的库**。
- **适合中等规模的应用程序**。
- **类似于 Redux 的模式**，但更简单，没有中间件和额外的工具。

### 5. Recoil

Recoil 是 Facebook 的一个实验性状态管理库，它提供了一种新的方式来管理 React 应用程序的状态。

- **原子化的状态管理**，每个状态片段都是一个独立的单元。
- **基于 React 的原理**，与 React 的并发模式兼容。
- **更好的性能优化**，只重新渲染使用了特定状态的组件。

### 6. Zustand

Zustand 是一个简单、小巧的状态管理库，它提供了一个简单的 API 来创建全局状态。

- **简单直观的 API**。
- **不基于 Redux**，没有 reducer 和 action 的概念。
- **不需要使用 Context API**，直接与 React 钩子结合。

### 7. Apollo Client (GraphQL)

如果你的应用程序使用 GraphQL，Apollo Client 可以作为一个有效的状态管理解决方案。

- **集成了数据获取和缓存**。
- **提供本地状态管理功能**。
- **优化了与 GraphQL API 的交互**。

### 8. SWR / React Query

这些库专注于数据获取和缓存，但也可以用于状态管理。

- **内置的数据获取和缓存机制**。
- **自动重新验证和更新数据**。
- **简化异步数据的状态管理**。

选择哪种状态管理方案取决于你的应用程序的需求、团队的熟悉度和个人偏好。对于小型应用程序，React 的内置钩子可能就足够了。对于需要更复杂状态逻辑和全局状态管理的大型应用程序，Redux、MobX 或其他库可能更合适。

## 虚拟dom

虚拟DOM（Virtual DOM）是一种编程概念，其中UI的表示形式保持在内存中，并通过某种库（如React）与“真实”的DOM（Document Object Model）同步。这个过程称为调和（Reconciliation）。虚拟DOM提供了一种更高效的方式来更新视图，而不是直接操作真实DOM。

### 虚拟DOM的工作原理：

1. **创建虚拟DOM树**：当应用的状态变化时，一个新的虚拟DOM树会被创建。虚拟DOM树是轻量级的JavaScript对象结构，它代表了真实DOM的结构。

2. **比较虚拟DOM树**：新的虚拟DOM树会与上一次渲染时保存的虚拟DOM树进行比较。这个过程称为Diffing。在这个阶段，框架会确定哪些部分发生了变化。

3. **计算最小操作**：通过比较，框架会计算出需要进行的最小数量的DOM操作来使真实DOM与虚拟DOM同步。

4. **更新真实DOM**：框架会批量执行这些DOM操作，更新真实DOM以匹配最新的应用状态。这个过程是高效的，因为它最小化了与真实DOM的交互，这通常是昂贵的。

5. **保存虚拟DOM快照**：一旦真实DOM更新完成，框架会保存当前的虚拟DOM树。这个树将用于下一次状态变化时的比较。

### 为什么使用虚拟DOM：

- **性能优化**：直接操作DOM是昂贵的，因为它会引起浏览器的重排（reflow）和重绘（repaint）。虚拟DOM使得我们可以最小化真实DOM的操作，从而提高性能。

- **无需手动操作DOM**：开发者可以专注于状态管理和UI逻辑，而不是担心如何高效地操作DOM。

- **跨平台**：虚拟DOM不依赖于浏览器环境，因此可以用于非浏览器环境，如服务器渲染（SSR）或原生应用（React Native）。

### 虚拟DOM的局限性：

- **额外的内存消耗**：虚拟DOM需要在内存中维护一份当前DOM的副本。
- **不总是最快**：对于非常简单的更新，直接操作真实DOM可能会更快。
- **学习曲线**：虚拟DOM和相关框架的概念需要时间去学习和理解。

虚拟DOM是现代前端框架（如React、Vue和Inferno）的核心概念之一，它极大地改善了开发体验和应用性能。
