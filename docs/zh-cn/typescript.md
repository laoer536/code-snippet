---
title: 'typescript'
---

# TypeScript

## 追加`.d.ts`声明文件

### Commonjs

```js
// index.js
module.exports = cloneDeep
```

```ts
// index.d.ts
declare function cloneDeep<T>(value: T): T
export = cloneDeep
```

```js
// index.js
module.exports = { cloneDeep }
```

```ts
// index.d.ts
declare function cloneDeep<T>(value: T): T
interface CloneDeepModule {
  cloneDeep: typeof cloneDeep
}
declare const cloneDeepModule: CloneDeepModule
export = cloneDeepModule
```

### ES module

```js
// index.js
export function myFunction(param) {
  // ...
}
export default function defaultFunction(param) {
  // ...
}
```

```ts
// index.d.ts
export function myFunction(param: string): number
export default function defaultFunction(param: number): string
```

## 给第三方库增加类型声明

如果你想给第三方库的某个函数增加类型声明，你可以通过几种不同的方法来实现。以下是一些常见的方法：

1. **使用模块扩展（Module Augmentation）**:
   如果第三方库的类型声明不完整或者你想要添加额外的类型信息，你可以使用模块扩展来增加或修改现有的类型声明。

   假设你想为名为 `some-library` 的第三方库的 `someFunction` 函数添加类型声明，你可以创建一个自定义的声明文件（比如 `some-library.d.ts`），并在其中扩展模块：

   ```typescript
   // some-library.d.ts

   import 'some-library'

   declare module 'some-library' {
     function someFunction(arg1: string, arg2: number): boolean
   }
   ```

   确保这个声明文件被包含在你的 TypeScript 项目中。

2. **使用声明合并（Declaration Merging）**:
   如果第三方库已经有了类型声明，但你需要对其进行扩展或修改，你可以使用声明合并。这通常是通过在一个 `.d.ts` 文件中重复声明同一个模块或接口来实现的。

   ```typescript
   // some-library.d.ts

   declare module 'some-library' {
     export function someFunction(arg1: string, arg2: number): boolean
   }
   ```

3. **为整个模块提供新的声明**:
   如果第三方库没有类型声明，或者你想完全替换现有的声明，你可以为整个模块提供新的声明。

   ```typescript
   // some-library.d.ts

   declare module 'some-library' {
     export function someFunction(arg1: string, arg2: number): boolean
     // ...其他函数和类型声明
   }
   ```

4. **使用 DefinitelyTyped (@types) 包**:
   对于许多流行的 JavaScript 库，DefinitelyTyped 社区已经提供了类型声明。你可以通过安装对应的 `@types` 包来获取这些声明。

   ```shell
   npm install --save-dev @types/some-library
   ```

   如果 `@types` 包中的声明不完整或者有错误，你可以通过上述方法对其进行扩展或修正。

5. **贡献到 DefinitelyTyped**:
   如果你认为你的类型声明对其他人也有用，你可以考虑贡献你的类型声明到 DefinitelyTyped 仓库。这样，其他使用相同库的开发者也可以受益于你的工作。

在使用这些方法时，请确保遵循 TypeScript 的模块解析规则，以便你的声明文件能够被正确地识别和使用。此外，如果你在一个项目中使用了自定义的类型声明，最好在项目的文档中说明这一点，以便其他开发者了解如何处理类型声明。

## type VS interface

在TypeScript中，`type` 和 `interface` 都可以用来定义对象的形状或者函数签名，但它们在某些方面有所不同。下面是它们的主要区别以及对应的代码示例：

1. **扩展性**:

   - `interface` 是可扩展的，可以通过声明相同名称的 `interface` 来扩展已有的 `interface`。
   - `type` 是不可扩展的，但可以通过交叉类型（`&`）来组合现有的类型。

2. **合并声明**:

   - `interface` 可以自动合并多个同名声明。
   - `type` 不能自动合并，需要手动通过交叉类型来合并。

3. **计算属性**:

   - `type` 可以使用计算属性（使用 `[]` 包裹的表达式）。
   - `interface` 不能使用计算属性。

