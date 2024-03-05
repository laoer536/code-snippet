---
title: 'frontier'
---

# Frontier

## PWA

PWA（Progressive Web App，渐进式网络应用）是一种旨在提供类似于原生应用体验的网络应用程序。PWA 结合了传统网页的可访问性和移动应用的功能，使得用户可以在任何平台上都能获得一致的体验。PWA 的核心特性包括响应式设计、离线支持、快速加载、安全性、可安装性和可推送通知。

### PWA 的核心特性

1. **响应式设计**:

   - PWA 应该能够适应任何设备的屏幕尺寸，包括桌面、平板和手机。

2. **离线支持**:

   - 利用 Service Workers，PWA 可以在没有网络连接的情况下工作，通过缓存关键资源来提供离线体验。

3. **快速加载**:

   - PWA 通过优化资源和使用 Service Workers 来缓存内容，从而实现快速加载，即使在网络不佳的情况下也能快速响应。

4. **安全性**:

   - PWA 通过 HTTPS 提供服务，确保应用程序和用户数据的安全传输。

5. **可安装性**:

   - 用户可以将 PWA 添加到他们的主屏幕，无需通过应用商店下载。这为用户提供了类似于原生应用的启动体验。

6. **推送通知**:

   - PWA 可以发送推送通知，即使应用程序没有打开，也可以与用户保持互动。

7. **链接可分享性**:
   - 与原生应用不同，PWA 可以通过 URL 轻松分享和发现。

### PWA 的应用

1. **电子商务**:

   - 电商网站可以作为 PWA 提供更快的浏览体验，提高用户参与度和转化率。

2. **新闻和媒体**:

   - 新闻网站可以利用 PWA 提供离线阅读和推送通知，从而增加用户的阅读时间和参与度。

3. **社交媒体**:

   - 社交媒体平台可以通过 PWA 提供快速的交互体验和及时的通知，保持用户的活跃度。

4. **旅行和本地服务**:

   - 旅行应用可以作为 PWA 提供离线地图和行程信息，提高用户体验。

5. **教育和培训**:

   - 教育平台可以通过 PWA 提供离线课程和学习材料，使学习不受网络限制。

6. **企业应用**:
   - 企业可以开发 PWA 来提供内部工具和服务，提高员工的生产力。

### 开发 PWA

开发 PWA 通常涉及以下技术和标准：

- **Service Workers**: 一种运行在浏览器后台的脚本，可以拦截和处理网络请求，实现缓存和离线功能。
- **Web App Manifest**: 一个 JSON 文件，定义了应用的名称、图标、启动屏幕颜色和主屏幕添加的外观。
- **HTTPS**: 确保应用的安全性，是使用 Service Workers 的前提条件。
- **推送 API**: 允许应用发送推送通知。

PWA 的目标是利用网络技术提供一种无缝、集成和高效的用户体验，无论用户使用的是什么设备或浏览器。随着网络技术的发展和浏览器支持的增强，PWA 正在成为许多企业和开发者的首选解决方案。

## 为什么使用PWA

使用 PWA（渐进式网络应用）的理由主要基于其提供的一系列用户体验和开发优势。以下是选择使用 PWA 的一些关键原因：

### 1. 增强的用户体验

- **离线功能**: 通过 Service Workers，PWA 可以在没有网络连接的情况下工作，提供更好的用户体验。
- **快速加载**: PWA 通过缓存策略和优化的资源加载，即使在网络不佳的情况下也能快速响应。
- **类似原生应用的体验**: PWA 可以添加到主屏幕，提供全屏体验和原生应用风格的交互。

### 2. 提高用户参与度和留存率

- **推送通知**: PWA 可以发送推送通知，即使应用没有打开，也可以吸引用户回归。
- **可安装性**: 用户可以轻松地将 PWA 添加到他们的设备上，提高了应用的可见性和便捷性。

### 3. 降低开发和维护成本

- **跨平台兼容性**: PWA 是基于 Web 技术构建的，因此可以在任何支持现代浏览器的设备上运行，无需为不同平台开发单独的应用。
- **单一代码库**: 开发者可以维护一个代码库，服务于所有用户，而不是为每个操作系统维护不同的代码库。

### 4. 无需应用商店分发

