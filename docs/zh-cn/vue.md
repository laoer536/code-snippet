---
title: 'vue'
---

# Vue

## vue

Vue.js 是一个渐进式 JavaScript 框架，用于构建用户界面。它的核心库专注于视图层，并且易于学习和集成。Vue 的核心概念包括：

1. **响应式系统（Reactivity）**:
   Vue 的响应式系统能够自动追踪依赖关系并在数据变化时更新视图。这是通过使用 getter/setter 和现代 JavaScript 的 Proxy 特性来实现的。

2. **组件（Components）**:
   Vue 应用由多个可复用的组件构成，每个组件都有自己的数据、方法、生命周期钩子和模板。

3. **模板（Templates）**:
   Vue 使用基于 HTML 的模板语法，允许开发者声明式地将 DOM 绑定到底层 Vue 实例的数据。模板支持数据绑定、指令、过滤器和事件处理等。

4. **实例（Instance）**:
   每个 Vue 应用都是通过构造函数 `Vue` 创建一个新的 Vue 实例开始的。Vue 实例作为根组件，它提供了数据、计算属性、方法和生命周期钩子等选项。

5. **数据绑定（Data Binding）**:
   Vue 提供了数据绑定的选项，如 `v-bind` 指令用于绑定属性，`v-model` 用于在表单输入和应用状态之间创建双向数据绑定。

6. **指令（Directives）**:
   指令是带有 `v-` 前缀的特殊标记，用于在模板中执行 JavaScript 表达式。常见的指令有 `v-if`、`v-for`、`v-show`、`v-on` 等。

7. **计算属性（Computed Properties）**:
   计算属性是基于它们的依赖进行缓存的响应式属性。它们只有在相关依赖发生变化时才会重新计算。

8. **侦听器（Watchers）**:
   侦听器用于观察和响应 Vue 实例上的数据变动。当监测的数据变化时，侦听器会执行一个回调函数。

9. **生命周期钩子（Lifecycle Hooks）**:
   Vue 实例有一个完整的生命周期，从创建到销毁。生命周期钩子允许开发者在不同阶段添加自己的代码，如 `created`、`mounted`、`updated` 和 `destroyed`。

10. **事件处理（Event Handling）**:
    通过 `v-on` 指令或 `@` 符号，Vue 可以监听 DOM 事件并在触发时执行 JavaScript 表达式。

11. **插槽（Slots）**:
    插槽是一种分发内容的机制，允许父组件向子组件的模板内插入内容。

12. **混入（Mixins）**:
    混入是一种分发 Vue 组件中可复用功能的方式。一个混入对象可以包含任何组件选项。

13. **插件（Plugins）**:
    Vue 插件通常用于为 Vue 添加全局功能。它们可以添加全局方法和属性、添加组件选项、通过全局混入来添加全局功能等。

14. **虚拟 DOM（Virtual DOM）**:
    Vue 使用虚拟 DOM 来提高性能和效率，通过最小化 DOM 操作和批量异步更新来优化渲染过程。

15. **Vue CLI**:
    Vue CLI 是一个全功能的系统，用于快速开发 Vue.js 项目，提供了项目脚手架、开发服务器、构建工具和插件系统等。

16. **Vuex**:
    Vuex 是 Vue 应用的状态管理模式和库，它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化。

17. **Vue Router**:
    Vue Router 是 Vue.js 的官方路由器，用于构建单页面应用（SPA）。它允许定义路由和子路由，控制页面切换等。

这些核心概念构成了 Vue.js 的基础，使得它成为一个易于上手且功能强大的前端框架。通过理解和运用这些概念，开发者可以创建高效、可维护和可扩展的前端应用程序。

## vue3常用api

Vue 3 是一个渐进式的JavaScript框架，用于构建用户界面。它引入了许多新的API和概念，以提高性能和开发体验。以下是一些Vue 3中常用的API及其详细说明：

1. `createApp`：

   - 用途：创建一个Vue应用实例。

   - 示例：

     ```javascript
     import { createApp } from 'vue'
     import App from './App.vue'

     const app = createApp(App)
     app.mount('#app')
     ```

2. `ref`：

   - 用途：创建一个响应式的数据引用。

   - 示例：

     ```javascript
     import { ref } from 'vue'

     const count = ref(0)
     ```

3. `reactive`：

   - 用途：创建一个响应式的对象。

   - 示例：

     ```javascript
     import { reactive } from 'vue'

     const state = reactive({ count: 0 })
     ```

4. `computed`：

   - 用途：创建一个基于响应式依赖的计算属性。

   - 示例：

     ```javascript
     import { computed } from 'vue'

     const count = ref(0)
     const doubled = computed(() => count.value * 2)
     ```

5. `watch` 和 `watchEffect`：

   - 用途：观察响应式依赖并在它们变化时执行回调。

   - 示例：

     ```javascript
     import { watch, ref } from 'vue'

     const count = ref(0)
     watch(count, (newValue, oldValue) => {
       console.log(`count changed from ${oldValue} to ${newValue}`)
     })
     ```

6. `onMounted`, `onUpdated`, `onUnmounted` 等生命周期钩子：

   - 用途：在组件的不同生命周期阶段执行代码。

   - 示例：

     ```javascript
     import { onMounted } from 'vue'

     onMounted(() => {
       console.log('Component is mounted!')
     })
     ```

7. `provide` 和 `inject`：

   - 用途：实现跨组件的依赖注入。

   - 示例：

     ```javascript
     import { provide, inject } from 'vue'

     // 父组件中
     provide('key', value)

     // 子组件中
     const value = inject('key')
     ```

8. `setup`：

   - 用途：组合式API的入口点，用于定义组件的响应式数据和逻辑。

   - 示例：

     ```javascript
     import { ref, onMounted } from 'vue'

     export default {
       setup() {
         const count = ref(0)

         onMounted(() => {
           console.log('Component is mounted!')
         })

         return { count }
       },
     }
     ```

9. `toRefs` 和 `toRef`：

   - 用途：将响应式对象的属性转换为单独的响应式引用。

   - 示例：

     ```javascript
     import { reactive, toRefs } from 'vue'

     const state = reactive({ count: 0 })
     const { count } = toRefs(state)
     ```

10. `nextTick`：

- 用途：在下一个DOM更新循环之后执行代码。

