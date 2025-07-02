---
layout: ../../layouts/BlogPost.astro
title: "The secret to getting Jest to work with ES Modules"
description: "How to enable to use ES modules in a way that works on Windows, Mac, and Linux. The well-known problem is solved in a quick-and-dirty way and a graceful way."
pubDate: 2025-07-02
author: Rap Payne
time-to-read: 3 minutes
url: /blog/jest-using-modules
cloudinaryImageFileName: v1751499858/jest-using-modules_csthfk.png
categories: ["javascript"]
---


I'm embarrassed for you, <a href="https://jestjs.io" target="_blank" rel="noopener noreferrer">Jest</a>. You're a fantastic testing framework, but you've been achingly slow to embrace <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules" target="_blank" rel="noopener noreferrer">ES modules</a>. It's 2025 and everyone else has moved on to modern JavaScript syntax. You’re still using CommonJS. You know - `require` and `module.exports`. Devs are laughing at you behind your back.

If you fellow devs want to use ES modules in Jest, here are the secrets to getting Jest to work with ES modules.

## ES Modules in Jest

Let's say you have this function to test:

```js
// sum.js
export const sum = (a, b) => a + b;
```
So you write a test like this:

```js
// sum.test.js
import { sum } from "./sum.js";  // <-- this is the problem

test("adds numbers", () => {
  expect(sum(2, 3)).toBe(5);
});
```
Jest will throw errors like:
```
SyntaxError: Cannot use import statement outside a module
```
or

```
TypeError: Jest encountered an unexpected token
```

The solution is to run Jest with ES modules enabled. But you can only do that by explicitly running node with the `--experimental-vm-modules` flag. So in package.json, you need to add a script like this:

```json
{
  ...
  "scripts": {
    "test": "node --experimental-vm-modules ./node_modules/.bin/jest"
  }
  ...
}
```
Test that on your Mac/Linux machine and it'll work perfectly.

## If the solution breaks in Windows 💩
Run this on Windows and you may see this error:
```
basedir=$(dirname "$(echo "$0" | sed -e 's,\\,/,g')")
          ^^^^^^^

SyntaxError: missing ) after argument list
```
If you see this, it's because `node_modules/.bin/jest` is a Unix shell script. Windows doesn't understand bash scripts.

## The Quick Fix
You can make it work by using `npx`. Run this in a terminal window:

```sh
 npx --node-options="--experimental-vm-modules" jest
```
But this is a <a href="https://en.wikipedia.org/wiki/Kludge" target="_blank" rel="noopener noreferrer">kludge</a>.

## The proper fix
The robust fix is to update your `package.json` to use this script:
```json
{
  ...
  "scripts": {
    "test": "node --experimental-vm-modules ./node_modules/jest/bin/jest"
  },
  ...
}
```
All we've done here is tell the system to run the actual Jest as opposed to a Unix shell script that Windows can't understand.

This totally works on both Windows and Unix systems. You're welcome. 🙂

Now, Jest, we're putting you on blast: you've got to do better!