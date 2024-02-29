---
title: 'node'
---

# Node

## Example of internationalization insertion script （ React version ）

> FYI, the replacement is capable of handling most real-world scenarios (>=95%), and may require manual fine-tuning depending on the scene where the replacement is placed.

```js
import { readFileSync, writeFileSync } from 'node:fs'
const info = {
  path: 'src/utils/utils.tsx',
  i18nObj: {
    utils0: 'The video size cannot be exceeded',
    utils1: 'Please readjust before uploading',
    utils2: 'Upgrade Invite',
    utils3: 'Upgrade now',
    utils4: 'Please log in first',
    utils5: 'Your account has been logged in repeatedly',
    utils6: 'Not supported at current level',
    utils7: 'Select voice type language does not match, please re-select',
    utils8:
      'Subtitle file parsing failed, suggestion: 1. Check whether the subtitle has the correct text content;2. Please upload the subtitle file again if it cannot be parsed',
    utils9:
      'Please upload a subtitle file corresponding to the length of the video',
    utils10:
      'There is too much subtitle text, please upload a subtitle file corresponding to the video duration',
    utils11: 'No response at task processing timeout, please try again later',
    utils13: 'Account disabled',
    utils14:
      'There is an abnormal operation in your account, if you have any questions, please contact customer service to complain',
    utils15: 'WeChat scan code to add customer service',
    utils16: 'Language recognition did not recognize content',
    //was not successfully replaced
    utils17: {
      'Mobile number': {
        0: 'Change phone number',
        1: 'Bind mobile phone number',
      },
      'E-mail': {
        1: 'Bind mailbox',
        0: 'Change mailbox',
      },
      password: {
        0: 'Set a new password',
        2: 'Set Password',
      },
      WeChat: {
        1: 'Bind WeChat',
        3: 'Unbind WeChat',
      },
    },
    utils18: 'failed to load',
    utils19: 'Only support dragging and dropping files or folders',
    utils20: 'There is no Content Disposition field in headers',
    utils21: 'Replication successful',
    utils22: 'Replication failed',
    //Replacement was not successful
    utils23: {
      0: 'Image Translation Task',
      1: 'Video Translation Task',
      2: 'Video export task',
      3: 'Video Dubbing Mission',
      4: 'Dubbing Export Task',
    },
  },
}

i18nReplace(info)

function i18nReplace(info) {
  let code = readFileSync(info.path, 'utf8')
  const i18nObj = Object.fromEntries(
    Object.entries(info.i18nObj).sort((a, b) => b[1].length - a[1].length),
  )
  console.log(i18nObj)
  // Note: The following is only valid for string substitutions
  for (const key in i18nObj) {
    code = code.replaceAll(`'${i18nObj[key]}'`, `t['${key}']`)
  }
  for (const key in i18nObj) {
    code = code.replaceAll(`"${i18nObj[key]}"`, `t['${key}']`)
  }
  for (const key in i18nObj) {
    code = code.replaceAll(i18nObj[key], `{t['${key}']}`)
  }

  // if vue
  // for (const key in i18nObj) {
  //   code = code.replaceAll(`'${i18nObj[key]}'`, `"$t['${key}']"`)
  // }
  // for (const key in i18nObj) {
  //   code = code.replaceAll(`"${i18nObj[key]}"`, `"$t['${key}']"`)
  // }
  // for (const key in i18nObj) {
  //   code = code.replaceAll(i18nObj[key], `{{t['${key}']}}`)
  // }
  writeFileSync(info.path, code, 'utf8')
}
```

## Reading Project Files (Configurable)

```js
const fs = require('fs')
const path = require('path')

const projectPath = './' // The root directory of the project
const ignoreDirs = ['node_modules', '.nuxt', 'assets', 'api', 'locales'] // Ignored directories
const ignoreFiles = ['i18n.js'] // Ignored files
const fileRegex = /\.(js|jsx|ts|tsx|vue)$/ // The type of file that needs to be searched

function walkDir(dir, doSomething) {
  const files = fs.readdirSync(dir)
  for (const file of files) {
    const fullPath = path.join(dir, file)
    const stat = fs.statSync(fullPath)
    if (stat.isDirectory() && !ignoreDirs.includes(file)) {
      walkDir(fullPath)
    } else if (
      stat.isFile() &&
      !ignoreFiles.includes(file) &&
      fileRegex.test(file)
    ) {
      doSomething && doSomething(fullPath)
    }
  }
}
```

