---
title: 'css'
---

# CSS

## CSS3新特性

CSS3是CSS（层叠样式表）技术的第三个版本，它在CSS2的基础上增加了许多新的特性和模块，使得网页设计师和开发者能够创建更加丰富和动态的网页。以下是CSS3的一些主要新特性：

1. **选择器（Selectors）**:
   CSS3引入了更多的选择器，比如属性选择器、结构伪类选择器、伪元素选择器等，这些选择器提供了更加精确和灵活的方式来选择和样式化元素。

2. **圆角（Border-radius）**:
   CSS3允许你轻松地创建圆角边框，而不需要使用图像或其他hack。

3. **阴影（Box-shadow/Text-shadow）**:
   可以给盒子（div等元素）和文本添加阴影效果，增强视觉效果。

4. **渐变（Gradients）**:
   CSS3支持线性渐变和径向渐变，可以在元素的背景中创建平滑的颜色过渡效果。

5. **转换（Transforms）**:
   允许元素进行2D或3D的转换，如旋转、缩放、倾斜和移动。

6. **过渡（Transitions）**:
   为CSS属性变化提供动画效果，使得属性值的变化可以在一定时间内平滑过渡。

7. **动画（Animations）**:
   CSS3动画允许你创建关键帧动画，可以控制动画序列的中间步骤，时间线，持续时间和其他动画细节。

8. **多列布局（Multi-column Layout）**:
   允许文本在多列中流动，类似于报纸的布局。

9. **弹性盒子布局（Flexbox）**:
   提供了一种更加灵活的方式来布局、对齐和分配容器内元素的空间，特别是当容器的大小未知或动态变化时。

10. **网格布局（Grid Layout）**:
    提供了一个二维网格系统，用于创建更加复杂和灵活的布局。

11. **媒体查询（Media Queries）**:
    允许根据不同的设备特性（如屏幕尺寸、分辨率、颜色能力等）来应用不同的样式规则，这是响应式网页设计的关键技术。

12. **Web字体（@font-face）**:
    允许网页设计师使用非标准字体，通过@font-face规则直接嵌入字体文件。

13. **背景扩展（Backgrounds）**:
    CSS3增加了对背景大小（background-size）的控制，以及允许多个背景图像（background-image）。

14. **边框图像（Border-image）**:
    允许使用图像来创建边框，可以实现更加复杂的边框效果。

15. **颜色（Colors）**:
    CSS3支持RGBA、HSLA颜色模型，允许设置颜色的透明度。

16. **2D/3D转换（2D/3D Transforms）**:
    提供了创建2D或3D转换效果的能力，比如旋转、缩放、倾斜等。

CSS3的这些新特性极大地丰富了网页设计的可能性，使得设计师和开发者可以创建更加动态、交云互动和视觉吸引力的网页，同时也提高了跨浏览器的兼容性和性能。

## CSS盒模型

CSS盒模型是CSS（层叠样式表）中用于设计和布局网页的基本概念。每个HTML元素可以看作是一个盒子，这个盒子包括了几个不同的部分：内容（content）、内边距（padding）、边框（border）和外边距（margin）。这些部分定义了元素的总体尺寸和在页面上的空间占用。

以下是CSS盒模型的各个部分的详细解释：

1. **内容（Content）**:

   - 这是盒子的中心部分，包含了实际的文本、图片或其他媒体内容。
   - 在CSS中，你可以使用`width`和`height`属性来设置内容区域的宽度和高度。

2. **内边距（Padding）**:

   - 内边距是内容区域与边框之间的空间。
   - 它可以增加元素内部的空白区域，从而使内容与边框之间有一定的距离。
   - 内边距可以分别通过`padding-top`、`padding-right`、`padding-bottom`和`padding-left`属性来设置，或者使用`padding`属性一次性设置所有四个方向的内边距。

3. **边框（Border）**:

   - 边框环绕在内边距的外围，为元素提供一个可视化的界限。
   - 边框的大小、样式和颜色可以通过`border-width`、`border-style`和`border-color`属性分别设置，或者使用`border`属性简写。
   - 边框也会影响元素的总体尺寸。

