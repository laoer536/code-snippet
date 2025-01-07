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

# React 底层原理详解 (React 18+)

## 目录

1. JSX 转换过程
2. 虚拟 DOM 创建
3. Fiber 树构建
4. 渲染流程
5. 更新机制
6. Hooks 原理
7. 并发渲染

## 1. JSX 转换过程

### 1.1 JSX 到 React.createElement

在 React 18 中，JSX 转换使用 `jsx-runtime`：

```javascript
// 原始 JSX
function App() {
  return (
    <div className="container">
      <h1>Hello</h1>
      <p>React</p>
    </div>
  )
}

// 转换后的代码 (React 18)
import { jsx as _jsx } from 'react/jsx-runtime'

function App() {
  return _jsx('div', {
    className: 'container',
    children: [
      _jsx('h1', { children: 'Hello' }),
      _jsx('p', { children: 'React' }),
    ],
  })
}
```

### 1.2 新的 JSX Transform

```javascript
// React 18 的 JSX Transform
import { jsx } from 'react/jsx-runtime'

function jsx(type, props, key) {
  return {
    $$typeof: Symbol.for('react.element'),
    type,
    key,
    props,
  }
}
```

### 1.3 JSX 转换底层实现

JSX 的转换过程涉及 Babel 和 AST（抽象语法树），主要包含以下步骤：

#### 1.3.1 转换流程示例

```javascript
// 1. 原始 JSX 代码
function App() {
  return (
    <div className="container">
      <h1>Hello</h1>
    </div>
  );
}

// 2. Babel 解析为 AST
// AST 结构示例
{
  "type": "Program",
  "body": [{
    "type": "FunctionDeclaration",
    "id": {
      "type": "Identifier",
      "name": "App"
    },
    "body": {
      "type": "BlockStatement",
      "body": [{
        "type": "ReturnStatement",
        "argument": {
          "type": "JSXElement",
          "openingElement": {
            "type": "JSXOpeningElement",
            "name": {
              "type": "JSXIdentifier",
              "name": "div"
            },
            "attributes": [{
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "className"
              },
              "value": {
                "type": "StringLiteral",
                "value": "container"
              }
            }]
          },
          "children": [/*...*/]
        }
      }]
    }
  }]
}

// 3. 最终转换后的代码
import { jsx as _jsx } from 'react/jsx-runtime';

function App() {
  return _jsx("div", {
    className: "container",
    children: _jsx("h1", {
      children: "Hello"
    })
  });
}
```

#### 1.3.2 转换过程的主要阶段

```javascript
// 1. 词法分析（Lexical Analysis）
const tokens = lexer(`<div className="container">Hello</div>`)
// 结果: [
//   { type: 'JSX_TAG_START', value: '<' },
//   { type: 'JSX_IDENTIFIER', value: 'div' },
//   { type: 'JSX_ATTRIBUTE_KEY', value: 'className' },
//   { type: 'JSX_ATTRIBUTE_VALUE', value: 'container' },
//   ...
// ]

// 2. 语法分析（Syntactic Analysis）
const ast = parser(tokens)

// 3. 转换（Transform）
const transformedAst = transform(ast)

// 4. 代码生成（Code Generation）
const code = generate(transformedAst)
```

#### 1.3.3 Babel 插件实现

```javascript
// Babel 插件示例
module.exports = function (babel) {
  const { types: t } = babel

  return {
    name: 'transform-jsx',
    visitor: {
      JSXElement(path) {
        // 1. 获取标签名
        const openingElement = path.node.openingElement
        const tagName = openingElement.name.name

        // 2. 处理属性
        const attributes = openingElement.attributes.map((attr) => {
          return t.objectProperty(t.identifier(attr.name.name), attr.value)
        })

        // 3. 处理子元素
        const children = path.node.children.map((child) => {
          if (t.isJSXText(child)) {
            return t.stringLiteral(child.value)
          }
          return this.visitor.JSXElement.call(this, child)
        })

        // 4. 创建 _jsx 调用
        const jsxCall = t.callExpression(t.identifier('_jsx'), [
          t.stringLiteral(tagName),
          t.objectExpression([
            ...attributes,
            t.objectProperty(
              t.identifier('children'),
              children.length === 1 ? children[0] : children,
            ),
          ]),
        ])

        // 5. 替换原始节点
        path.replaceWith(jsxCall)
      },
    },
  }
}
```

