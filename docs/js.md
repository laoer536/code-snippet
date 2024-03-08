---
title: 'js'
---

# JS

## ES6+

ECMAScript 6（ES6），也称为ECMAScript 2015，是JavaScript语言的一个重要版本，它引入了许多新特性和语法改进。此后的每年都有新的ECMAScript版本发布，带来更多的特性。以下是ES6及其后续版本（ES6+）的一些关键新特性及其作用：

### ES6 (ECMAScript 2015)

1. **let和const**:

   - 引入了块级作用域变量声明（`let`）和常量声明（`const`）。

2. **箭头函数（Arrow Functions）**:

   - 提供了一种更简洁的函数写法，并且不绑定自己的`this`值。

3. **模板字符串（Template Literals）**:

   - 允许嵌入表达式的字符串字面量，使用反引号（`` ` ``）定义。

4. **默认参数（Default Parameters）**:

   - 函数参数可以有默认值。

5. **解构赋值（Destructuring Assignment）**:

   - 一种新的赋值方式，允许从数组或对象中提取数据并赋值给新的变量。

6. **扩展运算符（Spread Operator）和剩余参数（Rest Parameters）**:

   - 扩展运算符（`...`）允许一个表达式在某些位置展开为多个元素，而剩余参数允许将不定数量的参数表示为一个数组。

7. **类（Classes）**:

   - 引入了基于类的面向对象编程语法。

8. **模块（Modules）**:

   - 引入了`import`和`export`语句，用于在不同的文件之间导入和导出代码。

9. **Promises**:

   - 提供了一种用于处理异步操作的新方法。

10. **迭代器（Iterators）和生成器（Generators）**:

    - 引入了一种新的遍历集合的方法，以及一种生成迭代器的函数。

11. **新的集合类型（Maps, Sets）**:

    - 引入了`Map`和`Set`数据结构，以及它们的弱引用版本`WeakMap`和`WeakSet`。

12. **新的数组方法**:

    - 如`Array.from`、`Array.of`、`array.find`、`array.findIndex`等。

13. **Symbol类型**:

    - 引入了新的原始数据类型`Symbol`，用于创建唯一的标识符。

14. **Proxy和Reflect**:

    - 提供了创建代理对象的新方法，用于拦截和定义对象的行为。

15. **新的数学、数值和对象方法**:
    - 如`Math.trunc`、`Number.isInteger`、`Object.assign`等。

### ES2016 (ECMAScript 7)

1. **Array.prototype.includes**:

   - 一个新的数组方法，用于检查数组中是否包含某个元素。

2. **指数运算符（Exponentiation Operator）**:
   - 引入了新的指数运算符（`**`），例如`2 ** 3`等于`8`。

### ES2017 (ECMAScript 8)

1. **async/await**:

   - 提供了一种编写异步代码的新方法，使得异步代码看起来像同步代码。

2. **Object.values和Object.entries**:

   - 用于返回对象自身的所有值或键值对数组。

3. **字符串填充方法（String Padding）**:

   - `String.prototype.padStart`和`String.prototype.padEnd`用于填充字符串。

4. **Object.getOwnPropertyDescriptors**:

   - 用于获取对象的所有自身属性描述符。

5. **共享内存和原子操作（SharedArrayBuffer和Atomics）**:
   - 用于构建多线程应用程序。

### ES2018 (ECMAScript 9)

1. **异步迭代（Asynchronous Iteration）**:

   - 引入了`for-await-of`循环，用于遍历异步生成的数据。

2. **Rest/Spread Properties**:

   - 对象字面量中也支持剩余参数和扩展运算符。

3. **Promise.prototype.finally**:

   - 为Promise添加了`finally`方法，无论成功还是失败都会执行。

4. **正则表达式改进**:
   - 引入了命名捕获组、后行断言、dotAll模式等正则表达式的新特性。

### ES2019 (ECMAScript 10)

1. **Array.prototype.flat和Array.prototype.flatMap**:

   - 用于扁平化数组和映射后扁平化数组。

2. **Object.fromEntries**:

   - 将键值对列表转换为对象。

3. **字符串的trimStart和trimEnd方法**:

   - 类似于`trim`，但只去除字符串开头或结尾的空白。

4. **可选的catch绑定**:

   - 允许在`catch`语句中省略异常变量。

5. **Function.prototype.toString的修订**:
   - `toString`方法现在返回精确到语法的函数源代码。

### ES2020 (ECMAScript 11)

1. **BigInt**:

   - 一种新的数字类型，用于表示任意精度的整数。

2. **动态导入（Dynamic Import）**:

   - 使用`import()`语法动态导入模块。

3. **nullish coalescing运算符（`??`）**:

   - 一种逻辑运算符，当左侧的操作数为`null`或`undefined`时，返回右侧的操作数。

4. **可选链（Optional Chaining）**:

   - 使用`?.`运算符来读取深层次对象属性，而不用担心中间某个属性不存在导致的错误。

5. **Promise.allSettled**:

   - 一个新的Promise方法，等待所有的Promise都被解决或拒绝。

6. **globalThis**:

   - 提供了一个标准的方式来获取全局`this`值（全局对象）。

7. **for-in机制的改进**:

   - 改进了`for-in`循环的枚举顺序。

8. **import.meta**:

   - 提供了一个新的`import.meta`对象，用于获取模块相关的元数据。

9. **String.prototype.matchAll**:
   - 用于返回所有匹配正则表达式的结果。

### ES2021 (ECMAScript 12)

1. **String.prototype.replaceAll**:

   - 用于替换字符串中所有匹配的子串。

2. **Promise.any**:

   - 接受一个Promise对象的数组，只要其中一个Promise成功，就返回那个已经成功的Promise。

3. **逻辑赋值运算符（Logical Assignment Operators）**:

   - 引入了`&&=`, `||=`, 和`??=`运算符。

4. **数值分隔符（Numeric Separators）**:

   - 允许在数值字面量中使用下划线（`_`）作为分隔符，以提高可读性。

5. **WeakRefs和FinalizationRegistry**:
   - 引入了弱引用（`WeakRef`）和垃圾回收终结器注册表（`FinalizationRegistry`），用于管理和跟踪对象的生命周期。

这些新特性极大地增强了JavaScript的能力，使得编写复杂的应用程序变得更加简单和高效。开发者可以利用这些新工具来提高代码的可读性、可维护性和性能。随着JavaScript语言的不断发展，未来还会有更多的新特性被加入到ECMAScript标准中。

## JS异步编程

JavaScript中的异步编程是指在不阻塞主线程的情况下执行耗时任务的编程方式。由于JavaScript在浏览器中运行时是单线程的，执行耗时的操作（如网络请求、文件读写等）如果采用同步方式，会导致界面卡顿，影响用户体验。因此，异步编程在JavaScript中非常重要。

以下是JavaScript中实现异步编程的几种主要方式：

### 1. 回调函数（Callbacks）

回调函数是最基本的异步编程模式。一个函数接受另一个函数作为参数（这个参数函数称为回调函数），在异步操作完成后执行这个回调函数。

```javascript
function fetchData(callback) {
  setTimeout(() => {
    callback('数据')
  }, 1000)
}