- 示例：

  ```javascript
  import { nextTick } from 'vue'

  nextTick(() => {
    // DOM更新后的代码
  })
  ```

这些是Vue 3中一些常用的API。Vue 3还引入了许多其他的API和改进，例如Teleport, Suspense, Fragments等，以及Composition API的其他功能，这些都是为了提供更灵活和强大的开发体验。

## vue3实现原理和更新机制

Vue 3 的实现原理和更新机制包括了响应式系统、虚拟DOM、组件实例和更新流程等多个方面。下面详细说明这些核心概念：

### 响应式系统

Vue 3 使用了一个全新的响应式系统，它基于ES6的Proxy特性，这使得Vue可以更高效地追踪依赖和更新变化。

1. **Proxy**：Vue 3使用Proxy对象来监听数据的变化。当你使用`reactive`函数创建一个响应式对象时，Vue会用Proxy包裹这个对象，从而能够拦截对该对象的所有操作。

2. **依赖追踪**：当响应式数据被读取时，Vue会记录当前正在执行的副作用（如计算属性或渲染函数），并将其作为依赖。当数据变化时，Vue知道需要重新执行哪些副作用。

3. **更新触发**：当响应式数据被修改时，Proxy会捕捉到这个变化，并通知Vue更新依赖于这个数据的副作用。

### 虚拟DOM

Vue 3继续使用虚拟DOM（Virtual DOM）来优化UI的渲染。虚拟DOM是对真实DOM的抽象表示，它允许Vue在内存中计算出最小的DOM操作，从而提高性能。

1. **渲染函数**：组件的模板会被编译成渲染函数，渲染函数返回虚拟DOM树。

2. **Diff算法**：当数据变化导致组件需要更新时，Vue会执行渲染函数生成新的虚拟DOM树，然后使用Diff算法比较新旧虚拟DOM树，找出需要更新的部分。

3. **打补丁**：Vue将Diff算法的结果应用到真实DOM上，这个过程称为打补丁（patching）。Vue尽可能高效地只更新需要变化的DOM元素。

### 组件实例

Vue 3中的每个组件都是一个实例，它有自己的状态和生命周期。

1. **创建实例**：当一个组件被创建时，Vue会进行一系列初始化工作，包括设置响应式数据、计算属性、观察者等。

2. **挂载实例**：组件实例被挂载到DOM上时，Vue会执行渲染函数并将结果渲染到页面上。

3. **更新实例**：当组件的响应式数据变化时，Vue会重新执行渲染函数并更新DOM。

4. **销毁实例**：当组件不再需要时，Vue会执行清理工作，比如移除事件监听器、观察者和其他与组件相关的资源。

### 更新流程

Vue 3的更新流程遵循以下步骤：

1. **侦测变化**：当响应式数据发生变化时，Proxy会捕捉到这个变化，并通知Vue。

2. **调度更新**：Vue将变化的组件标记为脏的，并将其加入到异步更新队列中。

3. **重新渲染**：在下一个事件循环的微任务中，Vue会遍历更新队列，重新执行脏组件的渲染函数生成新的虚拟DOM。

4. **Diff和打补丁**：Vue使用Diff算法比较新旧虚拟DOM树，并将差异应用到真实DOM上，完成更新。

Vue 3的响应式系统和虚拟DOM结合起来，使得它能够高效地管理和更新用户界面。通过Proxy的依赖追踪和异步更新机制，Vue确保了应用的响应性和性能。

## vue2和vue3的区别

Vue 3 是 Vue.js 的最新主要版本，它在 Vue 2 的基础上引入了许多新特性和改进。以下是 Vue 3 相对于 Vue 2 的一些主要区别：

### 1. 响应式系统

- **Vue 2** 使用 `Object.defineProperty` 来实现响应式系统，这限制了它只能监听对象属性的变化，且无法检测到对象属性的添加或删除，数组索引和长度的变化。
- **Vue 3** 使用 ES6 的 `Proxy` 对象重写了响应式系统，这使得它可以监听到更多类型的变化，包括属性的添加和删除，以及数组的索引和长度变化。

### 2. 性能

- **Vue 3** 优化了虚拟 DOM 的性能，减少了内存占用，并引入了树摇（tree-shaking）支持，这意味着最终打包的体积会更小，因为未使用的功能可以在构建时被排除。
- **Vue 2** 的性能也很好，但在这些方面没有 Vue 3 那么优化。

### 3. 组合式 API

- **Vue 3** 引入了组合式 API（Composition API），包括 `ref`, `reactive`, `computed`, `watch`, `setup` 等，这为逻辑复用和代码组织提供了更灵活的方式。
- **Vue 2** 主要使用选项式 API（Options API），通过定义 `data`, `methods`, `computed`, `watch` 等选项来组织代码。

### 4. TypeScript 支持

- **Vue 3** 从一开始就用 TypeScript 重写，提供了更好的 TypeScript 支持和类型推断。
- **Vue 2** 对 TypeScript 的支持较弱，需要额外的类型声明文件。

### 5. 新特性和改进

- **Vue 3** 引入了许多新特性，如 `Teleport`, `Suspense`, `Fragments` 等。
- **Vue 2** 没有这些新特性，但社区提供了一些插件和解决方案来模拟部分功能。

### 6. 模板和渲染函数

- **Vue 3** 在模板中提供了更多的编译时优化，以及对动态模板的更好支持。
- **Vue 2** 的模板编译也很强大，但没有 Vue 3 那么多编译时优化。

### 7. 自定义渲染器

- **Vue 3** 提供了一个更易于使用的自定义渲染器 API，允许开发者创建自定义的渲染逻辑，这对于跨平台框架（如 NativeScript-Vue 或 Weex）非常有用。
- **Vue 2** 也可以创建自定义渲染器，但过程更加复杂。

### 8. 生命周期钩子

- **Vue 3** 更改了一些生命周期钩子的名称，如 `beforeDestroy` 改为 `beforeUnmount`，`destroyed` 改为 `unmounted`，并引入了新的生命周期钩子。
- **Vue 2** 使用的是原始的生命周期钩子名称。

### 9. 多根节点组件

- **Vue 3** 允许单文件组件（Single File Components, SFCs）有多个根节点，而不再限制为单一根节点。
- **Vue 2** 要求每个组件必须有一个根节点。