4. **外边距（Margin）**:
   - 外边距是盒子最外层的部分，它决定了元素与其他元素之间的空间。
   - 外边距可以用来创建元素之间的间隔，防止元素紧挨在一起。
   - 与内边距类似，外边距可以通过`margin-top`、`margin-right`、`margin-bottom`和`margin-left`属性来分别设置，或者使用`margin`属性一次性设置所有四个方向的外边距。

CSS盒模型有两种计算方式：标准盒模型和IE盒模型（也称为怪异模式或替代盒模型）。

- **标准盒模型（W3C盒模型）**:

  - 在标准盒模型中，元素的总宽度和总高度是通过将内容的`width`和`height`与内边距、边框和外边距相加来计算的。
  - 公式为：总宽度 = 左边框 + 左内边距 + 内容宽度 + 右内边距 + 右边框 + 左外边距 + 右外边距。

- **IE盒模型（怪异模式）**:
  - 在IE盒模型中，元素的`width`和`height`属性不仅包括内容的尺寸，还包括了内边距和边框。
  - 公式为：总宽度 = 内容宽度（已包含左右内边距和左右边框）+ 左外边距 + 右外边距。

在CSS3中，你可以使用`box-sizing`属性来控制盒模型的计算方式。`box-sizing: content-box`表示标准盒模型，而`box-sizing: border-box`表示IE盒模型。

理解CSS盒模型对于掌握页面布局和元素尺寸调整至关重要，因为它决定了元素如何与周围的元素相互作用以及它们在页面上如何显示。

## `border-box`和`content-box`

在CSS中，`box-sizing`属性用于改变元素的盒模型计算方式，主要有两个值：`content-box`和`border-box`。这两个值决定了元素的宽度和高度如何被计算，尤其是当元素有内边距（padding）和边框（border）时。

### content-box（W3C标准盒模型）

`content-box`是CSS盒模型的默认值。当你为一个元素设置`box-sizing: content-box;`时，元素的宽度和高度只包括内容区域，不包括内边距、边框和外边距。

这意味着如果你设置一个元素的宽度为100px，并且添加了10px的内边距和5px的边框，那么元素的总宽度将会是：

总宽度 = 内容宽度 + 左内边距 + 右内边距 + 左边框 + 右边框
总宽度 = 100px + 10px + 10px + 5px + 5px
总宽度 = 130px

在`content-box`模型中，增加内边距和边框会导致元素的总尺寸增加，这可能会破坏布局，尤其是在你需要元素精确适应特定尺寸的容器时。

### border-box（IE盒模型）

`border-box`是另一种盒模型计算方式。当你为一个元素设置`box-sizing: border-box;`时，元素的宽度和高度包括内容区域、内边距和边框，但不包括外边距。

这意味着如果你设置一个元素的宽度为100px，并且添加了10px的内边距和5px的边框，那么元素的总宽度仍然是100px。元素的内容区域会自动缩小，以适应内边距和边框的空间。

在`border-box`模型中，无论你如何改变内边距和边框，元素的总尺寸始终等于你设置的宽度和高度。这使得布局更加可预测，简化了布局设计，因为你不需要进行额外的计算来考虑内边距和边框的空间。

### 总结

- 使用`content-box`时，元素的总尺寸 = 内容的宽度/高度 + 内边距 + 边框。
- 使用`border-box`时，元素的总尺寸 = 设置的宽度/高度（内容的宽度/高度会减去内边距和边框的空间）。

在实际开发中，许多开发者倾向于全局设置`box-sizing: border-box;`，因为它简化了盒模型的计算，使得布局更加直观和易于管理。

## Flex and Grid

CSS提供了多种布局方法，其中Flexbox和Grid是两种现代、强大且广泛使用的布局技术。它们都允许开发者以更灵活和高效的方式创建复杂的布局。

### Flexbox（弹性盒子布局）

Flexbox是一种一维布局方法，意味着它可以在一个方向上（水平或垂直）有效地排列元素。Flexbox使得在不同屏幕尺寸和不同显示设备上都能保持元素的一致布局变得容易。