fetchData((data) => {
  console.log(data) // 输出：数据
})
```

回调函数的问题是它们可能导致“回调地狱”（Callback Hell），即多层嵌套的回调函数，使得代码难以阅读和维护。

### 2. Promise

Promise是ES6引入的一种改进的异步编程解决方案。Promise表示一个异步操作的最终完成（或失败）及其结果值。

```javascript
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('数据')
    }, 1000)
  })
}

fetchData()
  .then((data) => {
    console.log(data) // 输出：数据
  })
  .catch((error) => {
    console.error(error)
  })
```

Promise可以链式调用，解决了回调地狱的问题，并且提供了更好的错误处理机制。

### 3. async/await

`async/await`是ES2017引入的，它是基于Promise的更高级的异步编程语法糖。`async`关键字用于声明一个异步函数，而`await`关键字用于等待一个Promise解决。

```javascript
async function fetchData() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('数据'), 1000)
  })

  let data = await promise // 等待Promise解决
  console.log(data) // 输出：数据
}

fetchData()
```

`async/await`使得异步代码看起来和同步代码类似，更易于理解和维护。

### 4. 生成器（Generators）

生成器函数可以通过`yield`关键字暂停执行，并在将来的某个时刻通过`next`方法继续执行。结合Promise，生成器可以用于管理异步流程。

```javascript
function* fetchData() {
  let data = yield new Promise((resolve) => {
    setTimeout(() => resolve('数据'), 1000)
  })
  console.log(data) // 输出：数据
}

let generator = fetchData()
let promise = generator.next().value // 获取Promise对象
promise.then((data) => {
  generator.next(data) // 继续执行生成器函数
})
```

生成器的使用相对复杂，但在`async/await`出现之前，它们是管理复杂异步流程的一种方式。

### 5. 事件驱动（Event-driven）

在Node.js中，事件驱动是一种常见的异步编程模式。通过监听和触发事件来处理异步操作。

```javascript
const EventEmitter = require('events')
const eventEmitter = new EventEmitter()

eventEmitter.on('data', (data) => {
  console.log(data) // 输出：数据
})

setTimeout(() => {
  eventEmitter.emit('data', '数据')
}, 1000)
```

事件驱动模式在Node.js的内置模块中广泛使用，如在处理HTTP请求或文件系统操作时。

### 6. Promise库（如Bluebird）

在Promise成为JavaScript标准之前，有许多第三方库提供了Promise的实现，如Bluebird。这些库通常提供了比原生Promise更多的功能和更好的性能。

```javascript
const Bluebird = require('bluebird')

function fetchData() {
  return new Bluebird((resolve) => {
    setTimeout(() => resolve('数据'), 1000)
  })
}

fetchData().then((data) => {
  console.log(data) // 输出：数据
})
```

即使在原生Promise被广泛支持后，这些库仍然因其额外的功能和优化而被使用。

异步编程是JavaScript中一个非常重要的概念，随着JavaScript的发展，异步编程的方法也在不断进化。开发者应根据具体的应用场景和个人偏好选择合适的异步编程方法。

## Promise

JavaScript中的`Promise`是一个代表了异步操作最终完成或失败的对象。它允许你为异步操作的成功结果或失败原因关联相应的处理方法。这意味着你可以将异步操作的连续步骤组织起来，而不必深陷回调地狱（即多层嵌套的回调函数）。

### 创建Promise

一个`Promise`对象是由`Promise`构造函数创建的，它接受一个执行器函数（executor function）作为参数。执行器函数又接受两个参数：`resolve`和`reject`，这两个参数也是函数。

```javascript
const promise = new Promise((resolve, reject) => {
  // 异步操作代码
  if (/* 异步操作成功 */) {
    resolve(value); // 将Promise状态设置为fulfilled，并将成功的结果传递出去
  } else {
    reject(error); // 将Promise状态设置为rejected，并将错误信息传递出去
  }
});
```

### Promise状态

一个`Promise`对象有三种状态：

1. **pending**（进行中）: 初始状态，既不是成功，也不是失败。
2. **fulfilled**（已成功）: 意味着操作成功完成。
3. **rejected**（已失败）: 意味着操作失败。

一旦`Promise`的状态改变（从pending变为fulfilled或rejected），它就会保持这个状态，不会再次改变。

### Promise处理方法

`Promise`提供了几个方法来处理异步操作的结果：

1. **then()**:
   - `promise.then(onFulfilled, onRejected)`方法接受两个回调函数作为参数。第一个回调函数是当`Promise`状态变为fulfilled时调用的，第二个（可选的）回调函数是当`Promise`状态变为rejected时调用的。

```javascript
promise.then(
  (value) => {
    /* 处理成功的结果 */
  },
  (error) => {
    /* 处理失败的原因 */
  },
)
```

2. **catch()**:
   - `promise.catch(onRejected)`方法是`.then(null, onRejected)`的语法糖，用于指定发生错误时的回调函数。

```javascript
promise.catch((error) => {
  /* 处理失败的原因 */
})
```

3. **finally()**:
   - `promise.finally(onFinally)`方法用于指定不管`Promise`对象最后状态如何，都会执行的操作。它是ES2018引入的。

```javascript
promise.finally(() => {
  /* 无论成功还是失败都会执行的代码 */
})
```

### 链式调用

`then`方法总是返回一个新的`Promise`，这允许你进行链式调用。在链式调用中，每个`then`的返回值都会传递给下一个`then`的回调函数。

```javascript
doSomething()
  .then((result) => doSomethingElse(result))
  .then((newResult) => doThirdThing(newResult))
  .then((finalResult) => {
    console.log(`最终结果: ${finalResult}`)
  })
  .catch(failureCallback)
```

### 错误处理

在链式调用中，如果任何一个`then`中抛出错误或者返回一个rejected状态的`Promise`，控制流将直接跳转到最近的`catch`方法。

```javascript
doSomething()
  .then((result) => doSomethingElse(result))
  .then((newResult) => doThirdThing(newResult))
  .then((finalResult) => {
    console.log(`最终结果: ${finalResult}`)
  })
  .catch((error) => {
    console.error(`链中捕获到错误: ${error}`)
  })