### 10. 全局 API 和应用实例

- **Vue 3** 引入了 `createApp` 函数，每个应用实例都是独立的，这意味着全局状态（如全局组件、指令等）不再共享。
- **Vue 2** 的全局 API（如 `Vue.component`）会影响所有 Vue 实例。

这些区别展示了 Vue 3 在设计、性能和开发体验上的进步。虽然 Vue 3 带来了许多改进，但 Vue 2 仍然是一个成熟且广泛使用的框架，许多现有项目可能会继续使用 Vue 2。对于新项目或需要上述新特性的项目，Vue 3 是一个更好的选择。

## vue3和react hooks

Vue 3 和 React（特别是引入了 Hooks 的版本，即 React 16.8+）都是现代前端框架，它们提供了构建用户界面的强大工具。尽管它们在设计哲学和API设计上有所不同，但也有一些相似之处，特别是 Vue 3 的组合式 API（Composition API）与 React 的 Hooks。以下是 Vue 3 和 React Hooks 版本的一些主要区别：

### 设计哲学

- **Vue 3** 强调声明式渲染和组件的可组合性。它提供了一个默认的响应式系统和一个模板语法，这使得创建和维护UI变得直观。
- **React** 采用函数式编程的理念，特别是在引入 Hooks 后，它鼓励使用函数而不是类来创建组件，并通过 Hooks 在函数组件中引入状态和生命周期特性。

### 响应式系统

- **Vue 3** 使用 Proxy 对象作为其响应式系统的基础，自动追踪依赖并在数据变化时触发更新。
- **React** 使用 setState 和 useState 等API来显式地通知框架状态已更改，需要重新渲染组件。

### 组合式 API vs Hooks

- **Vue 3** 的组合式 API 允许开发者在 `setup` 函数中组合和重用逻辑，这与 React 的 Hooks 类似，但 Vue 的响应式系统使得状态管理更为自动化。
- **React Hooks** 允许在函数组件中使用状态和其他React特性，如 `useState`, `useEffect`, `useContext` 等。Hooks 必须遵循特定的规则（如只能在组件的顶层调用）。

### 模板 vs JSX

- **Vue 3** 默认使用基于 HTML 的模板语法，这对于熟悉 HTML 的开发者来说更加直观。Vue 也支持 JSX，但这不是默认选项。
- **React** 使用 JSX，这是一种将 HTML 与 JavaScript 混合的语法。它允许在 JavaScript 代码中编写类似 HTML 的结构。

### 工具链和生态系统

- **Vue 3** 提供了官方的路由器（Vue Router）、状态管理库（Vuex）和 CLI 工具，这些都是与 Vue 紧密集成的。
- **React** 有一个庞大的生态系统，但路由（如 React Router）和状态管理（如 Redux、MobX）通常由社区维护。Create React App 是 React 的官方脚手架工具。

### 类型支持

- **Vue 3** 是用 TypeScript 编写的，因此它提供了更好的类型支持和集成。
- **React** 也支持 TypeScript，但需要额外的类型定义，因为 React 本身不是用 TypeScript 编写的。

### 社区和采用

- **Vue** 在某些地区和国家（如中国）非常流行，社区支持强大，文档和资源丰富。
- **React** 由 Facebook 维护，拥有全球最大的前端社区之一，广泛用于各种规模的项目。

总的来说，Vue 3 和 React Hooks 都提供了现代化的开发体验，允许开发者以更灵活和组织化的方式构建应用程序。选择哪一个框架往往取决于个人偏好、项目需求和团队经验。

## vue3生命周期

Vue 3 的生命周期钩子与 Vue 2 类似，但有一些名称更改和新增的钩子。生命周期钩子是在组件的不同阶段执行的函数，它们允许你在特定时刻添加自定义行为。以下是 Vue 3 中的生命周期钩子：

### 创建阶段

- `beforeCreate`：在 Vue 2 中存在，但在 Vue 3 中已被移除，因为 `setup` 函数在组件实例创建之前执行，可以替代 `beforeCreate` 的用途。
- `created`：在 Vue 2 中存在，但在 Vue 3 中已被移除，因为 `setup` 函数在组件实例创建之后执行，可以替代 `created` 的用途。

### 挂载阶段

- `beforeMount`：在将虚拟 DOM 挂载到真实 DOM 之前调用。
- `mounted`：在虚拟 DOM 挂载到真实 DOM 之后调用。

### 更新阶段

- `beforeUpdate`：在响应式数据变化，且虚拟 DOM 重新渲染和打补丁之前调用。
- `updated`：在虚拟 DOM 重新渲染和打补丁之后调用。

### 卸载阶段

- `beforeUnmount`：在卸载组件实例之前调用（在 Vue 2 中对应 `beforeDestroy`）。
- `unmounted`：在卸载组件实例之后调用（在 Vue 2 中对应 `destroyed`）。

### 其他生命周期钩子

- `activated`：在 `<keep-alive>` 缓存的组件被激活时调用。
- `deactivated`：在 `<keep-alive>` 缓存的组件被停用时调用。
- `errorCaptured`：当捕获一个来自子孙组件的错误时被调用。
- `renderTracked`：在渲染函数被追踪时调用（Vue 3 新增）。
- `renderTriggered`：在渲染函数被触发重新渲染时调用（Vue 3 新增）。

在 Vue 3 中，生命周期钩子可以通过从 `vue` 包导入的函数直接在 `setup` 函数中使用，例如：

```javascript
import { onMounted, onUpdated } from 'vue'

export default {
  setup() {
    onMounted(() => {
      console.log('组件已挂载')
    })

    onUpdated(() => {
      console.log('组件已更新')
    })

    // 返回响应式状态、计算属性、方法等
  },
}
```

这种方式使得在使用组合式 API 时，你可以更灵活地组织和重用逻辑。

## vue3组件通信

Vue 3 提供了多种组件通信的方式，适用于不同的场景。以下是一些常见的组件通信方法及其对应的代码示例：

### 1. Props 和 Events（父子组件通信）

父组件通过 `props` 向子组件传递数据，子组件通过 `$emit` 触发事件来向父组件发送消息。

**父组件**:

```vue
<template>
  <ChildComponent :parentMessage="message" @childEvent="handleChildEvent" />
</template>

<script>
import { ref } from 'vue'
import ChildComponent from './ChildComponent.vue'

export default {
  components: {
    ChildComponent,
  },
  setup() {
    const message = ref('Hello from parent')
    const handleChildEvent = (childMessage) => {
      console.log(childMessage)
    }
    return { message, handleChildEvent }
  },
}
</script>
```

**子组件**:

```vue
<template>
  <button @click="sendMessageToParent">Send Message to Parent</button>
</template>

<script>
import { defineComponent, toRefs } from 'vue'

export default defineComponent({
  props: {
    parentMessage: String,
  },
  setup(props, { emit }) {
    const { parentMessage } = toRefs(props)
    const sendMessageToParent = () => {
      emit('childEvent', 'Hello from child')
    }
    return { parentMessage, sendMessageToParent }
  },
})
</script>
```

### 2. Provide 和 Inject（跨层级组件通信）

`provide` 和 `inject` 使得祖先组件能够向所有子孙组件提供数据，而无需通过每一层组件逐个传递。

**祖先组件**:

```vue
<script>
import { provide, ref } from 'vue'

export default {
  setup() {
    const sharedData = ref('Shared data')
    provide('sharedData', sharedData)
  },
}
</script>
```

**后代组件**:

```vue
<script>
import { inject } from 'vue'

export default {
  setup() {
    const sharedData = inject('sharedData')
    return { sharedData }
  },
}
</script>
```

### 3. Vuex（状态管理）

Vuex 是 Vue 的官方状态管理库，用于管理复杂组件树的状态。

**安装 Vuex**:

```bash
npm install vuex@next --save
```

**创建 store**:

```javascript
import { createStore } from 'vuex'

const store = createStore({
  state() {
    return {
      count: 0,
    }
  },
  mutations: {
    increment(state) {
      state.count++
    },
  },
})

export default store
```

**在组件中使用 store**:

```vue
<template>
  <button @click="incrementCount">Count is: {{ count }}</button>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
  setup() {
    const store = useStore()
    const count = computed(() => store.state.count)
    const incrementCount = () => {
      store.commit('increment')
    }
    return { count, incrementCount }
  },
}
</script>
```

### 4. Event Bus（已废弃）

Vue 2 中常用的 Event Bus 在 Vue 3 中已不推荐使用，因为它可能导致不可预测的状态管理和难以追踪的事件流。相反，建议使用更明确的通信方式，如 `props`、`emit`、`provide`/`inject` 或 Vuex。

### 5. Refs（访问子组件实例或 DOM）

通过 `ref` 可以获取子组件的实例或 DOM 元素，从而直接访问它们的属性或方法。

**父组件**:

```vue
<template>
  <ChildComponent ref="childRef" />
  <button @click="accessChild">Access Child</button>
</template>

<script>
import { ref } from 'vue'
import ChildComponent from './ChildComponent.vue'

export default {
  components: {
    ChildComponent,
  },
  setup() {
    const childRef = ref(null)
    const accessChild = () => {
      if (childRef.value) {
        console.log(childRef.value.someMethod())
      }
    }
    return { childRef, accessChild }
  },
}
</script>
```

**子组件**:

```vue
<script>
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    const someMethod = () => 'Some result'
    return { someMethod }
  },
})
</script>
```

这些是 Vue 3 中常用的组件通信方式。根据应用的不同需求和组件的层级结构，你可以选择最合适的通信方式。

## vue中的状态管理方案

在 Vue 中，状态管理通常指的是如何在组件之间共享和管理数据。随着应用程序的增长，状态管理变得越来越复杂。以下是 Vue 中常用的几种状态管理方案：

### 1. Vue 的内置状态管理

- **reactive** 和 **ref**: Vue 3 引入的响应式 API，用于在组件内部或组合式 API 中声明响应式状态。
- **computed** 和 **watch**: 用于创建计算属性和侦听器，以响应状态变化。
- **provide** 和 **inject**: 用于跨组件层级提供和注入数据，适用于跨越多层的组件通信。

### 2. Vuex

Vuex 是 Vue 的官方状态管理库，它提供了一个中央存储，用于存放应用程序的整个状态树，并按照严格的规则更新这些状态。

- **单一状态树**，使得状态变得可预测和可追踪。
- **使用 mutations 来同步修改状态**。
- **使用 actions 来处理异步操作**。
- **模块化**，允许将状态树分割成模块。

### 3. Pinia

Pinia 是 Vue 3 的一个新的状态管理库，它提供了一个更简单、更轻量级的状态管理解决方案。

- **简单直观的 API**。
- **完全基于组合式 API**。
- **更好的 TypeScript 支持**。
- **易于测试和调试**。

### 4. Vue.observable (Vue 2)

在 Vue 2 中，`Vue.observable` 可以将对象转换为响应式对象，用于简单的跨组件状态共享。

```javascript
const state = Vue.observable({ count: 0 })
const mutations = {
  increment() {
    state.count++
  },
}
```

### 5. Event Bus (不推荐)

Event Bus 是一个全局事件对象，可以用于非父子组件之间的通信。然而，由于难以追踪和维护，它通常不被推荐使用。

### 6. 全局属性和方法

通过 Vue 的全局属性和方法（如 Vue 2 的 `Vue.prototype` 或 Vue 3 的 `app.config.globalProperties`），可以在全局范围内添加状态或方法。

### 7. 其他状态管理库

除了上述方案，还有一些第三方状态管理库可以与 Vue 配合使用，例如：

- **MobX**: 一个响应式状态管理库，可以与 Vue 结合使用。
- **RxJS**: 一个响应式编程库，可以用于管理异步状态和数据流。

选择哪种状态管理方案取决于你的应用程序的需求、团队的熟悉度和个人偏好。对于小型应用程序，Vue 的内置功能可能就足够了。对于需要更复杂状态逻辑和全局状态管理的大型应用程序，Vuex、Pinia 或其他库可能更合适。

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

## 修饰符

Vue 3 支持一系列的修饰符，用于在模板中指定 DOM 事件或者绑定属性时提供额外的指令。以下是一些常用的修饰符：

1. 事件修饰符：

   - `.stop` - 调用 `event.stopPropagation()` 阻止事件冒泡。
   - `.prevent` - 调用 `event.preventDefault()` 阻止默认事件行为。
   - `.capture` - 使用事件捕获模式。
   - `.self` - 只当事件是从事件绑定的元素本身触发时才触发回调。
   - `.once` - 事件只触发一次。
   - `.passive` - 表示不会调用 `event.preventDefault()`。

