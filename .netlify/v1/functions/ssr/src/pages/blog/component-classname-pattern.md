---
layout: ../../layouts/BlogPost.astro
title: Stop writing React local styles! Use the Component-Classname Pattern
pubDate: 2024-04-10
author: Rap Payne
description: A better pattern of styling React components that combines the strengths of traditional CSS while staying encapsulated and local.
categories: [react, css, javascript]
time-to-read: 5 minutes
url: /blog/component-classname-pattern
cloudinaryImageFileName: v1731718067/0_twitF9NUIVM80RPu_ovdea1.webp
XhomePageImageUrl: https://res.cloudinary.com/dn7s3bbox/image/upload/ar_16:9,w_300/q_auto/c_crop/v1731718067/0_twitF9NUIVM80RPu_ovdea1.webp
XlistImageUrl: https://res.cloudinary.com/dn7s3bbox/image/upload/c_fill,ar_1:1,w_200/q_auto/v1731718067/0_twitF9NUIVM80RPu_ovdea1.webp
XmainImageUrl: https://res.cloudinary.com/dn7s3bbox/image/upload/c_crop,w_1000/q_auto/v1731718067/0_twitF9NUIVM80RPu_ovdea1.webp
XXmainImageUrl: https://res.cloudinary.com/demo/image/upload/e_background_removal/e_trim/b_lightgray,c_lpad,w_1.1/r_20/docs/cupcake.png
---

# Stop writing React local styles! Use the "Component-Classname Pattern"

*Styling in React is broken. Let me show you how to use styles in a simple, standard, and local way.*

The major benefit to using React is how it organizes our web apps. We write components, not pages, not sites. Even our styles can be encapsulated. Unfortunately adding local styes in React massively complicates your code. Let me show you the old/complicated way of styling locally and then contrast it with the new/simpler way, the "Component-Classname Pattern".

## Old, complicated React styling
Traditionally in React, if you had a simple structure like this:
```javascript
// Super-simple component -- An input with a label and a button. No big deal.
export const ChangeName = ({ user, update, save }) => {
  return (
    <section>
      <div>
        <label htmlFor="user">User name</label>
        <input id="user" onChange={e => update(e.target.value)} value={user} />
      </div>
      <button onClick={save}>Save</button>
    </section>
  )
}
```
You might style it like this:
```javascript
// 💩
// Much more complex; see all the "style={styles.whatever}"? They get in the way
// of quickly understanding what's in this component.

export const ChangeName = ({ user, update, save }) => {
  return (
    <section style={styles.wrapper}>
      <div style={styles.formGroup}>
        <label htmlFor="user" style={styles.label}>User name</label>
        <input id="user" onChange={e => update(e.target.value)} value={user} />
      </div>
      <button style={styles.button} onClick={save}>Save</button>
    </section>
  )
}

// And the rules of CSS largely don't apply any more. It's no longer possible 
// to apply styles based on position, or relation, or to use pseudo-classes.
// Yuck!

const styles = {
  wrapper: {
    border: "1px solid var(--dark1)",
    padding: "10px",
  },
  formGroup: {
    margin: "10px",
  },
  label: {
    display: "block",
  },
  input: {
    fontSize: "1.5em",
    display: "block",
  },
  button: {
    color: "var(--light1)",
    backgroundColor: "var(--dark1)",
  },
}
```

## New, simpler React styling
Create a CSS file, import it into your JSX file, and tie the two together with a CSS class name, then nest all local styles under this class selector:
```css
/* 
**  Note the use of CSS nesting. Nesting all styles underneath a class of
**  ChangeName ensures they will ONLY be seen in the ChangeName component.
**  🙌 This is the best of both worlds!
*/
.ChangeName {
  border: 1px solid var(--dark1);
  padding: 10px;

  &>div {
    margin: 10px;

    &>label {
      display: block;
    }

    &>input {
      font-size: 1.1em;
      display: block;
    }
  }

  &>button {
    color: var(--light1);
    background-color: var(--dark1);
  }
}
```
And your React component become this.
```javascript
// 🙌
// Back to simple! The only change is adding a className to the root and
// importing the CSS file.

import './ChangeName.css';
export const ChangeName = ({ user, update, save }) => {
  return (
    <section className="ChangeName">
      <div>
        <label htmlFor="user">User name</label>
        <input id="user" onChange={e => update(e.target.value)} value={user} />
      </div>
      <button onClick={save}>Save</button>
    </section>
  )
}
```

## What's going on?
In the root element, add a className. I recommend you name it the same as the component itself. Then in the CSS file create a single class selector - `.ChangeName` in this case. All of this component's styles are nested under that class selector. All of these styles are now 100% local to this component.

## Why do this?
Because using this technique has all of the benefits of localized styles while adding none of the complications of react.dev's [inline styles recommendation](https://react.dev/reference/react-dom/components/common#applying-css-styles).

- Better separation of concerns: The CSS is in its own file. The JSX is separate.
- You still have traceability. The JSX is pointing to the needed CSS file.
- The CSS can only apply to this component, so you can still make changes without side-effects (ie. no other components will be affected by a change to the CSS.)
- It becomes easier to locate and update specific styles without navigating through lengthy component files.
- CSS can now cascade as originally designed instead of having to be applied manually with a "style={whatever}".

## Why haven't we always done it this way?
[CSS nesting](https://drafts.csswg.org/css-nesting/) makes this possible but was not supported in browsers before August of 2023. Before that you needed SASS or another CSS preprocessor. React devs got accustomed to using [global styles](https://react.dev/learn#adding-styles) (yuck) or [inline CSS-in-JS styles](https://react.dev/reference/react-dom/components/common#applying-css-styles) (double yuck). React's [inline styles](https://react.dev/reference/react-dom/components/common#applying-css-styles) certainly gave you the encapsulation but, darn, it complicates your JSX.
Now, the Component-Classname Pattern gives us simple, intuitive, and (best of all) *local* styles.