**主要概念**:

- **Flex容器（Flex Container）**: 使用`display: flex;`或`display: inline-flex;`声明的元素成为Flex容器。
- **Flex项目（Flex Items）**: Flex容器内的直接子元素自动成为Flex项目。
- **主轴（Main Axis）**: Flex项目的排列方向。
- **交叉轴（Cross Axis）**: 与主轴垂直的轴。

**Flex容器属性**:

- `display`: 设置为`flex`或`inline-flex`来定义一个Flex容器。
- `flex-direction`: 定义主轴的方向（例如，`row`或`column`）。
- `flex-wrap`: 设置Flex项目是否换行。
- `justify-content`: 在主轴上对齐Flex项目（例如，`flex-start`、`flex-end`、`center`、`space-between`、`space-around`）。
- `align-items`: 在交叉轴上对齐Flex项目（例如，`stretch`、`center`、`flex-start`、`flex-end`）。
- `align-content`: 多行Flex项目在交叉轴上的对齐方式。

**Flex项目属性**:

- `flex-grow`: 定义Flex项目的放大比例。
- `flex-shrink`: 定义Flex项目的缩小比例。
- `flex-basis`: 定义Flex项目在分配多余空间之前的默认大小。
- `flex`: `flex-grow`、`flex-shrink`和`flex-basis`的简写。
- `align-self`: 允许单个Flex项目有与其他项目不同的对齐方式。

### Grid（网格布局）

Grid是一种二维布局方法，意味着它可以同时在水平和垂直方向上控制布局。Grid布局允许开发者创建复杂的网格设计，非常适合需要精确布局控制的场景。

**主要概念**:

- **Grid容器（Grid Container）**: 使用`display: grid;`或`display: inline-grid;`声明的元素成为Grid容器。
- **Grid项目（Grid Items）**: Grid容器内的直接子元素成为Grid项目。
- **Grid线（Grid Lines）**: 构成网格的水平和垂直线。
- **Grid轨道（Grid Tracks）**: 网格的列（column tracks）和行（row tracks）。
- **Grid单元（Grid Cell）**: 由两个相邻的行和两个相邻的列所定义的单元格。
- **Grid区域（Grid Area）**: 由四个Grid线包围的任意数量的Grid单元。

**Grid容器属性**:

- `display`: 设置为`grid`或`inline-grid`来定义一个Grid容器。
- `grid-template-columns`和`grid-template-rows`: 定义列和行的大小。
- `grid-template-areas`: 定义一个或多个Grid区域的名称布局。
- `grid-column-gap`和`grid-row-gap`: 设置列和行之间的间隙。
- `justify-items`和`align-items`: 对齐Grid项目内的内容。
- `justify-content`和`align-content`: 对齐整个Grid容器内的网格。

**Grid项目属性**:

- `grid-column-start`、`grid-column-end`、`grid-row-start`和`grid-row-end`: 定义Grid项目的位置和大小。
- `grid-column`和`grid-row`: `start`和`end`属性的简写。
- `grid-area`: 指定Grid项目所在的区域。

Flexbox和Grid都是响应式设计的强大工具，它们可以单独使用，也可以结合使用来创建复杂的布局。Flexbox更适合一维布局（如导航栏或滚动列表），而Grid则是为更复杂的二维布局（如网页的整体布局）而设计的。选择哪种布局方法取决于你的具体需求和设计目标。

## 响应式设计

前端的响应式设计是一种网页设计方法，旨在创建能够在不同设备和屏幕尺寸上都能提供良好用户体验的网页。响应式设计的核心是灵活性和适应性，它通过使用流体网格、灵活的图片、媒体查询和其他技术，确保内容能够根据不同的浏览环境进行适当的调整。

以下是实现响应式设计的几个关键技术和概念：

1. **流体网格（Fluid Grids）**:

   - 流体网格使用百分比而不是固定单位（如像素）来定义页面元素的宽度，这样元素的宽度可以随着视口（viewport）的大小变化而变化。
   - 通过计算元素宽度与其容器宽度的比例，可以创建出能够适应不同屏幕尺寸的布局。