2. 键盘事件修饰符：

   - `.enter`
   - `.tab`
   - `.delete` (捕获 "删除" 和 "退格" 键)
   - `.esc`
   - `.space`
   - `.up`
   - `.down`
   - `.left`
   - `.right`

3. 鼠标按钮修饰符：

   - `.left`
   - `.right`
   - `.middle`

4. 系统修饰键：

   - `.ctrl`
   - `.alt`
   - `.shift`
   - `.meta` (在 Mac 键盘上是 Command 键，在 Windows 键盘上是 Windows 键)

5. 修饰符键组合：

   - `.exact` - 控制其他修饰键必须与 `.ctrl`、`.alt`、`.shift`、`.meta` 结合精确匹配。

6. `.lazy` - 在 `v-model` 中使用，将数据同步改为在 "change" 事件后进行，而不是每次输入后。

7. `.number` - 在 `v-model` 中使用，自动将用户的输入值转为数值类型。

8. `.trim` - 在 `v-model` 中使用，自动过滤用户输入的首尾空白字符。

下面是一些使用这些修饰符的代码示例：

```html
<template>
  <!-- 阻止事件冒泡 -->
  <button @click.stop="doThis">Stop Propagation</button>

  <!-- 提交事件不再重载页面 -->
  <form @submit.prevent="onSubmit">...</form>

  <!-- 修饰符链 -->
  <input @keyup.enter="onEnter" />

  <!-- 键盘事件 -->
  <input @keyup.page-down="onPageDown" />

  <!-- 只有在点击了元素本身时才会触发处理函数 -->
  <div @click.self="doThat">...</div>

  <!-- 使用 capture 模式 -->
  <div @click.capture="doThis">...</div>

  <!-- 只触发一次事件 -->
  <button @click.once="doThis">Click me once</button>

  <!-- 使用系统修饰键 -->
  <input @keyup.ctrl.enter="onCtrlEnter" />

  <!-- 使用 .exact 修饰符 -->
  <button @click.ctrl.exact="onCtrlClick">A</button>
  <button @click.exact="onClick">B</button>

  <!-- 使用 v-model 修饰符 -->
  <input v-model.lazy="msg" />
  <input v-model.number="age" type="number" />
  <input v-model.trim="msg" />
</template>

<script>
  export default {
    methods: {
      doThis() {
        // ...
      },
      onSubmit() {
        // ...
      },
      onEnter() {
        // ...
      },
      onPageDown() {
        // ...
      },
      doThat() {
        // ...
      },
      onCtrlEnter() {
        // ...
      },
      onCtrlClick() {
        // ...
      },
      onClick() {
        // ...
      },
    },
    data() {
      return {
        msg: '',
        age: 0,
      }
    },
  }
</script>
```

请注意，Vue 3 中的修饰符可以链式调用，也就是说你可以在同一个事件上使用多个修饰符。例如，`@click.stop.prevent` 会同时阻止冒泡和默认行为。修饰符的顺序也是有关系的，它们会按照你使用的顺序依次应用。

### exact修饰符作用

`exact` 修饰符是 Vue.js 中的一个事件修饰符，它用于控制触发事件处理器的确切方式。当你使用系统修饰键（如 `ctrl`、`alt`、`shift`、`meta`）作为事件修饰符时，`exact` 修饰符可以确保只有在指定的系统修饰键被精确按下时，事件处理器才会被触发。

在没有 `exact` 修饰符的情况下，如果你监听带有系统修饰键的事件，如 `@click.ctrl`，那么无论是否有其他修饰键被按下，只要 `ctrl` 键被按下，事件处理器都会被触发。这可能不是你想要的行为，特别是当你想要区分不同修饰键组合的时候。

使用 `exact` 修饰符，你可以要求事件处理器只在没有其他修饰键被按下的情况下，或者是精确匹配你指定的修饰键组合时才触发。

下面是一些使用 `exact` 修饰符的例子：

```html
<template>
  <!-- 只有当仅仅按下 Ctrl 键时才触发 -->
  <button @click.ctrl.exact="onCtrlClick">Ctrl Click</button>

  <!-- 只有当没有任何修饰键被按下时才触发 -->
  <button @click.exact="onClick">Click without Modifiers</button>

  <!-- 只有当 Ctrl 和 Shift 被同时按下时才触发 -->
  <button @click.ctrl.shift.exact="onCtrlShiftClick">Ctrl+Shift Click</button>
</template>

<script>
  export default {
    methods: {
      onCtrlClick() {
        console.log('Ctrl Click')
      },
      onClick() {
        console.log('Click without any modifiers')
      },
      onCtrlShiftClick() {
        console.log('Ctrl+Shift Click')
      },
    },
  }
</script>
```

在这个例子中：

- 第一个按钮只有在按下 `Ctrl` 键而没有按下其他修饰键时才会触发 `onCtrlClick` 方法。
- 第二个按钮只有在没有任何修饰键被按下时才会触发 `onClick` 方法。
- 第三个按钮只有在同时按下 `Ctrl` 和 `Shift` 键时才会触发 `onCtrlShiftClick` 方法。

`exact` 修饰符提供了更精确的控制，使得你可以根据用户的确切按键组合来决定是否触发某个事件处理器。

### @click.ctrl.shift.exact和@keyup.ctrl.shift.exact有什么区别

`@click.ctrl.shift.exact` 和 `@keyup.ctrl.shift.exact` 都是 Vue.js 中的事件监听表达式，它们结合了多个修饰符来指定事件触发的条件。尽管它们使用了相同的修饰符组合（`ctrl`、`shift` 和 `exact`），但它们应用于不同类型的事件，并且有不同的触发时机和用途。

1. `@click.ctrl.shift.exact`：

   - 这个表达式用于监听鼠标点击事件 (`click`)。
   - 它要求用户在点击时必须同时按住 `Ctrl` 和 `Shift` 键，没有其他键被按下。
   - `exact` 修饰符确保只有在精确匹配这个修饰键组合时，事件处理函数才会被触发。
   - 这通常用于鼠标点击操作，当你想要对特定的键盘修饰键组合做出响应时。