#### 1.3.4 Babel 配置

```javascript
// babel.config.js
module.exports = {
  presets: [
    [
      '@babel/preset-react',
      {
        runtime: 'automatic', // 使用新的 JSX Transform
        importSource: 'react', // 指定 runtime 的来源
      },
    ],
  ],
}
```

#### 1.3.5 运行时转换

```javascript
// 开发环境中的 JSX 运行时
const jsx = (type, props, key) => {
  return {
    $$typeof: Symbol.for('react.element'),
    type,
    key: key === undefined ? null : key,
    props,
  }
}

// 生产环境优化版本
const jsx = (t, p, k) => ({
  $$typeof: Symbol.for('react.element'),
  type: t,
  key: k ?? null,
  props: p,
})
```

JSX 转换过程的优势：

1. **编译时优化**：在构建时完成转换
2. **运行时性能**：减少了运行时的开销
3. **更好的错误提示**：可以提供更准确的错误信息
4. **更小的包体积**：不需要包含完整的转换逻辑

## 2. 虚拟 DOM 创建

### 2.1 React Element 结构 (React 18)

```javascript
// React 18 中的 Element 结构
const element = {
  $$typeof: Symbol.for('react.element'),
  type: 'div',
  key: null,
  props: {
    className: 'container',
    children: [
      {
        $$typeof: Symbol.for('react.element'),
        type: 'h1',
        props: { children: 'Hello' },
      },
    ],
  },
}
```

### 2.2 函数式组件渲染

```javascript
// 函数式组件示例
function Welcome(props) {
  return _jsx('h1', { children: `Hello, ${props.name}` })
}

// 使用 Hooks 的组件
function Counter() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    document.title = `Count: ${count}`
  }, [count])

  return _jsx('div', {
    children: [
      _jsx('h1', { children: `Count: ${count}` }),
      _jsx('button', {
        onClick: () => setCount((c) => c + 1),
        children: 'Increment',
      }),
    ],
  })
}
```

## 3. Fiber 树构建 (React 18)

### 3.1 Fiber 架构基础

首先看一个复杂组件示例：

```jsx
// TodoApp 组件
function TodoApp() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React' },
    { id: 2, text: 'Learn Fiber' },
  ])
  const [input, setInput] = useState('')

  return (
    <div className="todo-app">
      <header>
        <h1>Todo List</h1>
        <input value={input} onChange={(e) => setInput(e.target.value)} />
      </header>
      <ul className="todo-list">
        {todos.map((todo) => (
          <TodoItem key={todo.id} text={todo.text} />
        ))}
      </ul>
    </div>
  )
}

function TodoItem({ text }) {
  const [isDone, setIsDone] = useState(false)

  return (
    <li className={isDone ? 'done' : ''}>
      <input
        type="checkbox"
        checked={isDone}
        onChange={() => setIsDone(!isDone)}
      />
      <span>{text}</span>
    </li>
  )
}
```

对应的 Fiber 节点树结构：