4. **使用场景**:
   - `interface` 更适合定义公共 API 的形状，因为它们更易于扩展和实现。
   - `type` 更适合定义联合类型或元组类型，以及当你需要使用计算属性或其他类型操作时。

下面是一些代码示例来展示这些区别：

**Interface 示例**:

```typescript
// 定义一个接口
interface Person {
  name: string
  age: number
}

// 扩展接口
interface Employee extends Person {
  salary: number
}

// 合并声明
interface Person {
  gender: string
}

// 使用合并后的接口
const employee: Employee = {
  name: 'Alice',
  age: 30,
  salary: 50000,
  gender: 'female',
}
```

**Type 示例**:

```typescript
// 定义一个类型
type Animal = {
  species: string
}

// 使用交叉类型来扩展类型
type Pet = Animal & {
  name: string
}

// 使用计算属性
type Keys = 'option1' | 'option2'
type Flags = {
  [K in Keys]: boolean
}

// 使用类型
const pet: Pet = {
  species: 'dog',
  name: 'Rex',
}

const flags: Flags = {
  option1: true,
  option2: false,
}
```

在实际开发中，你可以根据具体的需求和场景来选择使用 `interface` 或 `type`。如果你需要定义一个可能会被其他声明扩展或实现的对象类型，那么 `interface` 是一个更好的选择。如果你需要定义联合类型、元组类型或者你需要使用类型操作（如映射类型），那么 `type` 是更合适的选择。

## 函数重载

在TypeScript中，函数重载允许你为同一个函数提供多个函数类型定义。这意味着你可以有多个同名函数，但是它们的参数类型或数量不同。当调用这个函数时，TypeScript会根据提供的参数类型和数量来决定使用哪个重载。

需要注意的是，TypeScript中的函数重载是通过在函数实现之前声明函数签名来实现的。这些签名是函数重载的列表，而实际的函数实现不计入重载列表。函数实现本身必须兼容所有的重载签名。

下面是一个函数重载的例子：

```typescript
function add(a: number, b: number): number // 重载签名1
function add(a: string, b: string): string // 重载签名2
function add(a: any, b: any): any {
  // 函数实现
  return a + b
}

let result1 = add(1, 2) // 调用重载签名1，result1的类型为number
let result2 = add('Hello, ', 'world!') // 调用重载签名2，result2的类型为string

// 下面的调用将会产生错误，因为没有匹配的重载签名
// let result3 = add(1, "test"); // Error: No overload matches this call.
```

在上面的例子中，我们定义了一个名为`add`的函数，它有两个重载签名。第一个签名接受两个`number`类型的参数，第二个签名接受两个`string`类型的参数。函数实现接受任意类型的参数，并返回它们的和。当我们调用`add`函数时，TypeScript会根据传入参数的类型来决定使用哪个重载签名。

需要注意的是，函数实现的参数类型通常使用`any`类型来确保兼容所有的重载签名。然而，使用`any`类型会失去类型安全性，因此在实现中应该尽量进行类型检查，以确保函数行为正确。

函数重载在编写通用函数或者API时非常有用，它可以提供更清晰的类型信息，从而使得函数调用更加安全和直观。

## 内置类型

TypeScript提供了多种内置类型，以下是一些常用的内置类型及其代码示例：

1. **布尔值（Boolean）**:

```typescript
let isDone: boolean = false
```

2. **数字（Number）**:

```typescript
let decimal: number = 6
let hex: number = 0xf00d
let binary: number = 0b1010
let octal: number = 0o744
```

3. **字符串（String）**:

```typescript
let color: string = 'blue'
color = 'red'
```

4. **数组（Array）**:

```typescript
let list: number[] = [1, 2, 3]
// 或者使用泛型数组类型
let list: Array<number> = [1, 2, 3]
```

5. **元组（Tuple）**:

```typescript
let x: [string, number]
x = ['hello', 10] // OK
// x = [10, "hello"]; // Error
```

6. **枚举（Enum）**:

```typescript
enum Color {
  Red,
  Green,
  Blue,
}
let c: Color = Color.Green
```

7. **任意类型（Any）**:

```typescript
let notSure: any = 4
notSure = 'maybe a string instead'
notSure = false // okay, definitely a boolean
```

8. **Void**:

```typescript
function warnUser(): void {
  console.log('This is my warning message')
}
```

9. **Null 和 Undefined**:

```typescript
let u: undefined = undefined
let n: null = null
```

10. **Never**:

```typescript
// 返回never的函数必须存在无法达到的终点
function error(message: string): never {
  throw new Error(message)
}
```

11. **Object**:

```typescript
declare function create(o: object | null): void
create({ prop: 0 }) // OK
create(null) // OK
// create(42); // Error
// create("string"); // Error
```

12. **类型断言（Type Assertions）**:

```typescript
let someValue: any = 'this is a string'
let strLength: number = (<string>someValue).length
// 或者使用as语法
let strLength: number = (someValue as string).length
```

13. **联合类型（Union）**:

```typescript
let multiType: number | string
multiType = 20 // OK
multiType = 'twenty' // OK
// multiType = false; // Error
```

14. **交叉类型（Intersection）**:

```typescript
interface A {
  a: number
}
interface B {
  b: string
}
let ab: A & B = { a: 1, b: 'string' }
```

15. **字面量类型（Literal Types）**:

```typescript
let literal: 'hello' | 'world'
literal = 'hello' // OK
// literal = "anything else"; // Error
```

16. **可选类型（Optional Types）**:

```typescript
function buildName(firstName: string, lastName?: string) {
  // ...
}
```

17. **只读类型（Readonly）**:

```typescript
interface Point {
  readonly x: number
  readonly y: number
}
let p1: Point = { x: 10, y: 20 }
// p1.x = 5; // Error, x is readonly
```

18. **索引类型（Index Types）**:

```typescript
interface StringArray {
  [index: number]: string
}
let myArray: StringArray
myArray = ['Bob', 'Fred']
let myStr: string = myArray[0]
```

19. **映射类型（Mapped Types）**:

```typescript
type Readonly<T> = {
  readonly [P in keyof T]: T[P]
}
type Partial<T> = {
  [P in keyof T]?: T[P]
}
```

20. **条件类型（Conditional Types）**:

```typescript
type Check<T> = T extends string ? boolean : number
type Type = Check<string> // Type is boolean
type Type = Check<number> // Type is number
```

20. **泛型（Conditional Types）**:

```typescript
function identity<T>(arg: T): T {
  return arg
}
let output = identity<string>('myString')
```

这些是TypeScript中的一些常用的内置类型。需要注意的是，TypeScript还有更多高级类型，如泛型、类型守卫、类型推断等，这些类型可以帮助你构建更加健壮和灵活的代码。

## 工具类型

了解了，您所指的高级类型是TypeScript中的一些内置的工具类型（Utility Types），这些类型可以用来转换其他类型。以下是一些常用的工具类型及其代码示例：

1. **Partial\<T>**:
   使类型 `T` 的所有属性变为可选的。

   ```typescript
   interface Todo {
     title: string
     description: string
   }

   function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
     return { ...todo, ...fieldsToUpdate }
   }

   const todo1: Todo = {
     title: 'organize desk',
     description: 'clear clutter',
   }

   const todo2 = updateTodo(todo1, {
     description: 'throw out trash',
   })
   ```

2. **Required\<T>**:
   使类型 `T` 的所有属性变为必选的。

   ```typescript
   interface Props {
     a?: number
     b?: string
   }

   const obj: Required<Props> = { a: 5, b: 'string' } // OK
   // const obj2: Required<Props> = { a: 5 }; // Error: Property 'b' is missing
   ```

3. **Readonly\<T>**:
   使类型 `T` 的所有属性变为只读的。

   ```typescript
   interface Todo {
     title: string
   }

   const todo: Readonly<Todo> = {
     title: 'Delete inactive users',
   }

   // todo.title = "Hello"; // Error: title is readonly
   ```

4. **Record<K, T>**:
   构造一个对象类型，其属性键为 `K`，属性值为 `T`。

   ```typescript
   interface PageInfo {
     title: string
   }

   type Page = 'home' | 'about' | 'contact'

   const x: Record<Page, PageInfo> = {
     home: { title: 'Home' },
     about: { title: 'About' },
     contact: { title: 'Contact' },
   }
   ```