2. **灵活图片（Flexible Images）**:

   - 图片和其他媒体文件也需要能够适应不同的屏幕尺寸。
   - 通常，可以通过设置图片的`max-width`属性为`100%`来确保图片不会超过其包含元素的宽度，从而避免在小屏幕上溢出。

3. **媒体查询（Media Queries）**:

   - 媒体查询是响应式设计中的关键技术，它允许开发者根据不同的媒体特征（如屏幕宽度、分辨率和设备类型）来应用不同的CSS样式。
   - 通过媒体查询，可以为手机、平板电脑、桌面显示器等设备创建特定的样式规则。

4. **断点（Breakpoints）**:

   - 断点是在媒体查询中定义的，用于指定当屏幕尺寸达到某个特定点时应用不同的样式。
   - 断点应该基于内容的布局需求而不是特定设备的尺寸来设置。

5. **可伸缩的字体大小（Scalable Typography）**:

   - 字体大小也应该能够根据屏幕尺寸的变化而调整，以保持文本的可读性。
   - 使用相对单位（如em或rem）而不是像素来设置字体大小可以提高灵活性。

6. **移动优先（Mobile First）**:

   - 移动优先是一种设计策略，先为移动设备设计网页，然后再逐步增强到平板和桌面设备。
   - 这种方法鼓励设计师专注于核心内容和功能，从而提高整体的用户体验。

7. **CSS框架和工具**:
   - 有许多现成的CSS框架（如Bootstrap、Foundation等）提供了响应式设计的基础结构和组件。
   - 这些框架通常包含预定义的媒体查询、响应式网格系统和其他有用的工具，可以加速响应式网页的开发。

响应式设计的目标是确保网页在任何设备上都能够提供一致的用户体验，无论是在小屏幕的手机上浏览，还是在大屏幕的电视上观看。随着设备和屏幕尺寸的多样化，响应式设计已经成为现代网页设计的标准实践。

## CSS3动画

CSS3引入了动画功能，允许开发者在不使用JavaScript的情况下创建平滑的动画效果。CSS3动画主要依赖于两个关键的概念：`transition`和`animation`。

### Transition（过渡）

Transition是CSS3中的一个特性，它允许你在CSS属性值之间平滑地过渡。当一个元素的CSS属性发生变化时，transition可以使这个变化不是立即发生，而是在一定的时间内逐渐发生。

**关键知识点**:

- `transition-property`: 指定要过渡的CSS属性。可以是具体的属性名，或者使用`all`来指定所有可过渡的属性。
- `transition-duration`: 定义过渡效果的持续时间。
- `transition-timing-function`: 定义过渡效果的速度曲线，常见的值有`linear`、`ease`、`ease-in`、`ease-out`和`ease-in-out`。
- `transition-delay`: 设置过渡效果开始之前的延迟时间。

Transition通常用于响应用户交互，如悬停、点击或聚焦时改变元素的样式。

### Animation（动画）

Animation是CSS3中的一个更强大的特性，它允许你创建复杂的关键帧动画。与transition不同，animation不依赖于CSS属性的变化，而是允许你定义动画序列，这些序列可以在任何时间点指定元素的样式。

**关键知识点**:

- `@keyframes`: 用于定义动画序列。在`@keyframes`规则中，你可以指定一个或多个关键帧（keyframes），每个关键帧描述了动画的某个时间点的样式。
- `animation-name`: 指定要绑定到选择器的`@keyframes`的名称。
- `animation-duration`: 定义动画完成一个周期的时间。
- `animation-timing-function`: 与transition中的timing function类似，定义动画的速度曲线。
- `animation-delay`: 设置动画开始前的延迟时间。
- `animation-iteration-count`: 定义动画的播放次数，可以是数字或`infinite`表示无限循环。
- `animation-direction`: 定义动画是否应该反向播放，常见的值有`normal`、`reverse`、`alternate`和`alternate-reverse`。
- `animation-fill-mode`: 指定动画在执行前后如何将样式应用到目标元素上，常见的值有`none`、`forwards`、`backwards`和`both`。
- `animation-play-state`: 允许你控制动画的播放和暂停，常见的值有`running`和`paused`。