2. `@keyup.ctrl.shift.exact`：
   - 这个表达式用于监听键盘按键释放事件 (`keyup`)。
   - 它要求用户在释放键盘上的一个键时必须同时按住 `Ctrl` 和 `Shift` 键，没有其他键被按下。
   - `exact` 修饰符同样确保只有在精确匹配这个修饰键组合时，事件处理函数才会被触发。
   - 这通常用于键盘输入操作，特别是当你想要在用户完成特定的键盘快捷操作后执行某些动作时。

下面是两个修饰符表达式的示例代码：

```html
<template>
  <!-- 只有当用户点击按钮的同时按住 Ctrl 和 Shift 键时才会触发 -->
  <button @click.ctrl.shift.exact="onCtrlShiftClick">Ctrl+Shift Click</button>

  <!-- 只有当用户在输入框中按下并释放键盘上的一个键的同时按住 Ctrl 和 Shift 键时才会触发 -->
  <input @keyup.ctrl.shift.exact="onCtrlShiftKeyup" />
</template>

<script>
  export default {
    methods: {
      onCtrlShiftClick() {
        console.log('Button clicked with Ctrl+Shift keys')
      },
      onCtrlShiftKeyup() {
        console.log('Key released with Ctrl+Shift keys in input')
      },
    },
  }
</script>
```

在这个例子中，`onCtrlShiftClick` 方法只会在用户点击按钮的同时精确按住 `Ctrl` 和 `Shift` 键时被调用，而 `onCtrlShiftKeyup` 方法只会在用户在输入框中释放键盘上的一个键的同时精确按住 `Ctrl` 和 `Shift` 键时被调用。其他任何键盘修饰键的组合都不会触发这些方法。

# Vue 3 底层原理详解

## 1. 模板编译原理

### 1.1 编译过程概述

Vue 3 的模板编译过程分为三个主要阶段:

1. Parse (解析) - 将模板字符串转换为 AST
2. Transform (转换) - 对 AST 进行转换优化
3. Generate (生成) - 生成渲染函数

### 1.2 Parse 阶段

```javascript
// 模板字符串
const template = `
  <div class="container">
    <h1>{{ title }}</h1>
    <button @click="increment">Count: {{ count }}</button>
  </div>
`

// 解析后的 AST 结构
const ast = {
  type: NodeTypes.ELEMENT,
  tag: 'div',
  props: [
    {
      type: NodeTypes.ATTRIBUTE,
      name: 'class',
      value: {
        type: NodeTypes.TEXT,
        content: 'container',
      },
    },
  ],
  children: [
    {
      type: NodeTypes.ELEMENT,
      tag: 'h1',
      props: [],
      children: [
        {
          type: NodeTypes.INTERPOLATION,
          content: {
            type: NodeTypes.SIMPLE_EXPRESSION,
            content: 'title',
          },
        },
      ],
    },
    {
      type: NodeTypes.ELEMENT,
      tag: 'button',
      props: [
        {
          type: NodeTypes.DIRECTIVE,
          name: 'on',
          arg: {
            type: NodeTypes.SIMPLE_EXPRESSION,
            content: 'click',
          },
          exp: {
            type: NodeTypes.SIMPLE_EXPRESSION,
            content: 'increment',
          },
        },
      ],
      children: [
        {
          type: NodeTypes.TEXT,
          content: 'Count: ',
        },
        {
          type: NodeTypes.INTERPOLATION,
          content: {
            type: NodeTypes.SIMPLE_EXPRESSION,
            content: 'count',
          },
        },
      ],
    },
  ],
}
```

### 1.3 Transform 阶段

```javascript
// Transform 插件示例
const transformElement = {
  nodeTransforms: [
    (node, context) => {
      if (node.type === NodeTypes.ELEMENT) {
        // 1. 处理指令
        const directives = node.props.filter(
          (p) => p.type === NodeTypes.DIRECTIVE,
        )

        // 2. 处理事件
        const events = directives.filter((d) => d.name === 'on')
        events.forEach((event) => {
          // 转换为 withDirectives 调用
          context.helper(RESOLVE_DIRECTIVE)
        })

        // 3. 处理动态属性
        const dynamicProps = node.props.filter((p) => p.dynamic)
        if (dynamicProps.length) {
          context.helper(RESOLVE_PROPS)
        }
      }
    },
  ],
}

// Hoisting 优化
function hoistStatic(ast, context) {
  // 提升静态节点
  walk(ast, context, {
    enter(node, parent) {
      if (isStaticNode(node)) {
        context.hoists.push(node)
        // 替换为静态标记
        parent.children[index] = createStaticVNode(node)
      }
    },
  })
}
```

### 1.4 Generate 阶段

```javascript
// 生成渲染函数
function generate(ast) {
  return {
    code: `
      const _Vue = Vue
      
      return function render(_ctx, _cache) {
        with (_ctx) {
          const { createVNode: _createVNode, toDisplayString: _toDisplayString } = _Vue
          
          return _createVNode("div", {
            class: "container"
          }, [
            _createVNode("h1", null, _toDisplayString(title)),
            _createVNode("button", {
              onClick: increment
            }, "Count: " + _toDisplayString(count))
          ])
        }
      }
    `,
  }
}
```

## 2. 响应式系统

### 2.1 Proxy 基础实现

```javascript
// 基础的响应式实现
function reactive(target) {
  return new Proxy(target, {
    get(target, key, receiver) {
      // 依赖收集
      track(target, key)
      const res = Reflect.get(target, key, receiver)
      return isObject(res) ? reactive(res) : res
    },
    set(target, key, value, receiver) {
      const oldValue = target[key]
      const result = Reflect.set(target, key, value, receiver)
      // 触发更新
      if (hasChanged(value, oldValue)) {
        trigger(target, key)
      }
      return result
    },
  })
}

// 依赖收集
let activeEffect
const targetMap = new WeakMap()

function track(target, key) {
  if (!activeEffect) return

  let depsMap = targetMap.get(target)
  if (!depsMap) {
    targetMap.set(target, (depsMap = new Map()))
  }

  let dep = depsMap.get(key)
  if (!dep) {
    depsMap.set(key, (dep = new Set()))
  }

  dep.add(activeEffect)
}

// 触发更新
function trigger(target, key) {
  const depsMap = targetMap.get(target)
  if (!depsMap) return

  const dep = depsMap.get(key)
  if (dep) {
    dep.forEach((effect) => effect())
  }
}
```