- **直接访问**: PWA 通过网址访问，无需通过应用商店下载和安装，简化了用户获取应用的过程。
- **更新简便**: PWA 更新不需要用户手动操作，每次访问都可以获取到最新版本的应用。

### 5. 搜索引擎可发现性

- **SEO 优势**: 作为网页的 PWA 可以通过搜索引擎被发现，这有助于提高应用的可见性和获取新用户。

### 6. 安全性

- **HTTPS**: PWA 要求通过 HTTPS 提供服务，确保数据传输的安全性，保护用户数据不被窃取或篡改。

### 7. 节省设备资源

- **轻量级**: PWA 通常比原生应用占用更少的设备存储空间，因为大部分资源都是在线获取的。

### 8. 增强的社交分享

- **链接分享**: PWA 可以通过链接分享，用户可以轻松地将应用分享给其他人，增加应用的传播。

### 9. 支持现代 Web 标准

- **最新技术**: PWA 的开发利用了最新的 Web API 和技术，如 Service Workers、Cache API、Fetch API 等。

尽管 PWA 提供了许多优势，但它们可能不适合所有类型的应用。例如，如果应用需要访问某些特定的设备功能或更深层次的系统集成，原生应用可能是更好的选择。然而，对于希望提供跨平台、易于访问和维护的应用程序，PWA 是一个非常有吸引力的选择。

## Web Component

Web Components 是一组不同的技术，允许你创建可重用的自定义元素，并在 Web 应用中封装它们的功能。这些自定义元素可以在任何 HTML 页面中使用，就像任何其他 DOM 元素一样。Web Components 主要由三项主要技术组成：

1. **Custom Elements**: 允许开发者定义自己的 HTML 标签及其 JavaScript 类。
2. **Shadow DOM**: 为自定义元素提供封装，这意味着它们的样式和脚本可以独立于页面的其余部分。
3. **HTML Templates (`<template>` 和 `<slot>`)**: 允许声明性地定义可重用的标记结构。

### 使用 Web Components

下面是一个简单的 Web Component 示例，它创建了一个自定义的 `<user-card>` 元素，用于显示用户信息。

#### 1. 定义 Custom Element

首先，你需要创建一个继承自 `HTMLElement` 的 JavaScript 类，并在其中定义你的元素行为。

```javascript
class UserCard extends HTMLElement {
  constructor() {
    super() // 总是首先调用 super() 构造函数

    // 创建一个 shadow root
    const shadow = this.attachShadow({ mode: 'open' })

    // 创建元素，设置样式和内容
    const wrapper = document.createElement('div')
    wrapper.setAttribute('class', 'user-card')

    const info = document.createElement('div')
    info.setAttribute('class', 'info')

    const name = document.createElement('h3')
    name.textContent = this.getAttribute('name')

    const email = document.createElement('p')
    email.textContent = this.getAttribute('email')

    // 将创建的元素附加到 shadow dom
    info.appendChild(name)
    info.appendChild(email)
    wrapper.appendChild(info)
    shadow.appendChild(wrapper)
  }
}
```

#### 2. 定义元素的样式

你可以在 Shadow DOM 中定义样式，这样它们就不会影响到外部的 DOM。

```javascript
// 继续 UserCard 类的定义
const style = document.createElement('style')
style.textContent = `
    .user-card {
        border: 1px solid #d5d5d5;
        border-radius: 5px;
        padding: 10px;
        margin: 10px;
        display: inline-block;
        width: 200px;
        font-family: 'Arial';
    }
    .info {
        margin-bottom: 10px;
    }
    .info h3, .info p {
        margin: 0;
        padding: 0;
    }
`

// 将样式元素附加到 shadow dom
shadow.appendChild(style)
```

#### 3. 注册 Custom Element

使用 `customElements.define()` 方法注册新创建的元素。

```javascript
// 注册 user-card 元素
customElements.define('user-card', UserCard)
```

#### 4. 在 HTML 中使用 Custom Element

现在你可以在 HTML 页面中像使用普通 HTML 标签一样使用 `<user-card>`。

```html
<user-card name="John Doe" email="john@example.com"></user-card>
<user-card name="Jane Smith" email="jane@example.com"></user-card>
```

### 完整的代码示例

将上述代码片段组合在一起，你将得到一个完整的 Web Component。