Animation适用于创建复杂的动画效果，如循环播放的动画或在动画序列中控制多个样式的变化。

### 实践建议

- **性能考虑**: 使用CSS动画时，应该注意性能问题。某些属性的变化（如`width`、`height`、`margin`、`padding`）可能会导致重排（reflow）和重绘（repaint），从而影响性能。使用`transform`和`opacity`属性进行动画通常会得到更好的性能，因为浏览器可以对它们进行硬件加速。
- **兼容性**: 虽然大多数现代浏览器都支持CSS动画，但在使用时仍需考虑浏览器兼容性问题。对于老旧的浏览器，可能需要使用前缀或回退方案。
- **工具和库**: 有许多工具和库可以帮助创建CSS动画，如Animate.css、Hover.css等，它们提供了预定义的动画效果，可以简化开发过程。

CSS动画为前端开发者提供了一种强大的工具，可以用来增强用户界面的交互性和吸引力。通过合理使用transition和animation，可以在不牺牲性能的情况下，为用户提供流畅和愉悦的体验。

## 水平垂直居中方案

在前端开发中，实现水平垂直居中是一个常见的布局需求。随着CSS的发展，有多种方法可以实现这一效果。以下是一些常用的实现水平垂直居中的方法：

### 1. Flexbox（弹性盒子布局）

Flexbox提供了一种简单的方式来居中子元素：

```css
.parent {
  display: flex;
  justify-content: center; /* 水平居中 */
  align-items: center; /* 垂直居中 */
}
```

### 2. Grid（网格布局）

Grid布局也可以轻松实现居中：

```css
.parent {
  display: grid;
  place-items: center; /* 水平垂直居中 */
}
```

或者分别设置：

```css
.parent {
  display: grid;
  justify-content: center; /* 水平居中 */
  align-items: center; /* 垂直居中 */
}
```

### 3. 绝对定位与负边距

使用绝对定位和负边距可以实现居中，但需要知道子元素的尺寸：

```css
.parent {
  position: relative;
}

.child {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); /* 使用transform来偏移自身尺寸的一半 */
}
```

### 4. 绝对定位与margin:auto

绝对定位结合`margin: auto`也可以实现居中，不需要知道子元素的尺寸：

```css
.parent {
  position: relative;
}

.child {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto; /* 自动计算上下左右的margin来实现居中 */
  height: 50px; /* 需要指定宽高 */
  width: 100px;
}
```

### 5. 行内元素的`text-align`和`line-height`

对于行内元素或文本内容，可以使用`text-align`和`line-height`实现水平垂直居中：

```css
.parent {
  text-align: center;
  line-height: 100px; /* 父元素高度 */
}

.child {
  display: inline-block;
  line-height: normal; /* 重置子元素的line-height */
}
```

### 6. 使用表格布局

通过将父元素设置为表格，子元素设置为表格单元格，可以实现居中：

```css
.parent {
  display: table;
}

.child {
  display: table-cell;
  text-align: center;
  vertical-align: middle;
}
```

### 7. 使用CSS变量和calc()

如果知道子元素的尺寸，可以使用CSS变量和`calc()`函数来实现居中：

```css
:root {
  --child-width: 100px;
  --child-height: 50px;
}

.parent {
  position: relative;
}

.child {
  position: absolute;
  top: calc(50% - var(--child-height) / 2);
  left: calc(50% - var(--child-width) / 2);
  width: var(--child-width);
  height: var(--child-height);
}
```

### 8. 使用现代CSS函数min(), max(), clamp()

使用CSS的数学函数可以实现更灵活的居中，特别是当容器大小不确定时：

```css
.child {
  width: max(
    50px,
    min(100px, 50vw)
  ); /* 宽度介于50px和100px之间，或视口宽度的50% */
  height: max(
    50px,
    min(100px, 50vh)
  ); /* 高度介于50px和100px之间，或视口高度的50% */
  margin: auto;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
```