```

### Promise静态方法

`Promise`还提供了几个静态方法来处理多个`Promise`：

1. **Promise.all(iterable)**:

   - 当所有`Promise`都成功时，返回一个新的`Promise`，它的结果是一个包含所有`Promise`结果的数组。如果任何一个`Promise`失败，返回的`Promise`就会立即失败，并返回那个`Promise`的错误。

2. **Promise.allSettled(iterable)**:

   - 等待所有给定的`Promise`都已经fulfilled或rejected，并返回一个新的`Promise`，它的结果是一个对象数组，每个对象表示对应的`Promise`的结果。

3. **Promise.race(iterable)**:

   - 返回一个`Promise`，它将与第一个传递的`Promise`相同的完成（fulfill或reject）。

4. **Promise.resolve(value)**:

   - 返回一个状态为fulfilled的`Promise`。

5. **Promise.reject(reason)**:
   - 返回一个状态为rejected的`Promise`。

- 返回一个状态为rejected的`Promise`。

> Promise.any和Promise.race区别

`Promise.any` 和 `Promise.race` 都是用于处理多个 promises 的方法，但它们在行为上有一些关键的区别。

### Promise.any

- `Promise.any` 接受一个 Promise 可迭代对象（如数组），并且只要其中的一个 promise 成功（fulfilled），就返回一个解决（resolve）的 promise，该 promise 的结果是第一个成功的 promise 的结果。
- 如果所有的 promises 都失败（rejected），`Promise.any` 会返回一个拒绝（reject）的 promise，其中包含一个 `AggregateError` 类型的错误，这个错误包含了所有失败 promises 的错误信息。
- `Promise.any` 专注于成功的情况，忽略所有的拒绝，除非所有的 promises 都拒绝。

### Promise.race

- `Promise.race` 同样接受一个 Promise 可迭代对象，但它返回的 promise 将采用第一个解决（resolve）或拒绝（reject）的 promise 的结果，无论是成功还是失败。
- `Promise.race` 对于成功和失败都是敏感的，它只关心哪个 promise 最先完成，而不管完成的是成功还是失败。

### 区别总结

- `Promise.any` 只在乎至少有一个 promise 成功，忽略所有失败的情况，除非全部失败。
- `Promise.race` 在乎第一个完成的 promise，不管它是成功还是失败。

### 示例

为了更好地理解这两者之间的区别，让我们看一个简单的例子：

```javascript
const promise1 = new Promise((resolve, reject) =>
  setTimeout(reject, 100, '失败1'),
)
const promise2 = new Promise((resolve, reject) =>
  setTimeout(resolve, 200, '成功2'),
)
const promise3 = new Promise((resolve, reject) =>
  setTimeout(reject, 300, '失败3'),
)

Promise.any([promise1, promise2, promise3])
  .then((value) => {
    console.log('Promise.any:', value) // "Promise.any: 成功2"
  })
  .catch((error) => {
    console.error('Promise.any 错误:', error)
  })

Promise.race([promise1, promise2, promise3])
  .then((value) => {
    console.log('Promise.race:', value)
  })
  .catch((error) => {
    console.error('Promise.race 错误:', error) // "Promise.race 错误: 失败1"
  })

// Promise.race实现超时报错
const fetchData = fetch('data.json').then((response) => response.json())
const timeout = new Promise((_, reject) => setTimeout(reject, 3000, '请求超时'))

Promise.race([fetchData, timeout])
  .then((data) => {
    console.log('数据:', data)
  })
  .catch((error) => {
    console.error(error) // "请求超时" 或者 fetch 的错误
  })
```

在这个例子中，`Promise.any` 会忽略 `promise1` 的失败，因为 `promise2` 成功了，所以它会解决并打印 "Promise.any: 成功2"。而 `Promise.race` 会立即以 `promise1` 的失败结果结束，因为它是第一个完成的 promise，所以它会拒绝并打印 "Promise.race 错误: 失败1"。

`Promise`是异步编程的强大工具，它简化了异步操作的管理，并提供了更好的错误处理机制。随着`async/await`的引入，`Promise`的使用变得更加直观和简洁。

## async/await

`async/await`是在ES2017（ECMAScript 8）中引入的，它提供了一种更简洁、更直观的方式来处理基于`Promise`的异步操作。`async/await`允许你以同步的方式编写异步代码，这样可以使得异步流程更容易理解和维护。

### async函数

`async`关键字用于声明一个异步函数，它会自动将函数的返回值封装成一个`Promise`。如果函数返回的是非`Promise`值，这个值会被`Promise.resolve()`包装成一个`Promise`。如果函数抛出异常，这个异常会被`Promise.reject()`包装成一个被拒绝（rejected）的`Promise`。

```javascript
async function fetchData() {
  return '数据'
}

// 等同于
function fetchData() {
  return Promise.resolve('数据')
}
```

### await表达式

`await`关键字用于等待一个`Promise`解决（fulfilled）。它只能在`async`函数内部使用。当`await`表达式遇到一个`Promise`时，它会暂停函数的执行，直到`Promise`解决。如果`Promise`被拒绝（rejected），`await`表达式会抛出拒绝的原因，可以用`try...catch`来捕获这个异常。

```javascript
async function fetchData() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('数据'), 1000)
  })

  let data = await promise // 等待Promise解决
  console.log(data) // 输出：数据
}

fetchData()
```

### 错误处理

在`async/await`中，可以使用传统的`try...catch`语句来捕获异步操作中的错误。

```javascript
async function fetchData() {
  try {
    let promise = new Promise((resolve, reject) => {
      setTimeout(() => reject(new Error('出错了！')), 1000)
    })

    let data = await promise // 如果Promise被拒绝，这里会抛出异常
    console.log(data)
  } catch (error) {
    console.error(error) // 输出：Error: 出错了！
  }
}

fetchData()
```

### 并发执行

虽然`await`会按顺序等待每个`Promise`解决，但有时你可能希望并发执行多个异步操作。在这种情况下，可以使用`Promise.all()`来同时等待多个`Promise`。

```javascript
async function fetchAllData() {
  let promise1 = fetchData('url1')
  let promise2 = fetchData('url2')

  let [data1, data2] = await Promise.all([promise1, promise2])
  console.log(data1, data2)
}