```javascript
// user-card.js
class UserCard extends HTMLElement {
  constructor() {
    super()
    const shadow = this.attachShadow({ mode: 'open' })

    const wrapper = document.createElement('div')
    wrapper.setAttribute('class', 'user-card')

    const info = document.createElement('div')
    info.setAttribute('class', 'info')

    const name = document.createElement('h3')
    name.textContent = this.getAttribute('name')

    const email = document.createElement('p')
    email.textContent = this.getAttribute('email')

    const style = document.createElement('style')
    style.textContent = `
            .user-card {
                border: 1px solid #d5d5d5;
                border-radius: 5px;
                padding: 10px;
                margin: 10px;
                display: inline-block;
                width: 200px;
                font-family: 'Arial';
            }
            .info {
                margin-bottom: 10px;
            }
            .info h3, .info p {
                margin: 0;
                padding: 0;
            }
        `

    info.appendChild(name)
    info.appendChild(email)
    wrapper.appendChild(info)
    shadow.appendChild(wrapper)
    shadow.appendChild(style)
  }
}

customElements.define('user-card', UserCard)
```

在 HTML 文件中，你需要引入这个 JavaScript 文件，并使用 `<user-card>` 元素。

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Web Components Example</title>
    <script src="user-card.js"></script>
  </head>
  <body>
    <user-card name="John Doe" email="john@example.com"></user-card>
    <user-card name="Jane Smith" email="jane@example.com"></user-card>
  </body>
