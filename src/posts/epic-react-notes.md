---
title: "Epic React: React Fundamentals"
subtitle: "Notes I've taken while learning React Fundamentals from Epic React by Kent C. Dodds."
date: "March 14th, 2025"
tags: "react epic-react react-fundamentals"
---

# 👋🏻 Hello World in JS

- The browser takes HTML code and generates the DOM out of it.
- It then exposes the DOM to JavaScript so developers can interact with it to add interactivity to their web-page.
- Modern JS frameworks were created to programmatically create the DOM rather than defining it in hand-written HTML.
- This approach is more flexible, but comes at the cost of making the browser do a little extra work. This is why hybrid approaches are popular. We can use React to generate the HTML on the server and then use the same React code to add interactivity on the client (Remix makes this easier)
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