## 部分关键概念

### koa2

当你使用 Koa2 编写后台接口服务，并且有大量用户同时发起请求时，Node.js 和 Koa2 的内部运行逻辑大致如下：

1. **接收请求**：Node.js 的底层网络模块接收到来自客户端的 HTTP 请求，并建立 TCP 连接。

2. **事件循环**：Node.js 使用事件循环来处理异步事件。当一个新的请求到达时，它会被放入事件队列中等待处理。

3. **Koa2 中间件**：事件循环将请求分配给 Koa2 应用程序。Koa2 使用中间件机制来处理请求。每个请求都会通过一系列中间件，这些中间件可以是日志记录、身份验证、数据解析、路由处理等。

4. **异步处理**：在中间件中，任何需要等待的操作（如数据库查询、文件读取等）都应该是异步的。Koa2 支持 `async/await` 语法，使得异步代码的编写更加直观和易于管理。当这些异步操作被触发时，它们会被放入 Node.js 的内部线程池或者其他异步处理机制中，主事件循环会继续处理其他任务。

5. **回调执行**：一旦异步操作完成（例如，数据库返回了查询结果），相应的回调函数或者 `Promise` 的 `resolve`/`reject` 会被加入到事件循环中等待执行。

6. **构建响应**：当中间件完成处理后，Koa2 会构建 HTTP 响应，并通过 Node.js 的网络模块发送回客户端。

7. **继续监听**：一旦响应被发送，Node.js 会继续监听新的请求，同时事件循环会处理队列中的下一个事件。

在这个过程中，Node.js 的单线程事件循环机制允许它高效地处理大量并发的 I/O 密集型请求。由于 I/O 操作是非阻塞的，主线程可以在等待 I/O 操作完成的同时处理更多的请求。

然而，如果请求处理涉及到大量的 CPU 计算，则可能会阻塞事件循环，导致性能问题。在这种情况下，可以考虑以下策略：

- 使用 Node.js 的 `worker_threads` 模块来在后台线程中执行 CPU 密集型任务。
- 创建子进程来分担计算负载。
- 使用负载均衡器分发请求到多个 Node.js 实例或服务器。

总之，Koa2 和 Node.js 能够有效地处理大量并发请求，特别是当这些请求主要涉及到 I/O 操作时。对于 CPU 密集型任务，需要采取额外的措施来确保性能不会受到影响。

### I/O密集型和CPU密集型

I/O 密集型（Input/Output Intensive）和 CPU 密集型（CPU Intensive）是两种不同类型的计算任务，它们根据所需的主要资源来分类。

### I/O 密集型

I/O 密集型任务是指那些需要大量读写操作的任务，无论是磁盘 I/O 还是网络 I/O。这类任务的特点是 CPU 计算不是主要瓶颈，而是等待外部数据的读取或写入。在 I/O 密集型任务中，程序经常处于等待状态，因为它们依赖于文件系统的响应、数据库查询的返回或网络资源的可用性。

例如，一个 Web 服务器通常处理大量的客户端请求，这些请求涉及到网络数据的接收和发送，可能还需要查询数据库或访问文件系统。这些操作通常不会占用太多的 CPU 时间，但会有大量的等待时间，因此这类任务被认为是 I/O 密集型的。

### CPU 密集型

CPU 密集型任务是指那些需要大量计算的任务，这些计算会占用大量的 CPU 时间。在 CPU 密集型任务中，CPU 的处理能力是主要的瓶颈。这类任务通常涉及复杂的算法、数据处理、图形渲染或科学计算等。

例如，视频编码、图像处理或机器学习模型的训练通常是 CPU 密集型的任务，因为它们需要大量的数学运算和数据处理。

### 区别

主要区别在于它们对系统资源的需求不同：

- **I/O 密集型任务**：更多地依赖于 I/O 子系统的性能（如硬盘、网络），CPU 大部分时间可能处于空闲状态，等待 I/O 操作完成。
- **CPU 密集型任务**：主要依赖于 CPU 的计算能力，CPU 核心会被充分利用，进行大量的计算工作。