```javascript
// Root Fiber
const rootFiber = {
  tag: 3, // HostRoot
  stateNode: document.getElementById('root'),
  type: null,
  return: null,
  child: todoAppFiber, // 指向 TodoApp 组件
  memoizedState: null,
  memoizedProps: null,
}

// TodoApp 组件对应的 Fiber
const todoAppFiber = {
  tag: 0, // FunctionComponent
  type: TodoApp,
  key: null,
  stateNode: null,
  return: rootFiber,
  child: divFiber, // 指向最外层 div
  sibling: null,
  memoizedState: {
    memoizedState: [
      [
        { id: 1, text: 'Learn React' },
        { id: 2, text: 'Learn Fiber' },
      ], // todos state
      Function, // setTodos
    ],
    next: {
      memoizedState: ['', Function], // input state
    },
  },
  memoizedProps: {},
  flags: 0,
  lanes: 0,
}

// 最外层 div 的 Fiber
const divFiber = {
  tag: 5, // HostComponent
  type: 'div',
  key: null,
  stateNode: HTMLDivElement, // 实际的 DOM 节点
  return: todoAppFiber,
  child: headerFiber,
  sibling: null,
  memoizedProps: {
    className: 'todo-app',
    children: [
      /*...*/
    ],
  },
  flags: 0,
}

// header 的 Fiber
const headerFiber = {
  tag: 5, // HostComponent
  type: 'header',
  key: null,
  stateNode: HTMLElement,
  return: divFiber,
  child: h1Fiber,
  sibling: ulFiber, // 指向同级的 ul
  memoizedProps: {
    children: [
      /*...*/
    ],
  },
}

// h1 的 Fiber
const h1Fiber = {
  tag: 5,
  type: 'h1',
  key: null,
  stateNode: HTMLHeadingElement,
  return: headerFiber,
  child: null,
  sibling: inputFiber,
  memoizedProps: {
    children: 'Todo List',
  },
}

// input 的 Fiber
const inputFiber = {
  tag: 5,
  type: 'input',
  key: null,
  stateNode: HTMLInputElement,
  return: headerFiber,
  child: null,
  sibling: null,
  memoizedProps: {
    value: '',
    onChange: Function,
  },
}

// ul 的 Fiber
const ulFiber = {
  tag: 5,
  type: 'ul',
  key: null,
  stateNode: HTMLUListElement,
  return: divFiber,
  child: todoItemFiber1,
  sibling: null,
  memoizedProps: {
    className: 'todo-list',
    children: [
      /*...*/
    ],
  },
}

// 第一个 TodoItem 组件的 Fiber
const todoItemFiber1 = {
  tag: 0, // FunctionComponent
  type: TodoItem,
  key: '1',
  stateNode: null,
  return: ulFiber,
  child: liFiber1,
  sibling: todoItemFiber2,
  memoizedState: {
    memoizedState: [false, Function], // isDone state
  },
  memoizedProps: {
    text: 'Learn React',
  },
}

// 第一个 TodoItem 的 li 元素 Fiber
const liFiber1 = {
  tag: 5,
  type: 'li',
  key: null,
  stateNode: HTMLLIElement,
  return: todoItemFiber1,
  child: checkboxFiber1,
  sibling: null,
  memoizedProps: {
    className: '',
    children: [
      /*...*/
    ],
  },
}

// 第一个 TodoItem 的 checkbox Fiber
const checkboxFiber1 = {
  tag: 5,
  type: 'input',
  key: null,
  stateNode: HTMLInputElement,
  return: liFiber1,
  child: null,
  sibling: spanFiber1,
  memoizedProps: {
    type: 'checkbox',
    checked: false,
    onChange: Function,
  },
}

// 第一个 TodoItem 的文本 span Fiber
const spanFiber1 = {
  tag: 5,
  type: 'span',
  key: null,
  stateNode: HTMLSpanElement,
  return: liFiber1,
  child: null,
  sibling: null,
  memoizedProps: {
    children: 'Learn React',
  },
}

// 第二个 TodoItem 的结构类似...
const todoItemFiber2 = {
  tag: 0,
  type: TodoItem,
  key: '2',
  // ... 结构类似 todoItemFiber1
}
```

这个示例展示了：

1. **Fiber 节点的层级关系**：

   - `return`: 指向父节点
   - `child`: 指向第一个子节点
   - `sibling`: 指向下一个兄弟节点

2. **不同类型节点的特征**：

   - 函数组件 (tag: 0)
   - DOM 元素 (tag: 5)
   - Root (tag: 3)

3. **状态管理**：

   - `memoizedState`: 保存组件的 state
   - `memoizedProps`: 保存组件的 props

4. **副作用标记**：

   - `flags`: 标记更新类型
   - `lanes`: 更新优先级