</html>
```

这个例子展示了如何创建一个简单的 Web Component，但 Web Components 的真正力量在于它们的封装性和可重用性。你可以创建更复杂的组件，包含事件处理、属性观察者、模板和插槽等。通过 Web Components，你可以构建一个强大的组件库，这些组件可以在不同的项目和团队之间共享和重用。

## Serverless

Serverless是一种云计算的执行模型，它允许开发者编写和部署代码而不需要关心底层的服务器。在Serverless架构中，云服务提供商自动分配并管理运行时环境——无论是服务器还是其他形式的基础设施。开发者只需关注他们的代码和应用逻辑，而不是服务器的运维和管理。

Serverless的核心优势包括：

1. **按需计费**：你只需为代码执行时消耗的资源付费，而不是持续支付服务器的租用费用。
2. **自动扩展**：服务会根据应用的需求自动扩展或缩减资源，无需手动干预。
3. **无服务器管理**：不需要管理服务器或运行时环境，减少了运维的工作量。
4. **快速部署和更新**：可以迅速部署新的代码，并且容易更新和维护。

Serverless的应用场景非常广泛，包括但不限于：

1. **Web应用**：Serverless可以用来构建无服务器的前端应用，例如使用AWS的S3和Lambda，结合API Gateway来提供RESTful API。
2. **后端API**：无需管理服务器即可构建和运行API，这些API可以为移动应用、网页应用或其他服务提供后端功能。
3. **数据处理**：可以用于处理数据流、文件上传、日志分析等，例如使用AWS Lambda来处理S3中的文件上传事件。
4. **实时文件处理**：例如，用户上传图片后，自动触发函数进行图片压缩、格式转换或者图像识别。
5. **物联网(IoT)应用**：Serverless架构适合处理来自数以百万计的设备的事件和消息。
6. **聊天机器人**：构建无需复杂后端的聊天机器人服务。
7. **流媒体处理**：例如，对上传的视频进行编码、转码、添加水印等。
8. **定时任务**：执行定时任务，如数据库清理、发送定时邮件等。

流行的Serverless服务提供商包括Amazon Web Services (AWS) 的Lambda、Google Cloud的Cloud Functions、Microsoft Azure的Azure Functions等。这些平台通常提供与其他云服务的集成，使得构建复杂的Serverless应用成为可能。

[精读《Serverless 给前端带来了什么》 - 掘金 (juejin.cn)](https://juejin.cn/post/6844903793948114951?searchId=2024012520023860C187F4A8A1D3B00AE8)

应用

[快速上手亚马逊的 Serverless 服务 - 掘金 (juejin.cn)](https://juejin.cn/post/6844903940690018318?searchId=2024012520023860C187F4A8A1D3B00AE8)

## WebAssembly

### 概念

WebAssembly 是一种运行在现代网络浏览器中的新型代码，并且提供新的性能特性和效果。它设计的目的不是为了手写代码而是为诸如 C、C++ 和 Rust 等低级源语言提供一个高效的编译目标。

对于网络平台而言，这具有巨大的意义——这为客户端 app 提供了一种在网络平台以接近本地速度的方式运行多种语言编写的代码的方式；在这之前，客户端 app 是不可能做到的。

而且，你在不知道如何编写 WebAssembly 代码的情况下就可以使用它。WebAssembly 的模块可以被导入的到一个网络 app（或 Node.js）中，并且暴露出供 JavaScript 使用的 WebAssembly 函数。JavaScript 框架不但可以使用 WebAssembly 获得巨大性能优势和新特性，而且还能使得各种功能保持对网络开发者的易用性。

### 目标

- 快速、高效、可移植——通过利用常见的硬件能力，WebAssembly 代码在不同平台上能够以接近本地速度运行。
- 可读、可调试——WebAssembly 是一门低阶语言，但是它有确实有一种人类可读的文本格式（其标准即将得到最终版本），这允许通过手工来写代码，看代码以及调试代码。
- 保持安全——WebAssembly 被限制运行在一个安全的沙箱执行环境中。像其他网络代码一样，它遵循浏览器的同源策略和授权策略。
- 不破坏网络——WebAssembly 的设计原则是与其他网络技术和谐共处并保持向后兼容。

### WebAssembly 如何适应网络平台？

网络平台可以被想象成拥有两个部分：

- 一个运行网络程序（Web app）代码——比如，给你的程序提供能力的 JavaScript——的虚拟机
- 一系列网络程序能够调用从而控制网络浏览器/设备功能，并且能够让事物发生变化的网络 API（DOM、CSSOM、WebGL、IndexedDB、Web Audio API等）。
  从历史角度讲，虚拟机过去只能加载 JavaScript。这对我们而言足够了，因为 JavaScript 足够强大从而能够解决人们在当今网络上遇到的绝大部分问题。尽管如此，当试图把 JavaScript 应用到诸如 3D 游戏、虚拟现实、增强现实、计算机视觉、图像/视频编辑以及大量的要求原生性能的其他领域的时候，我们遇到了性能问题（参考 WebAssembly 使用案例 获取更多细节）。

而且，下载、解析以及编译巨大的 JavaScript 应用程序的成本是过高的。移动平台和其他资源受限平台进一步放大了这些性能瓶颈。

- WebAssembly 是一门不同于 JavaScript 的语言，但是，它不是用来取代 JavaScript 的。相反，它被设计为和 JavaScript 一起协同工作，从而使得网络开发者能够利用两种语言的优势：

- JavaScript 是一门高级语言。对于写网络应用程序而言，它足够灵活且富有表达力。它有许多优势——它是动态类型的，不需要编译环节以及一个巨大的能够提供强大框架、库和其他工具的生态系统。
  WebAssembly 是一门低级的类汇编语言。它有一种紧凑的二进制格式，使其能够以接近原生性能的速度运行，并且为诸如 C++ 和 Rust 等拥有低级的内存模型语言提供了一个编译目标以便它们能够在网络上运行。（注意，WebAssembly 有一个在将来支持使用了垃圾回收内存模型的语言的高级目标。）
  随着 WebAssembly 出现在了浏览器中，我们前面提到的虚拟机将会加载和运行两种类型的代码——JavaScript 和 WebAssembly。

不同类型的代码能够按需进行相互调用——WebAssembly JavaScript API 将需要导出的 WebAssebmly 代码包裹成 JavaScript 函数，使其能够像常规 JavaScript 函数一样被调用，并且 WebAssembly 代码还可以导入并同步调用常规 JavaScript 函数。事实上，WebAssembly 代码的基本单元被称作模块，并且 WebAssembly 的模块在很多方面都和 ES 的模块是等价的。

JavaScript 能够完全控制 WebAssembly 代码如何下载、编译运行，所以，JavaScript 开发者甚至可以把 WebAssembly 想象成一个高效地生成高性能函数的 JavaScript 特性。WebAssembly 并不旨在替代 JavaScript; 两者可以一起工作，借鉴对方的优势。

[相关扩展](https://juejin.cn/post/7219613068275449893)
