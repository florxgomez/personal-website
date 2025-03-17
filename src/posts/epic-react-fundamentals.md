---
title: "Epic React: React Fundamentals"
subtitle: "Notes I've taken while learning React Fundamentals from Epic React by Kent C. Dodds."
date: "March 14th, 2025"
tags: "react epic-react react-fundamentals"
---

<section>
# 👋🏻 Hello World in JS

- The browser <span>takes HTML code and generates the DOM out of it.</span>
- It then <span>exposes the DOM to JavaScript</span> so developers can interact with it to add interactivity to their web-page.
- Modern JS frameworks were created to programmatically create the DOM rather than defining it in hand-written HTML. This approach is more flexible, but comes at the cost of making the browser do a little extra work. This is why hybrid approaches are popular.
- We can use React to <span>generate the HTML on the server and then use the same React code to add interactivity on the client</span> (Remix makes this easier)
- A basic understanding of how to generate and interact with DOM nodes using JS is important to have because it’ll help to understand how React works under the hood.

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

React is the most widely used frontend framework and it <span>uses the same DOM APIs when it creates DOM nodes.</span>
<br>
It abstracts away the **imperative** browser API from you to give you a much more **declarative** API to work with.

React <span>supports multiple platforms</span> (native mobile, desktop, web, terminal, VR), each of these has its own code necessary for interacting with that platform and then there’s shared code between the platforms:

- `React`: responsible for creating React elements
- `ReactDOM`: responsible for rendering the React elements to the DOM

We typically get these from a package registry (a centralized repository where developers can publish and share reusable code packages) like **npm** where packages we use are.

```html
<script type="module">
  import { createElement } from '/react.js'
  import { createRoot } from '/react-dom/client. js'
  const rootElement = document.getElementById('root' )
  const props = { className: 'container', children: 'Hello World' }
  const element = createElement( 'div', props)
  const root = createRoot (rootElement)
  root render (element)
</script>
```

`render` will take the React elements, turn them into DOM nodes and render them on the page

- **props**: short for properties, they’re the way <span>we pass data into our elements.</span>

- **children**: a special prop in React - it <span>represents the content inside an element</span>. We can specify children:

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

- JSX is more intuitive than raw React APIs and is easier to understand when reading the code.
- It’s fairly simple <span>HTML-like syntactic sugar on top of the raw React APIs.</span>
- Because JSX is not actually JavaScript, the browser doesn’t understand it. We have to convert it using a code compiler: **Babel**.
- Normally, you’ll compile your code at build-time before you ship your app to the browser.

```jsx
const element = <h1 id="greeting">Hey there</h1>;

const element = createElement("h1", { id: "greeting", children: "Hey there" });
```

```js
import * as React from "/react";
```

- Imports all exports from React as a namespace called React
- It provides access to all React APIs
- When using JSX, the transpiler will convert JSX elements to `React.createElement` calls so we need the React namespace in scope.

  **Interpolation**: the insertion of something of a different nature into something else

```js
// template literae
const greeting = 'Sup'
const subject = 'World'
const message: `${greeting} ${subject}`
```

Sometimes we’ll want to add JavaScript logic to reference a dynamic property inside the markup, here we use curly braces in JSX to open a window to JS.
We can forward props using the **spread** syntax.

```jsx
const props = {
  children: "Hello World",
  className: "container",
};
element = <div {...props}></div>;
```

If you have additional props after, those will override the first.

**React Fragments** allow you to group multiple elements without adding an extra DOM node.

- It lets us return multiple elements side by side from a components without needing a wrapper`div` —> this happens because JS doesn’t let us assign a variable to two values.
- It’s useful for avoiding unnecessary markup that could affect styling or layout.

```jsx
const element = <React.Fragment>this is in a fragment</React.Fragment>;
```

</section>

<section>
# 🎨 Custom Components
Just like in regular JS, when you want to reuse code, you write functions. If you want to share JSX, you can do that as well. In React, we call these **components**.

React components are functions which accept an object called **props** and return something that is renderable (more React elements, string, null, etc.). They can be passed to the `createElement` API.

```jsx
function Greeting(props) {
  return <hi>Hello, {props.name}</h1>
}
// that component can be used:
<Greeting name="Flor" />
```

</section>
