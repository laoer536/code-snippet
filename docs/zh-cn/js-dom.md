---
title: 'js-dom'
---

# JS-DOM

## DOM操作

在JavaScript中，文档对象模型（Document Object Model，简称DOM）是一个跨平台和语言独立的接口，它允许程序和脚本动态地访问和更新文档的内容、结构和样式。DOM将HTML或XML文档表示为树结构，每个节点都是文档的一部分，例如文档本身、元素、属性和文本。

### DOM节点类型

在DOM中，主要有以下几种类型的节点：

- **文档节点（Document）**：代表整个文档（HTML或XML）。
- **元素节点（Element）**：代表文档中的HTML或XML元素。
- **文本节点（Text）**：代表元素或属性中的文本内容。
- **属性节点（Attribute）**：代表元素的属性。
- **注释节点（Comment）**：代表注释内容。

### DOM操作的基本方法

以下是一些基本的DOM操作方法：

#### 查找元素

- `document.getElementById(id)`：通过元素ID获取单个元素。
- `document.getElementsByTagName(name)`：通过标签名获取元素集合。
- `document.getElementsByClassName(className)`：通过类名获取元素集合。
- `document.querySelector(selector)`：通过CSS选择器获取第一个匹配的元素。
- `document.querySelectorAll(selector)`：通过CSS选择器获取所有匹配的元素集合。

#### 创建、插入和删除节点

- `document.createElement(tagName)`：创建一个新的元素节点。
- `parentNode.appendChild(childNode)`：将一个节点添加到父节点的子节点列表的末尾。
- `parentNode.insertBefore(newNode, referenceNode)`：在参考节点之前插入一个新节点。
- `parentNode.removeChild(child)`：从DOM中删除一个子节点。
- `element.cloneNode(deep)`：克隆一个元素，如果`deep`为`true`，则会连同子孙节点一起克隆。

#### 修改元素

- `element.innerHTML`：获取或设置元素内部的HTML内容。
- `element.textContent`：获取或设置元素内部的文本内容。
- `element.setAttribute(name, value)`：设置元素的属性值。
- `element.removeAttribute(name)`：移除元素的属性。
- `element.classList.add(className)`：添加一个新的类名到元素。
- `element.classList.remove(className)`：从元素移除一个类名。
- `element.classList.toggle(className)`：切换元素的类名。

#### 事件处理

- `element.addEventListener(event, handler, useCapture)`：为元素添加一个事件监听器。
- `element.removeEventListener(event, handler, useCapture)`：移除元素的事件监听器。
- `event.preventDefault()`：阻止事件的默认行为。
- `event.stopPropagation()`：阻止事件冒泡。

#### 样式操作

- `element.style.property`：直接修改元素的样式属性。
- `window.getComputedStyle(element)`：获取元素的计算后样式。

### 示例

以下是一些DOM操作的简单示例：

```javascript
// 查找元素
var myDiv = document.getElementById('myDiv')
var paragraphs = document.getElementsByTagName('p')
var myClassElements = document.getElementsByClassName('myClass')
var firstButton = document.querySelector('button')
var allButtons = document.querySelectorAll('button')

// 创建和插入元素
var newParagraph = document.createElement('p')
newParagraph.textContent = 'Hello, DOM!'
myDiv.appendChild(newParagraph)

// 修改元素
myDiv.innerHTML = '<span>New content</span>'
myDiv.setAttribute('data-custom', 'value')
myDiv.classList.add('active')

// 事件处理
firstButton.addEventListener('click', function (event) {
  alert('Button clicked!')
})

// 样式操作
myDiv.style.backgroundColor = 'blue'
var computedStyle = window.getComputedStyle(myDiv)
console.log(computedStyle.width)
```

### 注意事项

- DOM操作可能会影响页面性能，特别是当频繁地添加、删除或修改大量元素时。为了提高性能，可以使用文档片段（`DocumentFragment`）或批量更新元素。
- 直接操作`innerHTML`可以导致安全问题，如跨站脚本攻击（XSS），因此在处理不可信的内容时应该谨慎。
- 当使用事件监听器时，应确保在不需要时移除它们，以避免内存泄漏。

掌握DOM操作是前端开发中的一个基本技能，它允许开发者创建动态和交互式的网页应用。随着现代前端框架（如React、Vue和Angular）的流行，直接操作DOM变得不那么常见，但了解DOM的工作原理仍然是非常重要的。

## 监听一个dom的尺寸变化

监听DOM元素尺寸变化可以通过以下几种方案实现：

1. **Resize Observer API**:
   这是一个现代的API，专门用于监听元素的尺寸变化。它提供了一种高效的方法来观察一个或多个元素的内容矩形，并在尺寸变化时执行回调函数。

   ```javascript
   const resizeObserver = new ResizeObserver(entries => {
       for (let entry of entries) {
           const rect = entry.contentRect;
           console.log('Element size:', rect.width, 'x', rect.height);
       }
   });

   const element = document.querySelector('.resizable');
   resizeObserver.observe(element);
   ```

