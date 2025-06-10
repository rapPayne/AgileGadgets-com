---
layout: ../../layouts/BlogPost.astro
title: "TypeScript: Types vs Interfaces vs Classes – Which Should You Use?"
description: "A practical guide for experienced JavaScript devs: when to use a TypeScript type, interface, or class. Includes a handy flowchart."
pubDate: 2025-06-10
author: Rap Payne
time-to-read: 5 minutes
url: /blog/typescript-types-vs-interfaces
cloudinaryImageFileName: v1749560689/TS_type_vs_interface_qtz7fd.png
categories: ["typescript", "javascript"]
---

If you’re coming from JavaScript, TypeScript’s type system can be <a href="[URL](https://thedecisionlab.com/reference-guide/economics/the-paradox-of-choice)" target="_blank" rel="noopener noreferrer">daunting</a>. You’ve got `type`, `interface`, and `class` — all of which can describe the shape of your data. But which one should you use? Let’s cut through the noise and get you making the right call, fast.

## The three options

- **Type**: Describes the shape of complex _data_. Kinda like a label for a set of possible values.
- **Interface**: Describes the shape of _objects_. Interfaces are extendable and mergeable.
- **Class**: Not just a type, but a blueprint for creating objects with both data and behavior.

If you’re just looking for a quick answer, jump to the [summary](#and-finally-my-take).

---

## Type: The most abstract

`type` is the most flexible and simplest option. You can use it for primitives, unions, intersections, functions, and more.

```typescript
type User = {
  id: UserID;
  name: string;
};
type UserID = string | number;
type Callback = (event: Event) => void;
```

- **Pros:** Super flexible, works for anything.
- **Cons:** Not mergeable, can’t be implemented or extended in the same way as interfaces.

---

## Interface: The contract

`interface` is designed for describing the shape of objects. It’s extendable, composable, and can be merged across declarations.

```typescript
interface User {
  id: UserID;
  name: string;
}

interface Admin extends User {
  permissions: string[];
}
```

- **Pros:** Great for OOP patterns, can be extended, merged, and implemented by classes.
- **Cons:** Only works for object shapes (not unions, primitives, etc).

---

## Class: The blueprint

`class` is a familiar concept for OOP devs. Classes have implementation details, providing both structure (properties) and behavior (methods). They're overkill for data shapes.

```typescript
class UserAccount implements User {
  constructor(public id: UserID, public name: string) {}
}
```

- **Pros:** Encapsulates data and behavior, can implement interfaces.
- **Cons:** More complex, less abstract than `type` or `interface`.

---

## Side-by-Side: When to use each

| Use Case                  | type           | interface      | class         |
|---------------------------|----------------|----------------|---------------|
| Object shape              | ✅             | ✅             | ✅            |
| Union/intersection        | ✅             | ❌             | ❌            |
| Declaration merging       | ❌             | ✅             | ❌            |
| Implements/extends        | Limited        | ✅             | ✅            |
| Runtime code              | ❌             | ❌             | ✅            |
| Functions/tuples/primitives| ✅            | ❌             | ❌            |

---

## And finally, my take

Use **`type`** almost all the time. 

The official <a href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#differences-between-type-aliases-and-interfaces" target="_blank" rel="noopener noreferrer">TypeScript docs</a> recommend reaching for `interface` first. They say:
> For the most part, you can choose based on personal preference, and TypeScript will tell you if it needs something to be the other kind of declaration. If you would like a heuristic, use interface until you need to use features from type.

I (and many others) disagree. Start with `type` because it's simpler. Switch to `interface` if you need to extend an existing class or want this one to be extendable. And remember, classes are only for when you need to instantiate an instance.

---