5. **实际 DOM 关联**：
   - `stateNode`: 指向实际的 DOM 节点或组件实例

### 3.2 Fiber 与并发渲染的结合

```javascript
// 1. 工作循环
function workLoopConcurrent(deadline) {
  // shouldYield 用于判断是否需要让出执行权
  let shouldYield = false

  while (workInProgress !== null && !shouldYield) {
    // performUnitOfWork 处理一个 Fiber 节点
    workInProgress = performUnitOfWork(workInProgress)
    // 检查是否需要让出执行权给浏览器
    shouldYield = deadline.timeRemaining() < 1
  }

  // 如果还有未完成的工作，安排下一个时间片
  if (workInProgress !== null) {
    // 使用调度器安排下一次执行
    scheduleCallback(workLoopConcurrent)
  }
}

// 2. 优先级调度
function scheduleUpdateOnFiber(fiber, lane) {
  // 获取 root
  const root = markUpdateLaneFromFiberToRoot(fiber)

  // 标记优先级
  markRootUpdated(root, lane)

  // 调度更新
  ensureRootIsScheduled(root)
}

// 3. 任务优先级区分
const InputContinuousLane = 0b0000000000000000000000000000100
const DefaultLane = 0b0000000000000000000000000010000
const TransitionLane = 0b0000000000000000000100000000000
const IdleLane = 0b1000000000000000000000000000000

// 4. 并发特性的实现
function startTransition(scope) {
  const prevTransition = ReactCurrentBatchConfig.transition
  ReactCurrentBatchConfig.transition = 1
  try {
    scope()
  } finally {
    ReactCurrentBatchConfig.transition = prevTransition
  }
}
```

### 3.3 Fiber 工作原理

1. **构建阶段（Render/Reconciliation）**：

   - 创建新的 Fiber 节点
   - 对比新旧节点（Diffing）
   - 标记副作用（Effects）

2. **提交阶段（Commit）**：
   - 处理副作用
   - 更新 DOM
   - 调用生命周期和 hooks

### 3.4 并发渲染增强

1. **时间切片**：

   - 将长任务分割成小片
   - 可中断和恢复
   - 优先级调度

2. **优先级管理**：
   - 紧急更新（如用户输入）
   - 过渡更新（如 UI 切换）
   - 空闲更新（如预渲染）

```javascript
// 优先级区分示例
function updateUI() {
  // 紧急更新：直接执行
  setInputValue(e.target.value)

  // 过渡更新：可中断
  startTransition(() => {
    setSearchResults(search(e.target.value))
  })
}
```

### 3.5 Fiber Diff 算法