每种方法都有其适用场景，选择哪种方法取决于具体的布局需求、兼容性考虑以及个人偏好。Flexbox和Grid是最现代且最简单的解决方案，而绝对定位的方法提供了更多的控制，但可能需要更多的设置。

## CSS选择器以及优先级

CSS选择器是一种模式，用于选择要应用样式的HTML元素。CSS选择器的种类繁多，可以根据不同的需求和上下文选择元素。以下是一些常见的CSS选择器种类：

### 基本选择器

1. **通用选择器（Universal Selector）**:

   - `*`：选择所有元素。

2. **类型选择器（Type Selector）**:

   - `elementname`：选择所有指定类型的元素，如`div`、`p`等。

3. **类选择器（Class Selector）**:

   - `.classname`：选择具有指定类的所有元素。

4. **ID选择器（ID Selector）**:

   - `#idname`：选择具有指定ID的元素。

5. **属性选择器（Attribute Selector）**:
   - `[attr]`：选择具有指定属性的元素。
   - `[attr=value]`：选择属性等于特定值的元素。
   - `[attr^=value]`：选择属性值以特定值开头的元素。
   - `[attr$=value]`：选择属性值以特定值结尾的元素。
   - `[attr*=value]`：选择属性值中包含特定值的元素。

### 组合选择器

1. **后代选择器（Descendant Selector）**:

   - `A B`：选择A元素内部的所有B元素。

2. **子选择器（Child Selector）**:

   - `A > B`：选择A元素的直接子元素B。

3. **相邻兄弟选择器（Adjacent Sibling Selector）**:

   - `A + B`：选择紧接在A元素之后的第一个兄弟元素B。

4. **通用兄弟选择器（General Sibling Selector）**:
   - `A ~ B`：选择A元素之后的所有兄弟元素B。

### 伪类选择器

1. **动态伪类**:

   - `:hover`、`:active`、`:focus`等，根据用户交互来选择元素。

2. **结构伪类**:

   - `:first-child`、`:last-child`、`:nth-child(n)`等，根据元素在其父元素中的位置来选择元素。

3. **目标伪类**:

   - `:target`：选择当前活动的目标元素（URL的片段标识符指向的元素）。

4. **语言伪类**:

   - `:lang(language)`：选择指定语言的元素。

5. **UI元素状态伪类**:
   - `:checked`、`:disabled`等，根据表单元素的状态来选择元素。

### 伪元素选择器

1. **`::before`和`::after`**:

   - 在元素内容的前面或后面插入内容。

2. **`::first-line`和`::first-letter`**:

   - 选择元素的第一行或第一个字母。

3. **`::selection`**:
   - 选择用户选中的文本部分。

### 优先级（Specificity）

CSS选择器的优先级决定了当多个选择器应用于同一个元素时，哪些样式会被应用。优先级是根据选择器中不同类型的选择器计算得出的。以下是选择器优先级的一般规则，从高到低：

1. **内联样式**（在HTML元素的`style`属性中定义的样式）：最高优先级。
2. **ID选择器**：优先级较高。
3. **类选择器、伪类选择器和属性选择器**：优先级中等。
4. **类型选择器和伪元素选择器**：优先级较低。
5. **通用选择器**（`*`）、组合符（`>`, `+`, `~`, ` `）和否定伪类（`:not()`）：不影响优先级。

优先级可以通过计算选择器中各个类型的数量来确定。通常，可以将其表示为四个部分的“优先级得分”：`(内联样式数, ID选择器数, 类/伪类/属性选择器数, 类型选择器/伪元素选择器数)`。例如：

- 内联样式：`(1,0,0,0)`
- `#id1.class1`: `(0,1,1,0)`
- `div p`: `(0,0,0,2)`

当两个选择器作用于同一个元素时，具有更高优先级得分的选择器将覆盖具有较低得分的选择器的样式。

如果优先级相同，则最后出现的样式规则将被应用。此外，`!important`声明可以覆盖上述所有规则，但应谨慎使用，因为它可能导致样式难以维护。