2. **Mutation Observer API**:
   虽然Mutation Observer API主要用于监听DOM树的变化（如子节点的增删改），但如果尺寸变化是由于DOM树变化引起的，那么可以使用这个API。

   ```javascript
   const mutationObserver = new MutationObserver(mutations => {
       mutations.forEach(mutation => {
           if (mutation.type === 'childList' || mutation.type === 'attributes') {
               // 检查尺寸变化
           }
       });
   });

   const config = { attributes: true, childList: true, subtree: true };
   const element = document.querySelector('.resizable');
   mutationObserver.observe(element, config);
   ```

3. **Window Resize Event**:
   如果元素尺寸的变化是由于窗口大小的变化引起的，可以监听window对象的`resize`事件。

   ```javascript
   window.addEventListener('resize', () => {
       const element = document.querySelector('.resizable');
       // 检查元素的尺寸
   });
   ```

4. **Polling (定时检查)**:
   使用`setInterval`或`setTimeout`定时检查元素的尺寸是否发生变化。这种方法效率较低，不推荐使用，但在不支持上述API的环境中可以作为一种备选方案。

   ```javascript
   let width = 0, height = 0;
   const element = document.querySelector('.resizable');

   setInterval(() => {
       if (element.offsetWidth !== width || element.offsetHeight !== height) {
           width = element.offsetWidth;
           height = element.offsetHeight;
           // 尺寸变化了，执行相应的操作
       }
   }, 1000); // 每秒检查一次
   ```

5. **CSS Element Queries / Container Queries** (实验性):
   这是一个提议中的特性，允许样式表根据元素自身的尺寸来应用不同的样式规则。虽然目前还不是标准，但未来可能会成为监听元素尺寸变化的另一种方式。

6. **使用第三方库**:
   有些第三方库提供了跨浏览器的解决方案来监听元素尺寸的变化，例如`element-resize-detector`或`resize-sensor`等。

选择哪种方案取决于你的具体需求和目标浏览器的兼容性。如果目标浏览器支持，建议使用Resize Observer API，因为它是专门为这个目的设计的，性能也比较好。

## MutationObserver使用demo

`MutationObserver` 是一个Web API，用于监视DOM树的变化，如元素的添加、删除、属性或文本内容的变化。以下是一个简单的`MutationObserver`使用示例：

1. 首先，创建一个HTML文件，其中包含一些可以观察变化的DOM元素：

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>MutationObserver Demo</title>
</head>
<body>

<div id="target">监视这个元素的变化</div>

<button id="add">添加子元素</button>
<button id="change">改变文本</button>

<script src="script.js"></script>

</body>
</html>
```

2. 接下来，创建一个JavaScript文件（在这个例子中是`script.js`），并在其中设置`MutationObserver`：

```javascript
// script.js

// 选择要观察变化的节点
const targetNode = document.getElementById('target');

// 观察器的配置（需要观察哪些变化）
const config = {
  attributes: true, // 观察属性变化
  childList: true, // 观察子节点的变化，包括添加或删除
  subtree: true, // 观察后代节点
  characterData: true // 观察节点内容或文本的变化
};

// 当观察到变化时执行的回调函数
const callback = function(mutationsList, observer) {
  for(const mutation of mutationsList) {
    if (mutation.type === 'childList') {
      console.log('A child node has been added or removed.');
    } else if (mutation.type === 'attributes') {
      console.log(`The ${mutation.attributeName} attribute was modified.`);
    } else if (mutation.type === 'characterData') {
      console.log('The character data has changed.');
    }
  }
};

// 创建一个观察器实例并传入回调函数
const observer = new MutationObserver(callback);

// 使用配置开始观察目标节点
observer.observe(targetNode, config);

// 之后，你可以随时停止观察
// observer.disconnect();

// 获取按钮并添加事件监听器来触发DOM变化
document.getElementById('add').addEventListener('click', () => {
  const newElement = document.createElement('p');
  newElement.textContent = '新的子元素';
  targetNode.appendChild(newElement);
});

document.getElementById('change').addEventListener('click', () => {
  targetNode.textContent = '文本已改变';
});
```

在这个例子中，我们创建了一个`MutationObserver`来监视ID为`target`的元素。我们设置了一个配置对象来指定我们感兴趣的变化类型，并定义了一个回调函数来处理观察到的变化。然后，我们使用`observe`方法开始监视，并通过按钮点击事件触发DOM变化来测试观察器。

当你点击“添加子元素”按钮时，将向目标元素中添加一个新的`<p>`元素，观察器会检测到`childList`变化并在控制台中记录。当你点击“改变文本”按钮时，目标元素的文本内容会改变，观察器会检测到`characterData`变化并记录到控制台。

请注意，为了使这个示例工作，你需要将HTML和JavaScript代码保存到本地文件中，并在支持JavaScript的Web浏览器中打开HTML文件。