fetchAllData()
```

### 注意事项

- `await`只能在`async`函数内部使用。如果你尝试在普通函数中使用`await`，会导致语法错误。
- `async/await`并没有使得代码实际上变成同步执行，它只是提供了一种同步的写法来处理异步操作。
- `async/await`使得异步代码更容易理解和维护，但也不应该滥用。例如，不必要地将多个可以并发执行的异步操作串行化，可能会导致性能下降。

`async/await`是现代JavaScript中处理异步操作的首选方式，它与`Promise`一起，为开发者提供了强大的异步编程能力。

## Promise and async

`async`和`Promise`都是JavaScript中处理异步操作的特性，但它们在语法和使用上有所不同。以下是`async`函数和`Promise`之间的主要区别：

### Promise

1. **基础构建块**:

   - `Promise`是JavaScript中异步编程的基础构建块。它是一个对象，代表了一个异步操作的最终完成（或失败）及其结果值。

2. **状态**:

   - `Promise`有三种状态：pending（等待中）、fulfilled（已成功）和rejected（已失败）。状态一旦改变，就不会再变。

3. **构造函数**:

   - `Promise`通过其构造函数`new Promise(executor)`创建，其中`executor`是一个带有`resolve`和`reject`两个参数的函数。

4. **链式调用**:

   - `Promise`可以通过`.then()`、`.catch()`和`.finally()`方法进行链式调用，以处理异步操作的成功、失败和完成。

5. **错误处理**:

   - 在`Promise`链中，可以通过`.catch()`方法捕获错误。

6. **并发控制**:
   - `Promise`提供了`Promise.all()`、`Promise.race()`、`Promise.allSettled()`和`Promise.any()`等静态方法来处理多个`Promise`的并发控制。

### async函数

1. **语法糖**:

   - `async`函数是基于`Promise`的语法糖，它使得异步代码的编写和理解更接近同步代码。

2. **自动Promise封装**:

   - `async`函数自动将返回值封装成一个`Promise`。如果函数返回非`Promise`值，该值会被`Promise.resolve()`包装成一个`Promise`。如果函数抛出异常，异常会被`Promise.reject()`包装成一个被拒绝的`Promise`。

3. **await关键字**:

   - `async`函数允许使用`await`关键字来暂停函数执行，等待`Promise`解决。这使得异步代码的编写更加直观。

4. **错误处理**:

   - 在`async`函数中，可以使用传统的`try...catch`语句来捕获错误，这使得错误处理更加直观。

5. **函数声明**:

   - `async`函数可以是函数声明、函数表达式、箭头函数或方法。

6. **无需链式调用**:
   - `async`函数中不需要使用`.then()`或`.catch()`方法，因为`await`关键字允许你直接获取`Promise`的结果或捕获错误。

### 总结

- `Promise`是异步编程的基础，提供了一种表示异步操作的机制。
- `async/await`是建立在`Promise`之上的抽象，提供了一种更简洁和易于理解的方式来处理异步操作。

在实际开发中，`async/await`通常被认为是更现代和优雅的异步编程解决方案，因为它简化了代码结构，使得异步逻辑更加清晰。然而，了解`Promise`的工作原理仍然很重要，因为`async/await`底层依赖于`Promise`，并且在某些情况下（如并发控制），直接使用`Promise`的静态方法可能更合适。

## xhr、fetch、axios

在JavaScript中，`XMLHttpRequest` (XHR)、`fetch`和`axios`都是用来执行HTTP请求的技术，但它们在API设计、使用方式和功能上有所不同。

### XMLHttpRequest (XHR)

1. **历史悠久**:

   - `XMLHttpRequest`是最早的用于浏览器中进行HTTP请求的API之一。它由Microsoft首先引入，并被其他浏览器厂商采用。

2. **复杂的API**:

   - XHR提供了一个复杂的API，需要管理请求的整个生命周期，包括监听不同的事件、处理状态变化等。

3. **手动处理**:

   - 使用XHR时，需要手动构建和发送请求，处理响应，以及错误处理。

4. **不返回Promise**:

   - XHR不使用`Promise`，因此不支持`Promise`的特性，如链式调用、`async/await`等。

5. **支持旧版浏览器**:
   - XHR广泛支持所有浏览器，包括一些较旧的版本。

示例代码：

```javascript
var xhr = new XMLHttpRequest()
xhr.open('GET', 'https://api.example.com/data', true)
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4) {
    if (xhr.status === 200) {
      console.log(xhr.responseText)
    } else {
      console.error('Error:', xhr.statusText)
    }
  }
}
xhr.send()
```

### fetch

1. **现代的API**:

   - `fetch`是一个现代的API，用于替代`XMLHttpRequest`。它是基于`Promise`设计的，使得异步请求代码更简洁。

2. **返回Promise**:

   - `fetch`函数返回一个`Promise`，这个`Promise`解决时会返回一个`Response`对象。

3. **简洁的语法**:

   - `fetch`提供了一个更简洁的API，可以使用链式调用处理请求和响应。

4. **不支持取消请求**:

   - 初始版本的`fetch`不支持取消正在进行的请求，但这在后续的规范更新中得到了改进（通过`AbortController`）。

5. **不支持旧版浏览器**:
   - `fetch`不支持IE浏览器，但在所有现代浏览器中都得到了支持。

示例代码：

```javascript
fetch('https://api.example.com/data')
  .then((response) => {
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    return response.json()
  })
  .then((data) => console.log(data))
  .catch((error) => console.error('Error:', error))
```

### axios

1. **第三方库**:

   - `axios`是一个基于`Promise`的HTTP客户端，可以在浏览器和Node.js中使用。

2. **丰富的功能**:

   - `axios`提供了许多便捷的功能，如自动转换JSON数据、客户端支持防御XSRF等。

3. **请求/响应拦截器**:

   - `axios`允许你设置请求和响应拦截器，可以在请求发送或响应返回之前进行处理。

4. **支持取消请求**:

   - `axios`支持取消请求，可以通过`CancelToken`来实现。

5. **广泛的浏览器支持**:
   - `axios`可以在所有现代浏览器中使用，并且通过使用XHR作为底层实现，它也支持一些较旧的浏览器。

示例代码：

```javascript
axios
  .get('https://api.example.com/data')
  .then((response) => console.log(response.data))
  .catch((error) => console.error('Error:', error))
```

### 总结

- `XMLHttpRequest`是最早的HTTP请求技术，但由于其复杂性和不支持`Promise`，它逐渐被现代API所取代。
- `fetch`是一个原生的API，提供了基于`Promise`的简洁语法，但在功能上可能不如`axios`丰富。
- `axios`是一个流行的第三方库，提供了许多便捷的功能和广泛的浏览器支持，是许多项目的首选HTTP客户端。

开发者可以根据项目需求、浏览器兼容性和个人偏好选择合适的技术进行HTTP请求。

## 闭包

闭包（Closure）是JavaScript中一个非常重要的概念，它允许一个函数访问并操作函数外部的变量。闭包在函数创建时形成，并允许该函数访问创建它的词法作用域中的变量，即使该函数在其原始作用域之外执行。

### 闭包的形成

闭包通常在以下情况下形成：

1. 当一个函数（我们称之为内部函数）被定义在另一个函数（外部函数）的内部时。
2. 内部函数引用了外部函数的变量。
3. 外部函数返回内部函数，这样即使外部函数的执行已经结束，内部函数仍然可以访问外部函数的变量。

### 闭包的例子

```javascript
function createCounter() {
  let count = 0
  return function () {
    count += 1
    return count
  }
}