```javascript
// Diff 算法的核心实现
function reconcileChildFibers(
  returnFiber: Fiber,
  currentFirstChild: Fiber | null,
  newChild: any
): Fiber | null {
  // 1. 处理单个元素
  if (typeof newChild === 'object' && newChild !== null) {
    switch (newChild.$$typeof) {
      case REACT_ELEMENT_TYPE:
        return placeSingleChild(
          reconcileSingleElement(
            returnFiber,
            currentFirstChild,
            newChild
          )
        );
      // ... 其他类型处理
    }
  }

  // 2. 处理多个子元素（数组）
  if (Array.isArray(newChild)) {
    return reconcileChildrenArray(
      returnFiber,
      currentFirstChild,
      newChild
    );
  }

  // 3. 处理文本节点
  if (typeof newChild === 'string' || typeof newChild === 'number') {
    return reconcileSingleTextNode(
      returnFiber,
      currentFirstChild,
      '' + newChild
    );
  }

  // 4. 删除旧节点
  return deleteRemainingChildren(returnFiber, currentFirstChild);
}

// 数组 Diff 的核心实现
function reconcileChildrenArray(
  returnFiber: Fiber,
  currentFirstChild: Fiber | null,
  newChildren: Array<any>
): Fiber | null {
  let oldFiber = currentFirstChild;
  let previousNewFiber = null;
  let newIdx = 0;

  // 第一轮：处理更新的节点
  for (; oldFiber !== null && newIdx < newChildren.length; newIdx++) {
    if (oldFiber.index > newIdx) {
      // 位置不匹配，需要移动
      nextOldFiber = oldFiber;
      oldFiber = null;
    } else {
      nextOldFiber = oldFiber.sibling;
    }

    const newFiber = updateSlot(
      returnFiber,
      oldFiber,
      newChildren[newIdx]
    );

    if (newFiber === null) {
      break; // key 不同，跳出第一轮循环
    }

    if (oldFiber && newFiber.alternate === null) {
      // 删除旧节点
      deleteChild(returnFiber, oldFiber);
    }

    // 更新位置信息
    lastPlacedIndex = placeChild(newFiber, lastPlacedIndex, newIdx);

    if (previousNewFiber === null) {
      resultingFirstChild = newFiber;
    } else {
      previousNewFiber.sibling = newFiber;
    }
    previousNewFiber = newFiber;
    oldFiber = nextOldFiber;
  }

  // 第二轮：处理剩余的新节点（添加）
  if (newIdx === newChildren.length) {
    // 删除剩余的旧节点
    deleteRemainingChildren(returnFiber, oldFiber);
    return resultingFirstChild;
  }

  // 第三轮：处理移动的节点
  if (oldFiber === null) {
    // 添加剩余的新节点
    for (; newIdx < newChildren.length; newIdx++) {
      const newFiber = createChild(returnFiber, newChildren[newIdx]);
      if (newFiber === null) continue;
      lastPlacedIndex = placeChild(newFiber, lastPlacedIndex, newIdx);
      // ... 构建兄弟关系
    }
    return resultingFirstChild;
  }

  // 将剩余的旧节点加入 map，用于复用
  const existingChildren = mapRemainingChildren(returnFiber, oldFiber);

  // 尝试复用剩余节点
  for (; newIdx < newChildren.length; newIdx++) {
    const newFiber = updateFromMap(
      existingChildren,
      returnFiber,
      newIdx,
      newChildren[newIdx]
    );
    // ... 处理复用节点
  }

  return resultingFirstChild;
}
```

### 3.6 Fiber Diff 与传统 Diff 的区别

1. **可中断性**：

   - 传统虚拟 DOM Diff 是同步的、不可中断的过程
   - Fiber Diff 是可以被中断的，可以分片执行
   - 通过 `workInProgress` 树实现可恢复

2. **副作用收集**：

   - 传统 Diff 直接操作 DOM
   - Fiber Diff 会在 `flags` 中标记副作用
   - 统一在 commit 阶段处理副作用

3. **优先级处理**：

   - 传统 Diff 没有优先级的概念
   - Fiber Diff 可以根据优先级调度更新
   - 高优先级更新可以打断低优先级 Diff

4. **节点复用**：

   - 传统 Diff 主要基于三个层面的比较（类型、属性、子节点）
   - Fiber Diff 增加了 `alternate` 缓存和 `key` 的复用机制
   - 通过 `mapRemainingChildren` 优化节点复用

5. **更新方式**：
   - 传统 Diff 是一次性完成的同步过程
   - Fiber Diff 将组件更新分解成多个工作单元
   - 每个工作单元可以被独立调度和中断

补充说明：Fiber 节点与组件是一一对应的关系，每个组件都会创建对应的 Fiber 节点。Fiber 的革新不在于更新粒度的改变，而在于：

1. 能够将组件的渲染工作分解成小单元
2. 能够对渲染工作进行优先级排序
3. 能够暂停、继续或丢弃渲染工作
4. 能够复用已完成的工作

### 3.7 Fiber 结构与更新的常见误解

#### 3.7.1 误解：Fiber 的细粒度结构意味着更新也是细粒度的

虽然 Fiber 的结构是细粒度的（每个元素都有对应的 Fiber 节点），但默认的更新策略仍然是组件级别的。让我们通过例子来理解：

