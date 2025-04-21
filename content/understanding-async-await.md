---
id: 2
title: "Understanding Async/Await"
description: "Get to know how JavaScript handles asynchronous code like a pro."
image: "https://miro.medium.com/v2/resize:fit:1200/1*m7hbXwbrqYMjnOSqhiIavw.jpeg"
date: "April 15, 2025"
author: "Priya Sharma"
slug: "understanding-async-await"
---

Handling asynchronous code is a vital part of modern JavaScript development. With `async/await`, it's easier to write readable and maintainable code.

## 💡 What is Async/Await?

- `async` turns a function into a Promise
- `await` pauses function execution until the Promise resolves

```js showLineNumbers
async function fetchUserData() {
  const res = await fetch("/api/user");
  const data = await res.json();
  console.log(data);
}