const counter = createCounter()
console.log(counter()) // 输出 1
console.log(counter()) // 输出 2
console.log(counter()) // 输出 3
```

在这个例子中，`createCounter` 函数返回了一个匿名函数，这个匿名函数可以访问并修改`createCounter`作用域中的`count`变量。即使`createCounter`函数执行完毕，返回的匿名函数仍然可以访问`count`变量，这就是闭包的作用。

### 闭包的用途

闭包有多种用途，包括但不限于：

1. **数据封装和隐私**：闭包可以用来创建私有变量，这些变量不能直接从外部访问，只能通过闭包提供的函数来操作。

2. **模块化代码**：闭包可以帮助创建模块，其中包含私有状态和公共接口，这有助于组织和管理代码。

3. **函数工厂**：闭包可以用来创建设置特定状态的函数，这些函数可以作为其他函数的参数，或者用于构建更复杂的逻辑。

4. **记忆化（Memoization）**：闭包可以用来缓存函数的计算结果，提高性能，特别是在处理递归或计算密集型任务时。

5. **事件处理器和回调函数**：在JavaScript的异步编程和事件处理中，闭包允许回调函数访问定义它们时的作用域中的变量。

### 闭包的注意事项

虽然闭包非常强大，但也需要注意一些潜在的问题：

- **内存泄漏**：由于闭包会保持对外部变量的引用，因此如果不小心，可能会导致这些变量无法被垃圾回收，从而引起内存泄漏。
- **性能考虑**：创建闭包可能会比直接使用函数稍微消耗更多的资源，因为需要维护外部变量的引用。

理解闭包对于深入学习JavaScript和开发复杂的应用程序是非常重要的。它是函数式编程在JavaScript中的一个核心概念，并且在很多现代JavaScript库和框架中都有广泛应用。

## 原型

在JavaScript中，原型（Prototype）是一个非常重要的概念，它是基于原型链的继承机制的核心。JavaScript是一种基于原型的语言，这意味着对象可以从其他对象继承属性和方法。

### 原型对象

每个JavaScript对象都有一个内置的属性，称为`[[Prototype]]`，在ES5之前通常通过`__proto__`属性来访问（尽管这不是所有浏览器都支持的标准属性）。在ES2015（ES6）及以后的版本中，可以通过`Object.getPrototypeOf()`方法来获取一个对象的原型。

函数也是对象，每个函数在创建时都会有一个名为`prototype`的属性，它是一个对象。当这个函数被作为构造函数使用（即通过`new`关键字调用）时，创建的新对象会将其原型设置为构造函数的`prototype`属性指向的对象。

### 原型链

当你尝试访问一个对象的属性或方法时，如果这个对象本身没有这个属性或方法，JavaScript引擎会沿着这个对象的原型链向上查找，直到找到该属性或方法或者到达原型链的顶端（`null`）。如果在原型链上没有找到指定的属性或方法，就会返回`undefined`。

这种机制允许对象共享方法和属性，节省内存。例如，所有的JavaScript对象都是从`Object`继承而来的，因此它们都共享`Object.prototype`上的方法，如`.toString()`和`.hasOwnProperty()`。

### 原型继承

在JavaScript中，继承通常是通过原型链实现的。你可以设置一个对象的原型指向另一个对象，从而实现继承。这样，子对象可以继承父对象的属性和方法。

例如，假设我们有一个构造函数`Person`和另一个构造函数`Student`，我们想让`Student`继承`Person`的属性和方法：

```javascript
function Person(name) {
  this.name = name
}

Person.prototype.greet = function () {
  return 'Hello, my name is ' + this.name
}

function Student(name, grade) {
  Person.call(this, name) // 调用父构造函数
  this.grade = grade
}

// 设置Student的原型指向Person的实例，实现继承
Student.prototype = Object.create(Person.prototype)
Student.prototype.constructor = Student // 修复构造函数指向

Student.prototype.study = function () {
  return this.name + ' is studying in grade ' + this.grade
}

var student = new Student('Alice', 10)
console.log(student.greet()) // "Hello, my name is Alice"
console.log(student.study()) // "Alice is studying in grade 10"
```

在这个例子中，`Student`的原型被设置为`Person`的一个实例，这样`Student`就可以访问`Person`原型上的`greet`方法。同时，我们也给`Student`添加了自己的`study`方法。

### 原型和原型链的重要性

原型和原型链是JavaScript中实现继承和共享方法的基础。理解这些概念对于编写高效和可维护的JavaScript代码至关重要。它们不仅可以帮助开发者节省内存资源，还可以提高代码的复用性。

## 原型链

在JavaScript中，原型链是一种基于原型的继承机制。它允许对象继承另一个对象的属性和方法。这种继承机制是通过对象内部的一个指针（通常称为`[[Prototype]]`）实现的，这个指针指向另一个对象，即该对象的原型。

### 原型对象

每个JavaScript对象（除了`null`）都有一个原型对象。当你试图访问一个对象的属性或方法时，如果该对象本身没有这个属性或方法，JavaScript引擎会尝试在对象的原型上查找这个属性或方法。如果原型上也没有，引擎会继续查找原型的原型，这样一直回溯下去，形成了一个“链式”结构，这就是所谓的原型链。

### 原型链的终点

原型链的终点是`Object.prototype`。所有的原型链最终都会指向这个对象，它是所有对象的祖先。`Object.prototype`的原型是`null`，表示原型链的结束。

### 构造函数和原型

在JavaScript中，每个函数都有一个`prototype`属性，这个属性是一个对象，包含了可以被该函数的实例继承的属性和方法。当你使用`new`关键字创建一个新对象时，新对象的内部`[[Prototype]]`指针就会指向构造函数的`prototype`对象。

### 原型链的例子

```javascript
function Animal(name) {
  this.name = name
}

Animal.prototype.getName = function () {
  return this.name
}

function Dog(name) {
  Animal.call(this, name)
}

Dog.prototype = Object.create(Animal.prototype)
Dog.prototype.constructor = Dog

Dog.prototype.bark = function () {
  return 'Woof!'
}

const myDog = new Dog('Rex')

console.log(myDog.getName()) // Rex
console.log(myDog.bark()) // Woof!
```

在这个例子中：

1. `Animal`是一个构造函数，它有一个`getName`方法在它的原型上。
2. `Dog`是另一个构造函数，它继承自`Animal`。
3. 我们将`Dog.prototype`设置为一个新对象，这个新对象的原型是`Animal.prototype`，这样`Dog`的实例就可以访问`Animal`原型上的方法。
4. 我们还修复了`Dog.prototype.constructor`属性，让它指回`Dog`。
5. `myDog`是`Dog`的一个实例，它可以访问`Dog.prototype`上的`bark`方法，也可以通过原型链访问`Animal.prototype`上的`getName`方法。

```js
// ES6 Class
class Person {
  sex = 1
  //使用 new 关键字创建一个类的实例时，constructor 方法会被自动调用。你可以在 constructor 方法中设置对象的初始属性和执行其他只需在对象创建时执行一次的代码。
  constructor(name, age) {
    this.name = name // 设置对象的name属性
    this.age = age // 设置对象的age属性
    this.greet2 = function () {
      console.log(
        `Hello, my name is ${this.name} and I am ${this.age} years old.`,
      )
    }
  }