5. **Pick\<T, K>**:
   从类型 `T` 中挑选一组属性 `K`。

   ```typescript
   interface Todo {
     title: string
     description: string
     completed: boolean
   }

   type TodoPreview = Pick<Todo, 'title' | 'completed'>

   const todo: TodoPreview = {
     title: 'Clean room',
     completed: false,
   }
   ```

6. **Omit\<T, K>**:
   从类型 `T` 中排除一组属性 `K`。

   ```typescript
   interface Todo {
     title: string
     description: string
     completed: boolean
   }

   type TodoPreview = Omit<Todo, 'description'>

   const todo: TodoPreview = {
     title: 'Clean room',
     completed: false,
   }
   ```

7. **Exclude\<T, U>**:
   从类型 `T` 中排除可以赋值给 `U` 的类型。

   ```typescript
   type T0 = Exclude<'a' | 'b' | 'c', 'a'> // "b" | "c"
   ```

8. **Extract\<T, U>**:
   提取类型 `T` 中可以赋值给 `U` 的类型。

   ```typescript
   type T0 = Extract<'a' | 'b' | 'c', 'a' | 'f'> // "a"
   ```

9. **NonNullable\<T>**:
   从类型 `T` 中排除 `null` 和 `undefined`。

   ```typescript
   type T0 = NonNullable<string | number | undefined> // string | number
   ```

10. **ReturnType\<T>**:
    获取函数类型 `T` 的返回类型。

    ```typescript
    type T0 = ReturnType<() => string> // string
    ```

11. **InstanceType\<T>**:
    获取构造函数类型 `T` 的实例类型。

    ```typescript
    class C {
      x = 0
      y = 0
    }

    type T0 = InstanceType<typeof C> // C
    ```

12. **Parameters\<T>**:
    获取函数类型 `T` 的参数类型组成的元组类型。
    ```typescript
    type T0 = Parameters<(s: string, b: boolean) => void> // [string, boolean]
    ```

这些工具类型是TypeScript标准库中定义的一部分，可以在TypeScript的官方文档中找到更多的工具类型。使用这些工具类型可以帮助你更灵活地操作类型。

## infer

在TypeScript中，`infer` 关键字用于在条件类型中推断类型变量。它通常用在泛型类型的上下文中，允许你在条件类型的 `true` 分支中捕获类型，而不必显式地传递这个类型。这使得你可以编写更灵活和可重用的类型函数。

以下是一些使用 `infer` 关键字的示例：

1. **推断函数返回类型**:

```typescript
type ReturnType<T> = T extends (...args: any[]) => infer R ? R : any

// 使用ReturnType推断函数的返回类型
function getString() {
  return 'Hello, TypeScript'
}

type FunctionReturnType = ReturnType<typeof getString> // string
```

2. **推断函数参数类型**:

```typescript
type Parameters<T> = T extends (...args: infer P) => any ? P : never

// 使用Parameters推断函数的参数类型
function greet(name: string, age: number) {
  return `Hello, ${name}! You are ${age} years old.`
}

type FunctionParameters = Parameters<typeof greet> // [string, number]
```

3. **推断构造函数参数类型**:

```typescript
type ConstructorParameters<T> = T extends new (...args: infer P) => any
  ? P
  : never

// 使用ConstructorParameters推断构造函数的参数类型
class Person {
  constructor(
    public name: string,
    public age: number,
  ) {}
}

type PersonConstructorParameters = ConstructorParameters<typeof Person> // [string, number]
```

4. **推断数组元素类型**:

```typescript
type ElementType<T> = T extends (infer E)[] ? E : never

// 使用ElementType推断数组的元素类型
type ArrayElement = ElementType<number[]> // number
```

5. **推断Promise解析的类型**:

```typescript
type Unpacked<T> =
  T extends Promise<infer U>
    ? U
    : T extends Array<infer U>
      ? U
      : T extends (...args: any[]) => infer U
        ? U
        : T extends PromiseLike<infer U>
          ? U
          : T

// 使用Unpacked推断Promise解析的类型
type ResolvedType = Unpacked<Promise<string>> // string
```

6. **推断元组类型中的元素**:

```typescript
type FirstElement<T> = T extends [infer F, ...any[]] ? F : never

// 使用FirstElement推断元组的第一个元素类型
type TupleFirstElement = FirstElement<[string, number, boolean]> // string
```

7. **推断对象属性类型**:

```typescript
type PropertyType<T, K extends keyof T> = T[K] extends infer P ? P : never

// 使用PropertyType推断对象属性的类型
type Obj = { a: number; b: string; c: boolean }
type PropertyAType = PropertyType<Obj, 'a'> // number
```

`infer` 关键字的强大之处在于它提供了一种声明性的方式来捕获和使用类型信息，而不需要显式地在泛型或函数中传递类型参数。这使得类型定义更加简洁和可维护。

## 泛型

TypeScript中的泛型（Generics）是一种强大的特性，它允许你在定义函数、类、接口或类型别名时创建可重用的组件，而不必预先指定具体的类型。泛型提供了一种方法来确保类型的一致性，同时保持类型的灵活性。

以下是一些使用泛型的示例：

1. **泛型函数**:
   创建一个泛型函数，该函数可以接受任何类型的参数，并返回该类型的值。

   ```typescript
   function identity<T>(arg: T): T {
     return arg
   }

   let output1 = identity<string>('myString')
   let output2 = identity<number>(42)
   ```

2. **泛型接口**:
   定义一个泛型接口，该接口可以用于不同类型的数据。

   ```typescript
   interface GenericIdentityFn<T> {
     (arg: T): T
   }

   function identity<T>(arg: T): T {
     return arg
   }

   let myIdentity: GenericIdentityFn<number> = identity
   ```

3. **泛型类**:
   创建一个泛型类，该类的属性或方法可以使用泛型类型。

   ```typescript
   class GenericNumber<T> {
     zeroValue: T
     add: (x: T, y: T) => T
   }

   let myGenericNumber = new GenericNumber<number>()
   myGenericNumber.zeroValue = 0
   myGenericNumber.add = function (x, y) {
     return x + y
   }
   ```

4. **泛型约束**:
   通过定义一个接口来约束泛型类型必须具有某些属性。

   ```typescript
   interface Lengthwise {
     length: number
   }

   function loggingIdentity<T extends Lengthwise>(arg: T): T {
     console.log(arg.length) // Now we know it has a .length property
     return arg
   }

   loggingIdentity({ length: 10, value: 3 })
   ```

5. **在泛型约束中使用类型参数**:
   使用类型参数本身作为约束的一部分。

   ```typescript
   function getProperty<T, K extends keyof T>(obj: T, key: K) {
     return obj[key]
   }

   let x = { a: 1, b: 2, c: 3, d: 4 }

   getProperty(x, 'a') // okay
   // getProperty(x, "m"); // error: Argument of type '"m"' isn't assignable to '"a" | "b" | "c" | "d"'.
   ```

6. **使用类类型的泛型**:
   在泛型中使用类类型，允许你创建工厂函数等。

   ```typescript
   function create<T>(c: { new (): T }): T {
     return new c()
   }

   class BeeKeeper {
     hasMask: boolean = true
   }

   class ZooKeeper {
     nametag: string = 'Mikle'
   }

   class Animal {
     numLegs: number = 4
   }

   class Bee extends Animal {
     keeper: BeeKeeper = new BeeKeeper()
   }

   class Lion extends Animal {
     keeper: ZooKeeper = new ZooKeeper()
   }

   function findKeeper<A extends Animal, K>(a: {
     new (): A
     prototype: { keeper: K }
   }): K {
     return a.prototype.keeper
   }

   let lionKeeper = findKeeper(Lion) // typechecks!
   ```

泛型是TypeScript中的一个核心概念，它们在实际开发中非常有用，特别是在创建高度可重用的组件和库时。通过使用泛型，你可以编写出更加灵活和可维护的代码。

## 泛型VS`infer`

泛型（Generics）和 `infer` 关键字都是TypeScript中用于增强类型系统的高级特性，但它们的用途和工作方式有所不同。下面是它们之间的一些比较：

### 泛型 (Generics)