在设计和优化系统时，了解任务的类型是非常重要的。对于 I/O 密集型任务，提高 I/O 性能、使用异步编程模型和非阻塞 I/O 可以显著提高效率。而对于 CPU 密集型任务，可能需要考虑使用多线程、多进程或分布式计算来充分利用 CPU 资源，或者使用专门的硬件加速（如 GPU）。

Node.js 由于其非阻塞 I/O 和事件驱动的特性，特别适合处理 I/O 密集型任务。对于 CPU 密集型任务，Node.js 可能不是最佳选择，除非采用了额外的策略来分散计算负载。

### 线程池后续

当线程池中的委托任务执行完毕后，其结果需要返回给 Node.js 的主线程，以便执行与任务相关的 JavaScript 回调函数。这个过程是通过事件循环来协调的。以下是详细的步骤：

1. **任务完成**：线程池中的线程完成了其分配的任务（例如，文件读取、DNS 查询等）。

2. **通知事件循环**：任务完成后，线程会将一个完成信号（通常是一个事件）发送回事件循环。这个信号告诉事件循环相关的异步操作已经完成，并且结果已经准备好了。

3. **排队回调**：事件循环接收到完成信号后，会将与该异步操作相关的回调函数放入一个队列中。这个队列通常被称为“任务队列”或“回调队列”。

4. **执行回调**：当事件循环进入适当的阶段时（例如，在处理完其他更高优先级的事件后），它会从任务队列中取出回调函数并执行它们。这些回调函数运行在 Node.js 的主线程上，因此它们可以安全地访问 JavaScript 的全局状态，并与其他 JavaScript 代码互操作。

5. **返回控制权**：一旦回调函数执行完毕，控制权返回给事件循环，它将继续处理队列中的其他事件和回调，或者监听新的异步事件。

这个过程确保了即使在多线程环境中，JavaScript 代码的执行仍然是单线程的，从而避免了传统多线程编程中的许多并发问题。同时，它也使得 Node.js 能够高效地处理大量的并发 I/O 操作，因为主线程不会被阻塞在任何单个 I/O 任务上。

### 为什么适合I/O密集型

如果你将一个非常复杂的任务交给 Node.js 的线程池，这可能会影响性能，尤其是如果这个任务是 CPU 密集型的。这里有几个原因：

1. **线程池大小限制**：Node.js 的线程池默认大小是有限的（通常是 4 个线程，但可以通过设置环境变量 `UV_THREADPOOL_SIZE` 来调整）。如果你提交了一个非常复杂的任务，它可能会占用线程池中的一个线程很长时间，从而减少了线程池处理其他异步 I/O 任务的能力。

2. **任务排队**：如果线程池中的所有线程都被占用，新的任务将不得不等待，直到一个线程变得可用。这意味着即使是简单的 I/O 任务也可能会遇到延迟，因为它们必须等待复杂任务完成。

3. **主线程阻塞**：虽然线程池可以帮助避免阻塞主线程，但如果线程池中的任务执行时间过长，主线程在等待任务完成以便执行回调时可能会出现性能瓶颈。这是因为回调只能在主线程上执行，而且必须等待线程池中的任务完成。

4. **资源竞争**：CPU 密集型任务可能会导致线程池中的线程消耗大量 CPU 资源，这可能会影响到运行在同一物理机器上的其他进程或应用程序的性能。

为了避免这些问题，你可以采取以下措施：

- **分解任务**：尽可能将复杂任务分解为更小的、可管理的部分，这样可以减少单个任务对线程池的占用时间。

- **使用 Worker Threads**：对于 CPU 密集型任务，可以使用 Node.js 的 `worker_threads` 模块来创建额外的工作线程，这样可以在不同的线程中并行处理任务，而不会占用 libuv 线程池中的线程。

- **负载均衡**：如果你的应用程序需要处理大量的复杂任务，可以考虑在多个 Node.js 实例之间分配负载，或者使用微服务架构，将不同的任务分散到不同的服务中处理。

- **外部服务**：对于一些特别复杂的任务，可以考虑使用外部服务或专门的后台作业系统来处理，例如使用消息队列和专门的工作进程。

总之，将复杂任务交给 Node.js 的线程池确实可能影响性能，特别是当这些任务是 CPU 密集型的。合理地管理任务和资源是确保 Node.js 应用程序性能的关键。
