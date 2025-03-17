---
title: "Epic React: React Fundamentals"
subtitle: "Notes I've taken while learning React Fundamentals from Epic React by Kent C. Dodds."
date: "March 14th, 2025"
tags: "react epic-react react-fundamentals"
---

<section>
# 👋🏻 Hello World in JS

- When you load a webpage, the browser <span>takes the HTML and generates the DOM out of it</span> (basically a structured version of your page that JavaScript can manipulate).
- JavaScript can then interact with the DOM to make the page **dynamic**: things like updating content, handling user input or adding animations.
- Modern JavaScript frameworks, like React, takes this a step further. Instead of writing all the HTML manually, they generate the DOM programmatically. This makes things more flexible, but also means the browser has to do a bit more work: parsing JavaScript, creating and updating the DOM, etc. That's why hybrid approaches are so popular.
- With React, we can <span>generate the HTML on the server and then use the same React code to add interactivity on the client</span> (Remix makes this easier)
- That said, having a basic understanding of how JavaScript creates and interacts with DOM elements is super useful - it helps you see what's happening under the hood in frameworks like React.

Here's a simple example of manually creating and adding an element to the page using plain JavaScript:

```html
<html>
  <body>
    <div id="root"></div>
    <script type="module">
      const rootDiv = document.getElementById("root");
      const div = document.createElement("div");
      div.className = "container";
      div.textContent = "Hello World!";
      rootDiv.append(div);
    </script>
  </body>
</html>
```

</section>
<section>
# ⚛️ Raw React APIs

**React** is the most popular frontend framework, and at its core, it still <span>uses the same DOM APIs that the browser provides.</span>
<br>
The difference? React abstracts away the low-level, step-by-step **imperative** way of updating the DOM and gives you a **declarative** API to work with - so you can focus on what you want instead of how to do it.

React <span>supports multiple platforms</span> (native mobile, desktop, web, terminal, VR), each with its own way of interacting with the platform.

Under the hood, React is split into two main parts:

- `React`: handles creating React elements
- `ReactDOM`: takes those elements and renders them into the DOM

Most of the time, we install these from **npm**, which is a centralized repository where developers can publish and share reusable code.

Here's a simple example of how React works behind the scenes:

```html
<script type="module">
  import { createElement } from "/react.js";
  import { createRoot } from "/react-dom/client.js";
  const rootElement = document.getElementById("root");
  const props = { className: "container", children: "Hello World" };
  const element = createElement("div", props);
  const root = createRoot(rootElement);
  root.render(element);
</script>
```

`render` takes the React elements, turns them into real DOM nodes and adds them to the page.

In React we use:

- **props** (short for properties) to <span> pass data into our components.</span>

- **children**: a special prop, which <span>represents the content inside an element</span>.

We can specify children in different ways:

- as a prop
- as multiple arguments to `createElement`
- as an array

```js
// as multiple arguments to createElement
const reactElement = createElement("div", props, "Hello", " ", "World");
// as an array of children
const children = ["Hello", " ", "World"];
const anotherReactElement = createElement("div", props, children);
```

</section>
<section>
# 👩🏻‍💻 Using JSX

- JSX makes writing React components much easier compared to using raw React APIs.
- It looks a lot like HTML, making it more readable and intuitive.
- But there's a catch - JSX isn't actually JavaScript, so browsers don't understand it. That's why **Babel** comes in to convert JSX into regular JavaScript before your code runs.

```jsx
const element = <h1 id="greeting">Hey there</h1>;
// gets converted to JavaScript code:
const element = createElement("h1", { id: "greeting", children: "Hey there" });
```

When using JSX, the compiler translates JSX elements into `React.createElement` calls, which means we need to import React for it to work:

```js
import * as React from "/react";
```

This gives us access to all of React's API under the `React` namespace.

Sometimes we need to insert JavaScript inside our JSX. We do this using curly braces `{}` - kind of opening a window to JavaScript inside of our markup.

```js
// template literal in JavaScript
const greeting = 'Sup'
const subject = 'World'
const message: `${greeting} ${subject}`

// inserting dynamic values in JSX
const name = 'Flor'
const element = <h1>Hello, {name}!</h1>
```

JSX also lets us **spread props** using the spread syntax `...`. This is useful when forwarding props without explicitly listing them out:

```jsx
const props = {
  children: "Hello World",
  className: "container",
};
// this spreads all props onto the div
element = <div {...props}></div>;
```

If you define props after the spread, they'll override the ones inside `props`

Normally, if you return multiple elements from a component, you need to wrap them in a `<div>`. But that adds unnecessary markup that could mess with your styling or layout.

**React Fragments** let you group elements without adding an extra DOM node.

```jsx
const element = <React.Fragment>this is in a fragment</React.Fragment>;
```

This helps keep your markup clean while avoiding unnecessary wrapper elements.

</section>

<section>
# 🎨 Custom Components
In regular JavaScript, when you want to reuse code, you write functions. React works the same way - except instead of returning values, React functions return JSX.
These functions are called **components**.

A React component is just a function that takes in an object called `props` and returns something **renderable** (JSX, a string, `null`, etc.)
Here's a simple example:

```jsx
function Greeting(props) {
  return <h1>Hello, {props.name}</h1>;
}
// now we can use it:
<Greeting name="Flor" />;
```

Under the hood, React treats components just like regular functions. When using `createElement`, you can pass a function instead of an HTML tag:

```js
createElement(someFunction, { prop: value }, child1, child2);
```

React will call `someFunction` when it needs to render it on the page. The `props` object includes any attributes and children you pass:

```jsx
function someFunction(props) {
  console.log(props.children); // ['child1', 'child2'],
  console.log(props.prop); // value
  return <div>{props.children}</div>; // some JSX
}
```

When writing JSX, we need a way to tell Babel how to compile it so React knows which function to call. We do this by using the function name capitalized:

```jsx
<SomeFunction prop={value}>[child1, child2]</SomeFunction>
```

React will automatically pass `props` into `SomeFunction` and it will return JSX to be rendered on the page.

So, in short:

- **Components are just functions**.
- They take in `props` and return **JSX**.
- React handles calling them when needed.

</section>