- **定义时的灵活性**：泛型允许在定义函数、类、接口或类型别名时不指定具体的类型，而是允许使用者在使用时指定类型。
- **类型参数化**：泛型提供了一种参数化类型的方法，这意味着你可以定义一个或多个类型变量，然后在整个定义中使用这些类型变量。
- **类型重用**：泛型可以帮助创建可重用的代码组件，这些组件可以适用于多种类型而不失去类型安全性。
- **类型约束**：泛型可以通过使用 `extends` 关键字来约束类型变量，以确保类型具有特定的结构或属性。

泛型示例：

```typescript
function identity<T>(arg: T): T {
  return arg
}

let output = identity<string>('Hello, TypeScript')
```

### Infer 关键字

- **类型推断**：`infer` 关键字用于在条件类型中声明一个类型变量，然后在条件类型的真分支中推断该类型变量的类型。
- **内部类型捕获**：`infer` 通常用于捕获函数返回类型、元组类型、Promise解析类型等内部类型，而不需要显式地传递这些类型。
- **条件类型**：`infer` 只能在条件类型的上下文中使用，它是条件类型的一部分，用于在满足某个条件时推断类型。
- **类型操作**：`infer` 常用于类型操作和转换，如在类型工具（Utility Types）中定义复杂的类型转换逻辑。

`infer` 示例：

```typescript
type ReturnType<T> = T extends (...args: any[]) => infer R ? R : any

type FunctionReturnType = ReturnType<() => string> // 推断出 string
```

### 比较

- **使用场景**：泛型通常用于定义时的类型参数化，而 `infer` 用于条件类型中的类型推断。
- **目的**：泛型的目的是提供通用性和可重用性，而 `infer` 的目的是在类型系统内部捕获和操作类型。
- **语法**：泛型使用尖括号 `<T>` 来定义类型变量，而 `infer` 用于条件类型表达式中，如 `T extends infer U ? X : Y`。

总的来说，泛型和 `infer` 关键字都是TypeScript类型系统中的高级特性，它们在不同的上下文中提供了类型的灵活性和强大的类型操作能力。泛型在定义可重用组件时非常有用，而 `infer` 在进行类型推断和类型操作时非常有用。

## declare

在TypeScript中，`declare`关键字用于告诉TypeScript编译器某个变量、函数、类或模块的类型声明是存在的，但其实现或定义是在其他地方。这通常用于描述已经存在的JavaScript代码的类型，比如当你使用第三方库或者是一个旧的项目时。`declare`关键字可以用于变量、函数、类、接口、类型别名、模块等。

以下是一些使用`declare`的例子：

### 1. 声明全局变量

如果你的JavaScript代码中有全局变量，你可以使用`declare`来告诉TypeScript这个变量的类型。

```typescript
// 假设在全局作用域有一个变量myGlobalVar
declare var myGlobalVar: string

// 现在你可以在TypeScript中安全地使用这个变量
console.log(myGlobalVar.toLowerCase())
```

### 2. 声明模块

当你使用非TypeScript编写的模块时，你可以声明模块及其类型。

```typescript
// 假设有一个名为"my-module"的第三方JavaScript模块
declare module 'my-module' {
  export function myModuleFunction(): void
}

// 现在你可以在TypeScript中导入并使用这个模块
import { myModuleFunction } from 'my-module'
myModuleFunction()
```

### 3. 声明函数

如果你有一个在其他地方定义的函数，你可以使用`declare`来定义它的类型。

```typescript
// 假设在全局作用域有一个函数myGlobalFunction
declare function myGlobalFunction(a: number): number

// 现在你可以在TypeScript中安全地使用这个函数
let result = myGlobalFunction(10)
```

### 4. 声明类

当你想在TypeScript中使用一个JavaScript类时，你可以声明它的类型。

```typescript
// 假设在全局作用域有一个类MyGlobalClass
declare class MyGlobalClass {
  constructor(s: string)
  public myMethod(a: number): number
}

// 现在你可以在TypeScript中创建这个类的实例并使用它
let myInstance = new MyGlobalClass('hello')
let result = myInstance.myMethod(10)
```

### 5. 声明命名空间

如果你的JavaScript代码使用了命名空间，你可以使用`declare`来描述它。

```typescript
// 假设有一个全局的命名空间MyNamespace
declare namespace MyNamespace {
  function namespaceFunction(): void
}

// 现在你可以在TypeScript中使用这个命名空间及其函数
MyNamespace.namespaceFunction()
```