```javascript
// 1. 组件结构
function TodoList() {
  const [count, setCount] = useState(0)

  return (
    <div className="container">
      <h1>Count: {count}</h1>
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
      </ul>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
    </div>
  )
}

// 2. 对应的 Fiber 结构（简化版）
const fiber = {
  // TodoList 组件的 Fiber
  tag: 0,
  type: TodoList,
  child: {
    // div 的 Fiber
    tag: 5,
    type: 'div',
    child: {
      // h1 的 Fiber
      tag: 5,
      type: 'h1',
      sibling: {
        // ul 的 Fiber
        tag: 5,
        type: 'ul',
        child: {
          // li 的 Fiber
          tag: 5,
          type: 'li',
          // ... 更多 li
        },
      },
    },
  },
}
```

#### 3.7.2 实际的更新行为

1. **默认情况**：

```javascript
function TodoList() {
  const [count, setCount] = useState(0)

  // 当 count 更新时，整个组件都会重新渲染
  // 尽管只有 h1 中的内容发生变化
  // ul 和其中的 li 也会重新渲染
}
```

2. **优化方案**：

```javascript
// 使用 memo 进行组件级别的优化
const TodoItems = React.memo(function TodoItems() {
  return (
    <ul>
      <li>Item 1</li>
      <li>Item 2</li>
    </ul>
  )
})

function TodoList() {
  const [count, setCount] = useState(0)

  return (
    <div className="container">
      <h1>Count: {count}</h1>
      <TodoItems /> {/* 现在不会随 count 更新而重新渲染 */}
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
    </div>
  )
}
```

#### 3.7.3 Fiber 结构的真正意义

1. **可中断的更新**：

```javascript
// Fiber 结构允许 React 在处理更新时：
while (nextUnitOfWork && !shouldYield()) {
  // 处理一个工作单元
  nextUnitOfWork = performUnitOfWork(nextUnitOfWork)
  // 检查是否需要让出控制权
  if (deadline.timeRemaining() < 1) {
    // 保存进度，让出控制权
    break
  }
}
```

2. **优先级调度**：

```javascript
function TodoList() {
  const [isPending, startTransition] = useTransition()

  const handleUpdate = () => {
    // 高优先级更新
    setInputValue(input)

    // 低优先级更新
    startTransition(() => {
      setFilteredItems(filterItems(input))
    })
  }
}
```

3. **更新追踪**：

```javascript
const fiber = {
  // 通过 flags 标记更新类型
  flags: Update | Placement | Deletion,

  // 通过 lanes 标记优先级
  lanes: UpdateLane | TransitionLane,
}
```

#### 3.7.4 最佳实践

1. **合理的组件拆分**：

```javascript
// 将可能频繁更新的部分抽离为独立组件
function Counter({ count }) {
  return <h1>Count: {count}</h1>
}

function TodoList() {
  const [count, setCount] = useState(0)
  return (
    <div>
      <Counter count={count} />
      <TodoItems /> {/* 独立的不需要更新的部分 */}
    </div>
  )
}
```

2. **使用适当的优化 API**：

```javascript
// 1. React.memo 用于组件级缓存
const MemoizedComponent = React.memo(Component)

// 2. useMemo 用于值的缓存
const memoizedValue = useMemo(() => computeExpensive(a, b), [a, b])

// 3. useCallback 用于回调函数的缓存
const memoizedCallback = useCallback(() => {
  doSomething(a, b)
}, [a, b])
```

3. **利用并发特性**：

```javascript
// 使用并发特性处理大量数据更新
function handleChange(e) {
  // 立即更新输入值
  setInputValue(e.target.value)

  // 延迟处理大量数据
  startTransition(() => {
    setFilteredList(filterLargeList(e.target.value))
  })
}
```

理解这个误解很重要，因为：

1. 它帮助我们正确认识 Fiber 架构的作用
2. 指导我们采用正确的优化策略
3. 帮助我们更好地利用 React 的并发特性

## 4. Hooks 实现 (React 18)