### 2.2 Ref 实现

```javascript
// Ref 的实现
class RefImpl {
  private _value;
  public dep;
  public readonly __v_isRef = true;

  constructor(value) {
    this._value = isObject(value) ? reactive(value) : value;
    this.dep = new Set();
  }

  get value() {
    trackRefValue(this);
    return this._value;
  }

  set value(newVal) {
    if (hasChanged(newVal, this._value)) {
      this._value = isObject(newVal) ? reactive(newVal) : newVal;
      triggerRefValue(this);
    }
  }
}

// 创建 ref
function ref(value) {
  return new RefImpl(value);
}
```

### 2.3 计算属性实现

```javascript
// 计算属性的实现
class ComputedRefImpl {
  private _getter;
  private _dirty = true;
  private _value;
  private effect;

  constructor(getter) {
    this._getter = getter;
    this.effect = effect(getter, {
      lazy: true,
      scheduler: () => {
        if (!this._dirty) {
          this._dirty = true;
          trigger(this, 'value');
        }
      }
    });
  }

  get value() {
    if (this._dirty) {
      this._value = this.effect();
      this._dirty = false;
    }
    track(this, 'value');
    return this._value;
  }
}

// 创建计算属性
function computed(getter) {
  return new ComputedRefImpl(getter);
}
```

## 3. 虚拟 DOM 与 Diff 算法

### 3.1 虚拟 DOM 结构

```javascript
// VNode 结构
const vnode = {
  type: 'div',
  props: {
    class: 'container',
    onClick: () => console.log('clicked'),
  },
  children: [
    {
      type: 'h1',
      props: null,
      children: 'Hello Vue 3',
    },
  ],
}

// 组件 VNode
const componentVNode = {
  type: {
    setup() {
      const count = ref(0)
      return { count }
    },
    render() {
      return h('div', null, this.count)
    },
  },
  props: { msg: 'Hello' },
  children: null,
}
```

### 3.2 Diff 算法实现

```javascript
// 快速 Diff 算法
function patchKeyedChildren(c1, c2, container) {
  let i = 0
  const l2 = c2.length
  let e1 = c1.length - 1
  let e2 = l2 - 1

  // 1. 从头部开始比对
  while (i <= e1 && i <= e2) {
    const n1 = c1[i]
    const n2 = c2[i]
    if (isSameVNodeType(n1, n2)) {
      patch(n1, n2, container)
    } else {
      break
    }
    i++
  }

  // 2. 从尾部开始比对
  while (i <= e1 && i <= e2) {
    const n1 = c1[e1]
    const n2 = c2[e2]
    if (isSameVNodeType(n1, n2)) {
      patch(n1, n2, container)
    } else {
      break
    }
    e1--
    e2--
  }

  // 3. 处理新增节点
  if (i > e1) {
    if (i <= e2) {
      const nextPos = e2 + 1
      const anchor = nextPos < l2 ? c2[nextPos].el : null
      while (i <= e2) {
        patch(null, c2[i], container, anchor)
        i++
      }
    }
  }

  // 4. 处理需要移动的节点
  else if (i > e2) {
    while (i <= e1) {
      unmount(c1[i])
      i++
    }
  }

  // 5. 处理未知子序列
  else {
    const s1 = i
    const s2 = i

    // 5.1 构建 key 的索引图
    const keyToNewIndexMap = new Map()
    for (i = s2; i <= e2; i++) {
      const nextChild = c2[i]
      if (nextChild.key != null) {
        keyToNewIndexMap.set(nextChild.key, i)
      }
    }

    // 5.2 更新和移动节点
    let j
    let patched = 0
    const toBePatched = e2 - s2 + 1
    let moved = false
    let maxNewIndexSoFar = 0

    const newIndexToOldIndexMap = new Array(toBePatched)
    for (i = 0; i < toBePatched; i++) newIndexToOldIndexMap[i] = 0

    for (i = s1; i <= e1; i++) {
      const prevChild = c1[i]
      if (patched >= toBePatched) {
        unmount(prevChild)
        continue
      }

      let newIndex
      if (prevChild.key != null) {
        newIndex = keyToNewIndexMap.get(prevChild.key)
      } else {
        for (j = s2; j <= e2; j++) {
          if (isSameVNodeType(prevChild, c2[j])) {
            newIndex = j
            break
          }
        }
      }

      if (newIndex === undefined) {
        unmount(prevChild)
      } else {
        newIndexToOldIndexMap[newIndex - s2] = i + 1
        if (newIndex >= maxNewIndexSoFar) {
          maxNewIndexSoFar = newIndex
        } else {
          moved = true
        }
        patch(prevChild, c2[newIndex], container)
        patched++
      }
    }

    // 5.3 移动和挂载
    const increasingNewIndexSequence = moved
      ? getSequence(newIndexToOldIndexMap)
      : []
    j = increasingNewIndexSequence.length - 1

    for (i = toBePatched - 1; i >= 0; i--) {
      const nextIndex = s2 + i
      const nextChild = c2[nextIndex]
      const anchor = nextIndex + 1 < l2 ? c2[nextIndex + 1].el : null

      if (newIndexToOldIndexMap[i] === 0) {
        patch(null, nextChild, container, anchor)
      } else if (moved) {
        if (j < 0 || i !== increasingNewIndexSequence[j]) {
          move(nextChild, container, anchor)
        } else {
          j--
        }
      }
    }
  }
}
```

## 4. 组件系统

### 4.1 组件实例结构

```javascript
// 组件实例
const instance = {
  // 组件状态
  data: reactive({}),
  props: shallowReactive({}),
  attrs: shallowReactive({}),
  slots: shallowReactive({}),
  emit: () => {},

  // 渲染相关
  subTree: null,
  isMounted: false,
  update: null,
  next: null,

  // 生命周期
  bm: null, // beforeMount
  m: null, // mounted
  bu: null, // beforeUpdate
  u: null, // updated

  // 依赖注入
  provides: Object.create(null),
  parent: null,

  // 组件定义
  type: {
    setup() {},
    render() {},
    components: {},
    directives: {},
  },
}
```

### 4.2 组件渲染流程