使用`declare`是TypeScript中的一个高级特性，它允许你在不改变现有代码的情况下，为JavaScript代码提供类型信息。这对于渐进式地将一个大型JavaScript项目迁移到TypeScript非常有用。

## `.d.ts`文件

在TypeScript中，`.d.ts`文件是一个类型声明文件，它包含了用来描述JavaScript代码结构的类型信息。这些文件通常不包含实现代码，而只包含用于类型检查的类型声明。`.d.ts`文件的主要作用是为已存在的JavaScript代码提供类型定义，这样TypeScript编译器就可以理解JavaScript代码的结构，并提供类型检查和代码提示功能。

`.d.ts`文件的使用场景包括：

1. 当你使用第三方JavaScript库时，可以通过`.d.ts`文件为这些库提供类型定义。
2. 当你在TypeScript项目中使用纯JavaScript代码时，可以通过`.d.ts`文件为这些代码提供类型定义。
3. 当你想创建一个可重用的类型定义时，可以将其放在`.d.ts`文件中。

以下是一些`.d.ts`文件的例子：

### 1. 为第三方JavaScript库提供类型定义

假设你正在使用一个名为`awesome-library`的第三方JavaScript库，但这个库没有提供TypeScript类型定义。你可以创建一个名为`awesome-library.d.ts`的文件来声明这个库的类型。

```typescript
// awesome-library.d.ts
declare module 'awesome-library' {
  export function awesomeMethod(param: string): void
  export class AwesomeClass {
    constructor(options: { [key: string]: any })
    doSomething(): number
  }
}
```

然后，在TypeScript文件中，你可以像使用TypeScript模块一样导入并使用这个库：

```typescript
// 使用awesome-library的TypeScript文件
import { awesomeMethod, AwesomeClass } from 'awesome-library'

awesomeMethod('Hello, world!')
let instance = new AwesomeClass({ someOption: true })
let result = instance.doSomething()
```

### 2. 为全局变量或函数提供类型定义

如果你的网页中通过`<script>`标签引入了一个全局库，你可以创建一个`.d.ts`文件来声明全局变量或函数的类型。

```typescript
// globals.d.ts
declare var myGlobalVar: string
declare function myGlobalFunction(param: number): boolean
```

在TypeScript代码中，你可以直接使用这些全局变量或函数，编译器会根据`.d.ts`文件中的声明进行类型检查。

```typescript
// 使用全局变量和函数的TypeScript文件
console.log(myGlobalVar.toUpperCase())
let isValid = myGlobalFunction(42)
```

### 3. 为现有的JavaScript项目提供类型定义

如果你正在将一个现有的JavaScript项目迁移到TypeScript，你可以逐步为项目中的JavaScript文件创建对应的`.d.ts`文件，以便在不改变原有代码的情况下引入类型检查。

```typescript
// existing-module.d.ts
declare module 'existing-module' {
  export function existingFunction(param: number): string
}
```

在TypeScript代码中，你可以像使用TypeScript模块一样导入并使用这个现有模块：

```typescript
// 使用existing-module的TypeScript文件
import { existingFunction } from 'existing-module'

let result = existingFunction(123)
```

`.d.ts`文件是TypeScript生态系统中的一个重要组成部分，它们使得TypeScript能够与现有的JavaScript代码库无缝协作。许多流行的JavaScript库都有相应的`.d.ts`类型声明文件，这些文件通常可以通过DefinitelyTyped项目或者包管理器（如npm）获得。

## `.d.ts`文件中的类型声明未全局生效原因排查
在TypeScript中，`.d.ts`文件中的类型声明不会自动地在全局范围内生效。这是因为TypeScript使用模块系统来组织代码，而在模块系统中，每个文件都被视为一个独立的模块作用域。当你在`.d.ts`文件中声明类型时，这些类型默认是局部于该文件的，除非你明确地将它们声明为全局的。

以下是一些可能导致`.d.ts`文件中的类型不在全局生效的原因：

### 1. 模块化声明
如果在`.d.ts`文件中使用了模块化的声明（例如使用`export`关键字），那么这些声明只在模块内部有效。要在其他文件中使用这些类型，你需要使用`import`语句来导入它们。