```javascript
// Hooks 在 React 18 中的实现
function useState(initialState) {
  const dispatcher = ReactCurrentDispatcher.current
  return dispatcher.useState(initialState)
}

function useEffect(create, deps) {
  const dispatcher = ReactCurrentDispatcher.current
  return dispatcher.useEffect(create, deps)
}

function useCallback(callback, deps) {
  const dispatcher = ReactCurrentDispatcher.current
  return dispatcher.useCallback(callback, deps)
}

function useMemo(create, deps) {
  const dispatcher = ReactCurrentDispatcher.current
  return dispatcher.useMemo(create, deps)
}
```

## 5. 并发特性 (React 18)

### 5.1 并发渲染的控制方式

React 18 提供了多种方式来控制并发渲染：

1. **自动并发模式**：

```javascript
// 使用 createRoot API 自动启用并发特性
import { createRoot } from 'react-dom/client'

const root = createRoot(container)
root.render(<App />)
```

2. **手动控制并发更新**：

```javascript
// 1. useTransition - 用于非紧急更新
function SearchPage() {
  const [isPending, startTransition] = useTransition()
  const [searchQuery, setSearchQuery] = useState('')

  function handleInput(e) {
    // 紧急更新：立即响应输入
    setSearchQuery(e.target.value)

    // 非紧急更新：可以被中断
    startTransition(() => {
      // 复杂的搜索逻辑
      setSearchResults(search(e.target.value))
    })
  }

  return (
    <div>
      <Input value={searchQuery} onChange={handleInput} />
      {isPending && <Spinner />}
      <SearchResults />
    </div>
  )
}

// 2. useDeferredValue - 用于延迟值的更新
function AutoComplete({ searchText }) {
  const deferredText = useDeferredValue(searchText)

  // 使用 deferredText 进行复杂计算
  const suggestions = useMemo(() => {
    return computeExpensiveSuggestions(deferredText)
  }, [deferredText])

  return <SuggestionsList items={suggestions} />
}

// 3. Suspense - 用于数据加载和代码分割
const SlowComponent = React.lazy(() => import('./SlowComponent'))

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <SlowComponent />
    </Suspense>
  )
}
```

### 5.2 并发更新的优先级

React 18 中的更新优先级分类：

```javascript
// 1. 紧急更新（同步）
// - 用户输入
// - 点击事件
// - 布局测量
const handleInput = (e) => {
  setInputValue(e.target.value) // 立即执行
}

// 2. 过渡更新（可中断）
// - 界面切换
// - 数据筛选
const handleFilter = (e) => {
  startTransition(() => {
    setFilteredItems(items.filter((item) => item.name.includes(e.target.value)))
  })
}

// 3. 空闲更新（最低优先级）
// - 预加载
// - 数据预取
const prefetchData = () => {
  // 使用 useTransition 的低优先级
  startTransition(() => {
    prefetchNextPage()
  })
}
```

### 5.3 并发渲染的实现机制

```javascript
// 简化的并发渲染实现
function workLoopConcurrent(deadline) {
  // 初始化工作单元
  let currentFiber = workInProgressRoot

  while (currentFiber && !shouldYield(deadline)) {
    // 1. 检查优先级
    if (hasHigherPriorityWork()) {
      // 中断当前工作
      break
    }

    // 2. 处理当前工作单元
    currentFiber = performUnitOfWork(currentFiber)

    // 3. 检查是否需要让出控制权
    if (deadline.timeRemaining() < 1) {
      // 保存进度并让出控制权
      requestIdleCallback(workLoopConcurrent)
      break
    }
  }

  // 4. 完成或中断后的处理
  if (!currentFiber) {
    // 所有工作完成，提交更新
    commitRoot()
  }
}

// 优先级检查
function hasHigherPriorityWork() {
  return (
    scheduledPriority !== currentPriority && scheduledPriority > currentPriority
  )
}

// 时间片检查
function shouldYield(deadline) {
  return deadline.timeRemaining() < 1
}
```

### 5.4 使用场景建议

1. **使用 useTransition 的场景**：

   - 大量数据的过滤和排序
   - 复杂列表的更新
   - 页面切换动画

2. **使用 useDeferredValue 的场景**：

   - 实时搜索建议
   - 图表数据更新
   - 大型表单验证