  greet() {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`,
    )
  }
}

const personInstance = new Person('Alice', 30)

/*personInstance = {
   sex: 1,
   name: 'Alice',
   age: 30,
   greet2: function () {
      console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
   },
   __proto__: Person.prototype
}*/

/*
Person.prototype = {
   constructor: Person, // 原型对象默认包含对构造函数的引用
   greet: function() {
      console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
   },
   // 注意：这里不会有 greet2 方法，因为它是在构造函数中定义的实例方法
   __proto__: Object.prototype // 所有对象的原型链最终都会指向 Object.prototype
}*/

//preson.__proto__.constructor === Person  //true
//preson.constructor === Person  //true
```

### 原型链的重要性

原型链是JavaScript中实现继承的主要方式。它允许对象共享方法和属性，这样可以节省内存，因为不需要在每个对象实例中复制这些方法和属性。同时，原型链也是理解JavaScript对象模型的关键。

### 原型链的注意事项

- 修改原型是影响所有基于该原型创建的对象的操作，因此需要谨慎修改原型。
- 在原型链查找属性或方法可能会影响性能，尤其是当链很长时。
- 使用`hasOwnProperty`方法可以检查一个属性是否是对象自身的属性，而不是继承自原型链。

理解原型链对于深入理解JavaScript的工作原理和编写高效、可维护的代码至关重要。

## 原型链和继承

JavaScript的原型链和继承是其面向对象编程特性的核心部分。在JavaScript中，继承主要是通过原型链来实现的。这种机制允许对象继承另一个对象的属性和方法。

### 原型和原型链

每个JavaScript对象都有一个特殊的内部属性，称为原型（`[[Prototype]]`），在ES5之前通常通过`__proto__`属性来访问，而在ES5及之后，可以通过`Object.getPrototypeOf()`方法来获取。对象的原型本身也是一个对象，因此它也有自己的原型，这样一层层向上直到原型为`null`为止，这就形成了一个链式结构，称为原型链。

当你尝试访问一个对象的属性或方法时，如果该对象本身没有这个属性或方法，JavaScript引擎会沿着原型链向上查找，直到找到该属性或方法，或者到达原型链的末端（`Object.prototype`的原型是`null`）。

### 函数的prototype属性

在JavaScript中，函数也是对象，每个函数都有一个`prototype`属性，这个属性是一个对象，它包含了可以被函数的实例继承的属性和方法。当你使用`new`操作符来创建一个新对象时，新对象的内部原型就会被设置为构造函数的`prototype`对象。

### 继承的实现

在ES5及之前，JavaScript通过原型链实现继承的常见模式是：

1. 定义一个构造函数。
2. 将构造函数的`prototype`属性设置为一个新对象，这个新对象的原型是另一个构造函数的`prototype`。
3. 如果需要，可以给新对象添加属性和方法，这些属性和方法将被继承。

```javascript
// 父构造函数
function Animal(name) {
  this.name = name
}

Animal.prototype.getName = function () {
  return this.name
}

// 子构造函数
function Dog(name) {
  Animal.call(this, name) // 调用父构造函数
}

// 继承Animal
Dog.prototype = Object.create(Animal.prototype)
Dog.prototype.constructor = Dog // 修复constructor指向

Dog.prototype.bark = function () {
  return 'Woof!'
}

var myDog = new Dog('Rex')
console.log(myDog.getName()) // Rex
console.log(myDog.bark()) // Woof!
```

在这个例子中，`Dog`继承了`Animal`。我们使用`Object.create()`来创建一个新对象，它的原型是`Animal.prototype`，然后将这个新对象赋值给`Dog.prototype`。我们还需要修复`constructor`属性，使其指向`Dog`。

### ES6的class语法

ES6引入了`class`关键字，提供了更清晰和更接近传统面向对象语言的语法来实现继承。在幕后，`class`语法仍然使用原型链。

```javascript
class Animal {
  constructor(name) {
    this.name = name
  }

  getName() {
    return this.name
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name) // 调用父类的constructor
  }

  bark() {
    return 'Woof!'
  }
}

const myDog = new Dog('Rex')
console.log(myDog.getName()) // Rex
console.log(myDog.bark()) // Woof!
```

在这个例子中，`Dog`类通过`extends`关键字继承了`Animal`类。`super`调用是必须的，它调用了父类的构造函数。

### 原型链的注意事项

- 原型链继承中，原型上的引用类型属性将被所有实例共享，这可能会导致意外的副作用。
- 创建对象时，使用`Object.create()`比直接设置`__proto__`属性更推荐，因为`__proto__`属性在早期并不是标准，而且在性能上也不是最优的。

理解原型链和继承对于深入理解JavaScript的对象模型和编写高效、可维护的代码至关重要。尽管现代JavaScript开发中常使用框架和库，这些概念仍然是JavaScript语言的基石。

## 作用域

在JavaScript中，作用域（Scope）是一个非常重要的概念，它定义了变量和函数的可访问性。作用域决定了代码块中的变量和其他资源在哪里可以被访问。

### 全局作用域

当一个变量在函数外部被声明时，它就处于全局作用域内。全局作用域中的变量可以在代码的任何地方被访问和修改，包括函数内部。

```javascript
var globalVar = 'I am a global variable'

function checkScope() {
  console.log(globalVar) // 输出: I am a global variable
}

checkScope()
```

### 局部作用域（函数作用域）

当一个变量在函数内部被声明时，它就处于局部作用域或函数作用域内。局部作用域中的变量只能在函数内部被访问。

```javascript
function checkScope() {
  var localVar = 'I am a local variable'
  console.log(localVar) // 输出: I am a local variable
}

checkScope()
console.log(localVar) // Uncaught ReferenceError: localVar is not defined
```

### 块级作用域（ES6）

ES6引入了`let`和`const`关键字，它们提供了块级作用域。块级作用域是指变量在声明它的一对花括号`{}`内有效。

```javascript
function checkScope() {
  if (true) {
    let blockScopedVar = 'I am a block scoped variable'
    console.log(blockScopedVar) // 输出: I am a block scoped variable
  }
  console.log(blockScopedVar) // Uncaught ReferenceError: blockScopedVar is not defined
}
```

### 词法作用域

JavaScript采用词法作用域（也称为静态作用域），这意味着函数的作用域在函数定义时就已经确定了，而不是在函数调用时。换句话说，函数可以访问在其外部定义的变量。

```javascript
var outerVar = 'I am from outer scope'

function outerFunc() {
  function innerFunc() {
    console.log(outerVar) // 输出: I am from outer scope
  }
  innerFunc()
}

outerFunc()
```

在这个例子中，`innerFunc`可以访问`outerFunc`中的`outerVar`，因为`innerFunc`是在`outerFunc`的作用域内定义的。

### 动态作用域 vs 词法作用域

JavaScript不使用动态作用域，这意味着函数的作用域不是在函数调用时确定的。这与词法作用域形成对比，词法作用域是在函数定义时确定的。

### 作用域链

当代码在一个环境中执行时，如果变量不在当前作用域中，JavaScript引擎会沿着作用域链向上查找，直到找到该变量为止。如果在全局作用域中仍然找不到该变量，则会抛出引用错误（ReferenceError）。

### 闭包和作用域

闭包是JavaScript中的一个高级特性，它允许函数访问并操作函数外部的变量。这是通过函数创建时的作用域链来实现的。即使外部函数已经执行完毕，闭包仍然可以访问外部函数作用域中的变量。

### 总结

作用域是JavaScript中定义变量可见性和生命周期的关键概念。它有助于保护变量不被外部环境访问，防止全局命名冲突，并提供了编写模块化代码的基础。理解作用域对于编写可维护和高效的JavaScript代码至关重要。

## 事件循环

JavaScript中的事件循环（Event Loop）是一个执行模型，它使得JavaScript能够执行非阻塞代码，这对于一个单线程环境来说是非常重要的。事件循环允许JavaScript在执行长时间运行的任务时仍然能够处理用户交互、脚本、UI渲染等。

### 运行时概念

在深入了解事件循环之前，需要理解几个与之相关的JavaScript运行时概念：

- **调用栈（Call Stack）**：负责跟踪函数调用的地方。当一个函数被执行时，它被添加到栈中；当函数返回时，它被从栈中移除。
- **堆（Heap）**：用于存储对象实例等动态分配的内存。
- **任务队列（Task Queue）**：当异步事件发生时（例如，定时器到期、网络请求完成等），相应的回调函数会被添加到任务队列中等待执行。
- **微任务队列（Microtask Queue）**：类似于任务队列，但是专门用于处理微任务（如Promise的回调）。

### 事件循环的步骤

事件循环的每一次迭代通常被称为一个tick，每个tick的步骤如下：

1. **执行调用栈中的代码**：如果调用栈非空，事件循环将同步执行栈顶的函数，直到栈为空。
2. **检查微任务队列**：如果调用栈为空，事件循环会检查微任务队列。如果队列中有微任务（例如，Promise的回调），事件循环会依次执行这些微任务，直到微任务队列为空。
3. **执行宏任务**：一旦微任务队列为空，事件循环会从任务队列中取出一个任务（宏任务）并执行。这些宏任务包括定时器回调、I/O操作完成的回调等。
4. **更新渲染**：在某些情况下，如果有必要，浏览器会更新渲染界面。
5. **重复**：完成当前tick后，事件循环会等待调用栈再次为空，然后执行下一个tick。

### 宏任务与微任务

宏任务和微任务是事件循环中的两种不同类型的任务：

- **宏任务（Macrotask）**：包括整体代码script、setTimeout、setInterval、I/O、UI渲染等。
- **微任务（Microtask）**：包括Promise.then、async/await（它们是基于Promise的）、process.nextTick（Node.js特有）等。

微任务的特点是它们总是在当前tick的宏任务执行完毕后，且在渲染之前执行。这意味着微任务可以用来延迟操作直到堆栈为空，但在渲染之前。

### 事件循环的重要性

事件循环是JavaScript异步编程的核心，它允许JavaScript执行长时间运行的任务，同时仍然保持响应性，处理用户交互、脚本、UI渲染等。理解事件循环对于编写高效且性能良好的JavaScript应用程序至关重要。

### 示例

```javascript
console.log('Script start') // 1. 同步代码，立即执行

setTimeout(function () {
  console.log('setTimeout') // 4. 宏任务，事件循环的下一个tick执行
}, 0)

Promise.resolve()
  .then(function () {
    console.log('promise1') // 2. 微任务，当前tick结束时执行
  })
  .then(function () {
    console.log('promise2') // 3. 微任务，紧跟在上一个微任务之后执行
  })

console.log('Script end') // 同步代码，立即执行
```

执行顺序将会是：

```
Script start
Script end
promise1
promise2
setTimeout
```

这个顺序展示了同步代码首先执行，微任务在当前事件循环tick的末尾执行，而宏任务则被推迟到下一个tick。

## 事件捕获和冒泡

在前端开发中，事件处理是一个核心概念，它允许用户与网页进行交互。事件冒泡和事件捕获是两种事件传播的机制，它们定义了在一个嵌套的元素结构中，事件是如何从一个元素传播到另一个元素的。

### 事件流

事件流描述了从页面中接收事件的顺序。DOM2级事件规范定义了两种事件流：事件捕获（Capturing）和事件冒泡（Bubbling）。

### 事件捕获

事件捕获的思想是不太具体的节点应该更早接收到事件，而最具体的节点应该最后接收到事件。事件捕获的用意在于在事件到达预定目标之前捕获它。

事件捕获的过程如下：

1. 事件开始时由顶层对象（通常是`document`对象）捕获，然后事件沿着DOM树向下传播，直到到达触发事件的最具体的元素（即事件目标）。

### 事件冒泡

与事件捕获相反，事件冒泡则认为最具体的节点应该最先接收到事件，然后事件再向上传播到不太具体的节点。

事件冒泡的过程如下：

1. 事件由最具体的元素（即事件目标）接收，然后事件沿着DOM树向上冒泡，直到到达最顶层的对象。

### 事件处理程序的三个阶段

在DOM2级事件规范中，事件处理程序有三个阶段：

1. **捕获阶段**：事件从`document`向下传播到目标元素，查找事件的目标。
2. **目标阶段**：事件到达目标元素，触发目标元素上的监听器。
3. **冒泡阶段**：事件从目标元素向上冒泡到`document`。

### 添加事件监听器

当你使用`addEventListener`方法添加事件监听器时，你可以指定监听器是在捕获阶段还是冒泡阶段执行。

```javascript
// 在冒泡阶段执行
element.addEventListener(
  'click',
  function (event) {
    // 处理点击事件
  },
  false,
)

// 在捕获阶段执行
element.addEventListener(
  'click',
  function (event) {
    // 处理点击事件
  },
  true,
)
```

第三个参数如果是`true`，表示在捕获阶段调用事件处理程序；如果是`false`，表示在冒泡阶段调用事件处理程序（这是默认行为）。

### 阻止事件传播

有时候，我们不希望事件继续传播。可以使用`event.stopPropagation()`方法来阻止事件的进一步传播（无论是捕获还是冒泡）。

```javascript
element.addEventListener('click', function (event) {
  event.stopPropagation()
  // 处理点击事件
})
```

### 事件冒泡和事件捕获的区别

- **事件捕获**：为了更早地捕捉到事件，可以在捕获阶段添加事件处理程序。
- **事件冒泡**：为了在事件传播的较晚阶段处理事件，可以在冒泡阶段添加事件处理程序。

大多数情况下，事件冒泡足以处理常见的事件监听任务。但是，了解事件捕获也是很重要的，因为它提供了一个在事件到达目标之前就介入的机会。

### 实际应用

在实际应用中，事件冒泡允许实现事件委托，这是一种性能优化技术，可以减少事件监听器的数量。通过在父元素上监听事件，并利用冒泡机制来处理来自子元素的事件，可以避免在每个子元素上单独添加事件监听器。

了解事件冒泡和事件捕获的区别对于编写高效、可维护的事件处理代码非常重要。

## this

在JavaScript中，`this`关键字是一个特殊的标识符，它在函数执行时被自动设置，指向一个与执行上下文相关的对象。`this`的值取决于函数是如何被调用的，而不是如何被定义的。以下是`this`在不同场景下的指向：

```js
// demo.js

// error demo
export const SUBTITLE_FORMAT_OPTIONS = (i18n) => {
  const t = i18n.t
  // VueI18n.prototype.t = function t (key) {
  //    var ref;
  //
  //    var values = [], len = arguments.length - 1;
  //    while ( len-- > 0 ) values[ len ] = arguments[ len + 1 ];
  //    return (ref = this)._t.apply(ref, [ key, this.locale, this._getMessages(), null ].concat( values ))
  // };
  return [
    {
      value: 0,
      label: t('constant')[0], // error    // t函数中使用了this._t，但是在这里this的值是undefined,这里也要注意一下，无论导出的函数是普通函数还是箭头函数，只要是在任何使用了模块系统(cjs,mjs)的JavaScript环境中，顶层直接调用(函数没有被作为对象的方法调用)，指向都是undefined(默认启用严格模式)，不会受运行的上下文影响，除非对导出的普通函数使用call,bind或者apply,当然导出的箭头函数是修改不了的。
      // JavaScript不使用动态作用域，JavaScript采用词法作用域（也称为静态作用域），这意味着函数的作用域在函数定义时就已经确定了，而不是在函数调用时。换句话说，函数可以访问在其外部定义的变量。(取决于定义时，非运行时。)
    },
    {
      value: 1,
      label: t('constant')[1], // error
    },
    {
      value: 2,
      label: t('constant')[2], // error
    },
    {
      value: 3,
      label: t('constant')[3], // error
    },
    {
      value: 4,
      label: t('constant')[4], // error
    },
  ]
}

// success demo
export const SUBTITLE_FORMAT_OPTIONS2 = (i18n) => {
  return [
    {
      value: 0,
      label: i18n.t('constant')[0], // 这里t函数内部的this指向了i18n实例，正确。
    },
    {
      value: 1,
      label: i18n.t('constant')[1],
    },
    {
      value: 2,
      label: i18n.t('constant')[2],
    },
    {
      value: 3,
      label: i18n.t('constant')[3],
    },
    {
      value: 4,
      label: i18n.t('constant')[4],
    },
  ]
}
```

### 全局上下文

在全局执行上下文中（在任何函数体外部），`this`指向全局对象。在浏览器中，全局对象是`window`，而在Node.js中，全局对象是`global`。

```javascript
console.log(this === window) // 在浏览器中输出 true
```

### 函数上下文

在函数内部，`this`的值取决于函数是如何被调用的。

#### 普通函数调用

当一个函数不作为对象的方法被调用时，`this`通常指向全局对象（在严格模式下，`this`的值是`undefined`）。

```javascript
function showThis() {
  console.log(this)
}

showThis() // 在非严格模式下，this 指向 window/global 对象
```

#### 方法调用

当函数作为对象的方法被调用时，`this`指向该方法所属的对象。

```javascript
const myObject = {
  method() {
    console.log(this)
  },
}

myObject.method() // this 指向 myObject
```

#### 构造函数调用

当一个函数通过`new`关键字被作为构造函数调用时，`this`指向新创建的实例对象。

```javascript
function MyConstructor() {
  console.log(this)
}

const myInstance = new MyConstructor() // this 指向新创建的实例 myInstance
```

#### 显式绑定

使用`call`、`apply`或`bind`方法可以显式地设置`this`的值。

```javascript
function showThis(a, b) {
  console.log(this, a, b)
}

const myContext = { value: 'A' }

showThis.call(myContext, 1, 2) // this 指向 myContext，输出 { value: 'A' } 1 2
showThis.apply(myContext, [1, 2]) // this 指向 myContext，输出 { value: 'A' } 1 2

const boundShowThis = showThis.bind(myContext, 1, 2)
boundShowThis() // this 指向 myContext，输出 { value: 'A' } 1 2
```

#### 箭头函数

箭头函数不绑定自己的`this`，它们捕获其所在上下文的`this`值作为自己的`this`值。

```javascript
const myObject = {
  method() {
    const arrowFunc = () => {
      console.log(this)
    }
    arrowFunc()
  },
}

myObject.method() // this 指向 myObject
```

在箭头函数中，无论它如何被调用，`this`的值都取决于它外层（函数或全局）作用域的`this`值。

### 事件处理器中的`this`

在浏览器中，当函数作为事件处理器被调用时，`this`通常指向触发事件的元素。

```javascript
const button = document.querySelector('button')
button.addEventListener('click', function () {
  console.log(this) // this 指向 button 元素
})
```

### 总结

`this`关键字在JavaScript中的行为可能会令人困惑，特别是当函数可以以多种方式被调用时。理解`this`在不同上下文中的行为对于编写可预测和可维护的代码非常重要。记住，`this`的值总是取决于函数的调用方式，而不是函数的定义方式。

## Copy

在JavaScript中，深拷贝和浅拷贝主要解决的是对象复制时的引用问题。JavaScript中的对象是通过引用来操作的，这意味着当你将一个对象赋值给另一个变量时，你只是复制了对原始对象的引用，而不是对象本身。这就导致了两个变量指向同一个对象，一个变量对对象的修改会影响到另一个变量。

### 浅拷贝 (Shallow Copy)

浅拷贝只复制对象的第一层属性，如果对象的属性值本身是一个对象，那么浅拷贝会复制这个属性值的引用。因此，如果你修改了这个嵌套对象的属性，那么原始对象和拷贝对象都会受到影响。

#### 应用场景：

- 当你想要创建一个新对象，但只需要复制原始对象的第一层属性时。
- 当对象中没有嵌套对象，或者你确定不会修改嵌套对象时。

#### 实现方式：

- 使用`Object.assign()`方法。
- 使用展开运算符`...`。

### 深拷贝 (Deep Copy)

深拷贝会复制对象的所有层级，创建一个完全独立的副本。这意味着无论多少层嵌套，深拷贝都会创建嵌套对象的副本，因此原始对象和拷贝对象之间不会相互影响。

#### 应用场景：

- 当你需要完全独立的对象副本，且不希望原始对象和新对象之间有任何关联时。
- 当对象中有多层嵌套结构，且你可能会修改嵌套对象时。

#### 实现方式：

- 使用`JSON.parse(JSON.stringify(object))`，但这种方法不能复制函数和循环引用。
- 使用递归来手动实现深拷贝。
- 使用第三方库，如lodash的`_.cloneDeep()`方法。

### 注意事项

- 深拷贝和浅拷贝都有其适用场景，深拷贝虽然可以创建完全独立的副本，但是也更加耗费资源，特别是在对象很大或结构很复杂时。
- `JSON.parse(JSON.stringify(object))`方法在深拷贝时有局限性，例如它无法复制函数、undefined、Symbol、循环引用等。
- 在实际应用中，应根据具体需求选择合适的拷贝方式，以避免不必要的性能开销或者意外的副作用。