```typescript
// some-module.d.ts
export interface SomeInterface {
    // ...
}

// other-file.ts
import { SomeInterface } from './some-module';
```

### 2. 文件被视为模块
当`.d.ts`文件中包含顶层的`import`或`export`语句时，该文件被视为一个模块。在这种情况下，所有的声明都是模块作用域的，而不是全局的。

### 3. 没有使用全局声明
如果你想要在`.d.ts`文件中声明全局类型，你需要使用`declare global`块来包裹这些声明。

```typescript
// global-types.d.ts
declare global {
    interface Window {
        myGlobalFunction: () => void;
    }
}

// 由于使用了declare global，现在myGlobalFunction在全局Window对象上可用
window.myGlobalFunction();
```

### 4. 文件没有被包含在编译中
如果`.d.ts`文件没有被TypeScript编译器包含在编译过程中，那么其中的声明也不会生效。确保`.d.ts`文件被包含在`tsconfig.json`的`files`、`include`或`references`选项中。

```json
{
    "include": [
        "src/**/*",
        "typings/**/*.d.ts"
    ]
}
```

### 5. 与其他类型声明冲突
如果`.d.ts`文件中的全局声明与项目中其他地方的声明冲突，可能会导致类型错误或者被覆盖。

为了确保`.d.ts`文件中的类型在全局生效，你需要检查上述各点，并确保全局声明是正确的，并且被编译器正确地包含在项目中。如果你的意图是创建模块化的类型声明，那么你应该使用`import`和`export`来管理这些类型的可见性。

## `.d.ts`和`declare`的区别

`.d.ts`文件和`declare`关键字在TypeScript中都用于声明类型，但它们的用途和上下文有所不同。

### .d.ts文件

`.d.ts`文件是一个类型声明文件，它的主要作用是包含一组类型声明，这些声明可以是变量、函数、类、接口等。`.d.ts`文件通常用于以下场景：

- 为已存在的JavaScript库提供类型定义，使得TypeScript用户可以在类型安全的环境中使用这些库。
- 在TypeScript项目中，编译器会自动生成`.d.ts`文件，这些文件可以作为库的公共API的类型定义，供其他TypeScript项目使用。
- 当你在TypeScript项目中使用JavaScript代码时，`.d.ts`文件可以用来声明这些JavaScript代码的类型，以便TypeScript编译器能够理解和检查它们。

`.d.ts`文件中的声明通常不需要`declare`关键字，因为在这个上下文中，所有的声明默认都是类型声明，不包含实现。

### declare关键字

`declare`关键字用于在TypeScript代码中声明变量、函数、类、接口等的类型，而不提供具体的实现。`declare`关键字的主要作用是：

- 告诉TypeScript编译器某个实体的类型信息，而实体的实现是在其他地方（比如在一个JavaScript文件中）。
- 在`.ts`文件中声明全局变量、模块、类等的类型，这些可能是由第三方JavaScript代码提供的，或者是在当前TypeScript项目之外定义的。

使用`declare`关键字的声明可以出现在`.ts`文件或`.d.ts`文件中。在`.ts`文件中，`declare`关键字用于告诉编译器这是一个仅用于类型检查的声明，不会生成JavaScript代码。在`.d.ts`文件中，`declare`关键字是可选的，因为`.d.ts`文件本身就是用于声明类型的。

### 总结

- `.d.ts`文件是一个容器，用于存放TypeScript的类型声明。
- `declare`关键字是一个修饰符，用于在TypeScript代码中声明一个类型，而不定义实现。

下面是一个简单的例子来说明它们的区别：

```typescript
// example.d.ts
// 这是一个.d.ts文件，它包含了一个模块的类型声明
declare module 'example' {
  export function doSomething(): void
}

// example.ts
// 这是一个.ts文件，它使用declare关键字声明了一个全局变量
declare var globalVar: string

// 使用globalVar的TypeScript代码
console.log(globalVar)
```

在这个例子中，`example.d.ts`文件为`example`模块提供了类型声明，而`example.ts`文件中使用`declare`关键字声明了一个全局变量`globalVar`的类型。