3. **使用 Suspense 的场景**：
   - 数据预取
   - 组件懒加载
   - 图片加载优化

## 6. 自动批处理 (React 18)

### 6.1 基本概念

自动批处理是 React 18 中的一个重要优化特性，它可以将多个状态更新合并为一次重渲染。

### 6.2 React 18 之前的批处理

```javascript
// React 17 及之前版本
function TodoList() {
  const [todos, setTodos] = useState([])
  const [count, setCount] = useState(0)

  function handleClick() {
    // 在事件处理函数中会批处理
    setTodos((t) => [...t, 'New Todo']) // 不会立即重渲染
    setCount((c) => c + 1) // 不会立即重渲染
    // 这里才会重渲染一次

    // 在异步回调中不会批处理
    setTimeout(() => {
      setTodos((t) => [...t, 'New Todo']) // 触发重渲染
      setCount((c) => c + 1) // 触发重渲染
    }, 0)
  }
}
```

### 6.3 React 18 的自动批处理

```javascript
// React 18
function TodoList() {
  const [todos, setTodos] = useState([])
  const [count, setCount] = useState(0)

  async function handleClick() {
    // 1. 同步代码中的批处理
    setTodos((t) => [...t, 'New Todo']) // 不会立即重渲染
    setCount((c) => c + 1) // 不会立即重渲染
    // 这里重渲染一次

    // 2. setTimeout 中的自动批处理
    setTimeout(() => {
      setTodos((t) => [...t, 'New Todo']) // 不会立即重渲染
      setCount((c) => c + 1) // 不会立即重渲染
      // 这里重渲染一次
    }, 0)

    // 3. Promise 中的自动批处理
    await Promise.resolve()
    setTodos((t) => [...t, 'New Todo']) // 不会立即重渲染
    setCount((c) => c + 1) // 不会立即重渲染
    // 这里重渲染一次

    // 4. await 后的自动批处理
    await someAsyncOperation()
    setTodos((t) => [...t, 'New Todo']) // 不会立即重渲染
    setCount((c) => c + 1) // 不会立即重渲染
    // 这里重渲染一次
  }
}
```

### 6.4 手动控制批处理

```javascript
import { flushSync } from 'react-dom'

function TodoList() {
  const [todos, setTodos] = useState([])
  const [count, setCount] = useState(0)

  function handleClick() {
    // 使用 flushSync 强制同步更新
    flushSync(() => {
      setTodos((t) => [...t, 'New Todo']) // 立即重渲染
    })

    flushSync(() => {
      setCount((c) => c + 1) // 立即重渲染
    })

    // 正常的批处理继续有效
    setTodos((t) => [...t, 'New Todo']) // 不会立即重渲染
    setCount((c) => c + 1) // 不会立即重渲染
    // 这里重渲染一次
  }
}
```

### 6.5 批处理的优势

1. **性能优化**：

   - 减少不必要的重渲染
   - 合并多个状态更新
   - 避免中间状态的渲染

2. **一致性**：

   - 确保状态更新的原子性
   - 避免不必要的中间状态
   - 减少视觉抖动

3. **自动化**：
   - 不需要手动优化
   - 在所有场景下都有效
   - 包括异步代码

### 6.6 注意事项

1. **何时使用 flushSync**：

   - 需要立即获取 DOM 更新时
   - 与第三方库集成时
   - 特殊的动画效果

2. **批处理的限制**：
   - 不同优先级的更新不会批处理
   - 不同组件树的更新不会批处理
   - 手动调用 flushSync 会打破批处理

## 总结

React 18 的主要改进：

1. 新的 JSX Transform
2. 自动批处理
3. 并发渲染
4. Suspense 改进
5. 新的 Root API
6. 更好的 SSR 支持

## 进阶学习建议

1. 深入了解并发渲染机制
2. 学习 Suspense 数据获取模式
3. 掌握 useTransition 和 useDeferredValue
4. 研究 React 18 的服务端组件
5. 了解新的 Streaming SSR 架构