```javascript
// 组件的挂载和更新
function setupComponent(instance) {
  // 1. 处理 props
  initProps(instance)

  // 2. 处理插槽
  initSlots(instance)

  // 3. 设置有状态的组件
  setupStatefulComponent(instance)
}

function setupStatefulComponent(instance) {
  // 1. 创建渲染上下文
  instance.proxy = new Proxy(instance.ctx, PublicInstanceProxyHandlers)

  // 2. 执行 setup
  const { setup } = instance.type
  if (setup) {
    const setupContext = createSetupContext(instance)
    const setupResult = setup(instance.props, setupContext)
    handleSetupResult(instance, setupResult)
  }

  // 3. 完成组件设置
  finishComponentSetup(instance)
}

// 组件更新
function updateComponent(n1, n2) {
  const instance = (n2.component = n1.component)

  // 检查是否需要更新
  if (shouldUpdateComponent(n1, n2)) {
    instance.next = n2
    instance.update()
  } else {
    n2.component = n1.component
    n2.el = n1.el
    instance.vnode = n2
  }
}
```

### 4.3 异步组件实现

```javascript
// 异步组件的实现
function defineAsyncComponent(source) {
  return {
    name: 'AsyncComponentWrapper',
    setup() {
      const loaded = ref(false)
      const error = ref(null)
      const loading = ref(false)
      const component = ref(null)

      // 加载组件
      let loadingTimer = null

      function load() {
        loading.value = true

        return Promise.resolve(source)
          .then((comp) => {
            component.value = comp
            loaded.value = true
          })
          .catch((err) => {
            error.value = err
          })
          .finally(() => {
            loading.value = false
            clearTimeout(loadingTimer)
          })
      }

      // 开始加载
      load()

      return () => {
        if (loaded.value) {
          return h(component.value)
        } else if (error.value && ErrorComponent) {
          return h(ErrorComponent)
        } else if (loading.value && LoadingComponent) {
          return h(LoadingComponent)
        }
        return h(Suspense)
      }
    },
  }
}
```

## 5. 编译优化

### 5.1 静态提升

```javascript
// 编译优化示例
const hoistedElements = []

function hoistStatic(ast) {
  // 1. 标记静态节点
  walk(ast, {
    enter(node) {
      if (isStaticNode(node)) {
        node.static = true
        hoistedElements.push(node)
      }
    },
  })

  // 2. 生成静态渲染函数
  if (hoistedElements.length) {
    return `const _hoisted = [
      ${hoistedElements.map((node) => genNode(node)).join(',\n')}
    ]`
  }
}
```

### 5.2 Block Tree

```javascript
// Block Tree 优化
function createBlock(type, props, children, patchFlag) {
  const vnode = createVNode(type, props, children, patchFlag)
  vnode.dynamicChildren = []
  openBlock()
  // 处理子节点
  closeBlock()
  return vnode
}

// 收集动态节点
function openBlock() {
  blockStack.push([])
}

function closeBlock() {
  const dynamicChildren = blockStack.pop()
  const parentBlock = blockStack[blockStack.length - 1]
  if (parentBlock) {
    parentBlock.push(...dynamicChildren)
  }
  return dynamicChildren
}
```

### 5.3 PatchFlags 优化

```javascript
// PatchFlags 标记
const PatchFlags = {
  TEXT: 1, // 动态文本节点
  CLASS: 2, // 动态 class
  STYLE: 4, // 动态 style
  PROPS: 8, // 动态属性
  FULL_PROPS: 16, // 有动态 key 的属性
  HYDRATE_EVENTS: 32, // 有监听事件的节点
  STABLE_FRAGMENT: 64, // 稳定序列
  KEYED_FRAGMENT: 128, // 有 key 的片段
  UNKEYED_FRAGMENT: 256, // 无 key 的片段
  NEED_PATCH: 512, // 一个节点只会进行非属性比较
  DYNAMIC_SLOTS: 1024, // 动态插槽
}

// 使用 PatchFlags
const vnode = createVNode(
  'div',
  {
    class: 'foo',
    style: { color: 'red' },
  },
  null,
  PatchFlags.CLASS | PatchFlags.STYLE,
)
```

## 6. 常见误解

### 6.1 误解：响应式系统总是同步更新

```javascript
// 实际情况：Vue 3 的响应式系统是异步批量更新的
const Counter = {
  setup() {
    const count = ref(0)

    function increment() {
      // 这些更新会被批量处理
      count.value++
      count.value++
      count.value++
      // 实际上只会触发一次重渲染
    }

    return { count, increment }
  },
}

// 手动控制更新时机
function forceUpdate() {
  // 立即更新
  flushSync(() => {
    count.value++
  })
  // 这里可以立即访问到更新后的 DOM
}
```

### 6.2 最佳实践

1. **合理使用响应式 API**：

```javascript
// 1. ref 用于基础类型
const count = ref(0)

// 2. reactive 用于对象
const state = reactive({
  user: { name: 'John', age: 25 },
  settings: { theme: 'dark' },
})

// 3. computed 用于派生状态
const doubleCount = computed(() => count.value * 2)

// 4. readonly 用于只读数据
const readOnlyState = readonly(state)
```

2. **性能优化技巧**：

```javascript
// 1. v-once 用于静态内容
<template>
  <div v-once>这个内容永远不会改变</div>
</template>

// 2. v-memo 用于有条件的跳过更新
<template>
  <div v-memo="[item.id]">
    <ExpensiveComponent :item="item" />
  </div>
</template>

// 3. 使用 shallowRef 或 shallowReactive 处理大数据
const state = shallowRef({ huge: 'data' });
```

3. **组件设计原则**：

```javascript
// 1. 组件通信推荐使用 props 和 emit
const Child = {
  props: ['value'],
  emits: ['update'],
  setup(props, { emit }) {
    const handleClick = () => {
      emit('update', props.value + 1)
    }
    return { handleClick }
  },
}

// 2. 使用组合式函数复用逻辑
function useCounter(initialValue = 0) {
  const count = ref(initialValue)
  const increment = () => count.value++
  const decrement = () => count.value--

  return {
    count,
    increment,
    decrement,
  }
}
```

理解这些概念对于正确使用 Vue 3 非常重要，因为：

1. 它帮助我们理解 Vue 3 的工作原理
2. 指导我们采用正确的优化策略
3. 帮助我们写出更高质量的 Vue 应用
