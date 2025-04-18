---
layout: ../../layouts/BlogPost.astro
date: 2022-01-22
author: Rap Payne
title: React vs Angular vs Vue vs Svelte; Which Framework Should You Choose?
description: A comprehensive comparison of React, Angular, Vue, and Svelte to help you decide which framework is best for your next project.
tags: [react, css, vue, svelte, javascript]
time-to-read: 10 minutes
url: /blog/React-vs-Angular-vs-Vue-vs-Svelte
cloudinaryImageFileName: v1744933362/venn_qmj8v6.gif
---

# React vs Angular vs Vue vs Svelte: Which Framework Should You Choose?

What mind-space should React, Angular, Vue, and Svelte occupy in your head? Which is the best for you? In this article, we'll explore what these top four frameworks have in common and what makes each unique. Whether you're deciding which framework to learn next or choosing one for your next project, this guide will help you make an informed decision.

## TL;DR

- **Performance doesn't matter!** Other factors are more important.
- **React** is the best choice for most developers due to its balance of community support and simplicity.
- **Svelte** and **Vue** are the simplest frameworks. If they gain popularity, they could overtake React.
- **Angular** is ideal for back-end developers transitioning to front-end development.

---

## The Project

To ensure a fair comparison, we built a simple yet realistic web app: a responsive dashboard with 25 widgets. One widget fetches real-time weather data via a RESTful API, while the others are dynamic placeholders. The app also includes routing with "Home," "About Us," and "Contact Us" pages.

You can find the source code for all four implementations <a href="https://github.com/rapPayne/react-vue-svelte-angular" target="_blank" rel="noopener noreferrer">here</a>.

Each dashboard has 25 widgets rendered in a responsive way. 24 are placeholders -- dynamic, random-colored placeholder widget. But to make it more real, we also created one weather forecast widget that consumes a RESTful API in real time. We also demonstrated routing with multiple "pages"; Home, About Us, and Contact Us. These are accessible via a menu at the top.

See? You can't tell which is created by which framework:
<img src="https://res.cloudinary.com/dn7s3bbox/image/upload/v1744933362/framework1_mhojie.jpg" alt="App written with Svelte" />
<img src="https://res.cloudinary.com/dn7s3bbox/image/upload/v1744933362/framework2_loi00o.jpg" alt="App written with Vue" />
<img src="https://res.cloudinary.com/dn7s3bbox/image/upload/v1744933362/framework3_v8rrl9.jpg" alt="App written with Angular" />
<img src="https://res.cloudinary.com/dn7s3bbox/image/upload/v1744933362/framework4_b2egw0.jpg" alt="App written with React" />

### Uniformity Across Frameworks

To compare apples-to-apples, all four projects use:

- TypeScript
- npm
- No CSS preprocessors (e.g., Sass, Less)
- No CSS frameworks (e.g., Bootstrap, Tailwind)
- No testing (to keep things simple)
- Responsive design principles

---

## What the Frameworks Have in Common

Despite their differences, all four frameworks share these traits:

- Open-source with community contributions
- Designed for web development
- Extend HTML for declarative looping and conditionals
- Use components for encapsulation
- Allow one-way data flow from parent to child only. Although three of them *pretend* to support two-way data flow, it's a smoke screen. They really don't
- Create single-page applications (SPAs)
- Have a CLI (command-line interface) that scaffolds a new project
- Create a cool development environment that supports debugging in the browser with hot reload
- Use VS Code as the de-facto standard IDE
- Performed well. They're all **very, very** fast

Speaking of which ...

---

## Performance Doesn't Matter

All four frameworks have a few stories of them being slow but none much more than the others. Please note that there are tons of stories of AngularJS being slow. But Angular is not the same as AngularJS. These stories don't apply to today's Angular. 

I ran some benchmark tests on <a href="https://stefankrause.net" target="_blank" rel="noopener noreferrer">stefankrause.net</a>. Here are the more interesting results.
<img src="https://res.cloudinary.com/dn7s3bbox/image/upload/v1744933445/benchmark1_hmr1ow.jpg" alt="Benchmark results showing that there's not much difference in the results except that angular and react are only slightly slower" style="width: 100%;" />
<img src="https://res.cloudinary.com/dn7s3bbox/image/upload/v1744933446/benchmark2_ei7dyu.jpg" alt="Benchmark results showing that they're all fast except that react and vue are slower on the first load" style="width: 100%;" />

Svelte is the fastest, followed by Vue, then Angular and then React. I was totally taken aback that Angular was faster than React/Redux. I expected exactly the opposite.

But even at its absolute worst, no human can detect a difference between any of these frameworks under similar loads. The speed numbers above are in milliseconds. The worst gap is less than one-tenth of one second. Hardly a difference worth worrying about.
 
The big takeaway: 
> **Don't make your choice based on performance; it just doesn't matter!**

So what does matter then? Let's look at the other differences and see what rears its head.

---

## Framework-Specific Insights

### Svelte

Svelte is not as much a framework as it is a compiler. Svelte doesn't put the entire app in the browser to run like the other frameworks. Instead, each request runs the compiler on the server, generates a page and sends it to the client. Unlike the other three, Svelte avoids the up-front cost of loading all JavaScript before the first page loads. Svelte delivers only the parts that you need just in time.

#### Why Svelte is Great!
Svelte was the most loved framework in a <a href="https://insights.stackoverflow.com/survey/2021#most-loved-dreaded-and-wanted-webframe-love-dread" target="_blank" rel="noopener noreferrer">recent poll</a> and I can see why. It is the simplest to learn of the four.

While Svelte is not backed by a Google/Facebook/Amazon/Microsoft, it is headed by a camera-friendly, eloquent, charismatic developer named Rich Harris. Very rare and very powerful combination. And Harris was recently hired by <a href="https://vercel.com/" target="_blank" rel="noopener noreferrer">Vercel</a> who is paying him a salary to work exclusively on Svelte.

The framework has some really cool bells and whistles that other frameworks don't have, like animations built in. But it lacks important features that I'd have prioritized. Things like form validations, http capabilities, PWA support, reactivity. You know, things that are less ornamental and more businesslike.

<a href="https://www.howtogeek.com/660368/what-does-otoh-mean-and-how-do-you-use-it/" target="_blank" rel="noopener noreferrer">OTOH</a>, this is why Angular is so bloated and Svelte is ... well ... <a href="https://www.merriam-webster.com/dictionary/svelte" target="_blank" rel="noopener noreferrer">svelte</a>.

#### Why Svelte kind of sucks
Svelte just feels ... I don't know ... unripened. Here's an example. When I added TypeScript, Svelte produced errors immediately. After research, I found that the tsconfig.json file is extending a ruleset that doesn't exist. The fix according to the <a href="" target="_blank" rel="noopener noreferrer"> github issue</a> is to remove that line. It's a kludgey patch. "It'll be fixed someday", they say. "Someday"? Really? This is not encouraging.

And that's not all. Here are other examples:
-	Styles are pre-compiled. This is good but every component shares one copy and therefore cannot have JavaScript variables. They're not dynamic.
-	The documentation is unclear and has dated information. There's literally nothing there on TypeScript. What's the proper type for a Svelte component? You may know, but it's not in the docs so the rest of us don't.
-	Shall I go on?

Being immature also means
-	Fewer developers improving the framework
-	More frequent changes of existing code and thus deprecations
-	Smaller community of peers
-	Fewer answered questions on StackOverflow and github issues.
-	Fewer third party libraries and tools

But wait! These problems are only going to improve ... and rapidly if I had to guess. While the community is small, it is very passionate and that often compensates. Would you rather have a small group of fanatical devs or a large group who are all just kind of 'meh'? The former? Yeah. Me too. And I refuse to bet against Rich Harris. The man seldom fails to do what he sets out to. Svelte will increasingly disrupt this space.

### Vue
Evan You was a Google developer who wanted a framework that was simpler than Angular. So, being a next-level geek, he went out and wrote one. Ironically Vue is more like React than Angular; it uses a virtual DOM like React and relies on functional paradigms because, well, JavaScript is a functional language and not an object-oriented one.
#### Why Vue is great!
Vue, like Svelte and React keep the entire component in a single file with three sections.
1. `<script>` with JavaScript for behaviour
2. `<template>` with HTML for structure
3. `<style>` with CSS for styling and layout.

Whereas React demands that you bring HTML into your JavaScript and Angular demands that you bring JavaScript into your HTML, Vue keeps them blissfully separate and yet leaves them in a single file. Easy to find. Easy to maintain. 

While a Vue project is minimalist and thus highly simple, it uses the middleware pattern, allowing pluggable modules

```javascript
Vue.use(SomePluggableModule)
Vue.use(AnotherPluggableModule)
Vue.use(YetAThirdPluggableModule)
```

This keeps Vue simple while allowing you to add in the parts you need but only when you need them. It is highly extensible.
#### Why Vue kind of sucks
Ummm ... it doesn't? Vue has weaknesses, sure, but for each of its weaknesses one of the other frameworks is worse. Conversely for each of Vue's strengths, one of the others is stronger. So Vue is a very safe option with a fantastic balance between most of the strengths of others and fewer of their weaknesses. Much more mature than Svelte and much simpler than Angular or React.

### React
Released in 2013 by a team at Facebook (<a href="https://about.fb.com/news/2021/10/facebook-company-is-now-meta/" target="_blank" rel="noopener noreferrer">Meta</a>), React is a Cinderella story, coming from waaay behind Angular to become by far the most popular framework today. React has done to Angular what Facebook did to MySpace.
#### Why React is great!
React has the largest community support and the largest library selection of them all. It has the best balance of being learnable while also being super popular.

But my favorite thing about React is the developer experience. React allows me to write cleaner, more expressive code than any other framework. This more than makes React's learning curve worth the effort. 
 
React has the most integrity in terms of software craftsmanship. It's the most honest in what it is really doing, JSX notwithstanding. Yes, JSX is a façade but the other three are even more abstract!

#### Why React kind of sucks
React doesn't have directives in the HTML. Instead it relies on your state-of-the-art JavaScript skills to handle flow control. You use Array.prototype.map() for iteration and logical operators like `&` and `|` for conditionals. This is unexpected for noobs and less intuitive for veterans. Hey pros, before you push back, try to remember when you were first learning React ... didn't it take you a while to understand why you can't use `if` or `for` or `while` in JSX? Of course it did! The prosecution rests, your honor.

Lifecycle is much tougher. Whereas all three of the others support events like `mounted` or `OnInit`, React relies on the `useEffect()` hook which is hugely powerful but cryptic as heck!

It is the only one of the four frameworks that doesn't give us a shortcut to two-way binding. The others at least pretend to support two-way binding. React forces us to jump through some pretty daunting hoops to get data from a textbox and back into state. You have to imperatively bind to a state variable - <a href="https://www.youtube.com/watch?v=E7Fbf7R3x6I" target="_blank" rel="noopener noreferrer">imperatively</a>! and then rerender the component with the new value.

<div class="tenor-gif-embed" data-postid="3541096" data-share-method="host" data-aspect-ratio="1.77778" data-width="100%"><a href="https://tenor.com/view/ring-of-fire-mascot-jump-gif-3541096">Ring Of Fire GIF</a>from <a href="https://tenor.com/search/ring+of+fire-gifs">Ring Of Fire GIFs</a></div> <script type="text/javascript" async src="https://tenor.com/embed.js"></script>

### Angular
Originating at Google, Angular is the oldest and therefore most stable framework. It deserves major props for defining this space, creating the category singlehandedly.

#### Why Angular is great!
In the plus column, Angular's tooling is easily the most powerful of all four. The @angular/cli is head and shoulders more powerful and complete than any of the others.

State management is a dream with Angular. The other frameworks should aspire to be this good. State is properly encapsulated but not so paranoid as to require outside libraries in order to communicate between components. (Looking at you React/Redux and Vue/VueX.) We simply set data in any TypeScript class and Angular is smart enough to update its DOM appropriately. Super simple.

Only Angular has TypeScript baked in. The other three don't as much support it as they tolerate it -- and in the cases of Svelte and Vue it feels like a begrudging tolerance. All of my demo apps use TypeScript but after wresting with types in Svelte and Vue, I actually pulled some out because it made the code less understandable and added nothing in terms of safety.

#### Why Angular kind of sucks
Components are split into three files, one each for CSS, HTML, and TypeScript, forcing you to switch between files during development. Yes, you can combine them into the `*.ts` file but then you lose intellisense and linting. That's a deal-breaker.

Also when you create a new component, you have to register it in a module like app.module.ts. Not a big deal, but it's yet another non-obvious step, hidden from noobs, and a likely place for bugs to appear. It doesn't have to be like this.

Angular is bloated and heavy and frustrating in the same way that Java and C# and Dart are. No wonder it needs TypeScript! You write a ton of complex code to get the simplest things accomplished. (Looking at you, rxjs)! Angular is the toughest of the four to learn, with React being the runner-up. Its architecture and semantics require tons of study rather than just referencing. I believe this is the reason that Angular continues to <a href="https://2019.stateofjs.com/front-end-frameworks/" target="_blank" rel="noopener noreferrer">decline in popularity</a>. 

A caveat to the learning curve argument; if you're already a JavaScript wizard, Angular is the hardest to learn. But if you have a team of backend devs who are transitioning to front-end, then Angular relieves some of the burden of being really stinking good at JavaScript. Why? Because Angular hides behind the veneer that is TypeScript. It makes JavaScript feel more like Java or C# development. So your team of very experienced OO-devs may actually get up to speed quicker with Angular than the other three.

## Conclusion
Any real-world project leader knows that success is measured by one thing ...

> **Can our intended audience use our product?**

Thus, the framework our dev team uses is important:
-	If our app is slow, users are frustrated and won't use it.
-	If it is complex, our app will be buggy. 
-	If it is complex, our app can't be fixed/modified by our devs
-	If it is hard to learn, our app takes longer to write and release
-	The better the community support, the quicker we can write and release

In order of importance, a framework must be fast, simple, and popular.
1.	Fast - All four are fast
2.	Simple - Svelte, Vue
3.	Popular - React, Angular

Angular and React are dominating community support (🤗) but are tough to learn (💩). Vue and Svelte are the easiest to learn (🤗) but are waaaaay less popular (💩) than Angular and React. So we have to compromise. 

<img src="https://res.cloudinary.com/dn7s3bbox/image/upload/c_fill,w_1000,ar_16:9/q_auto/v1744933362/venn_qmj8v6.gif" alt="Venn diagram showing the four frameworks with Angular and React being popular but complex and Svelte and Vue being simple but unpopular" style="width: 100%;" />

The learning curve happens only one time but 3rd party libraries are often needed and help for maintenance is needed pervasively. So I'm going to go ahead and eliminate Vue and Svelte until such a time as they're more popular.

Note that this may never happen with the huge head start that React has. Its popularity makes more folks choose it which increases its popularity even more. It's a self-perpetuating cycle.

So that leaves us with Angular and React. If I'm managing a team of devs who are new to JavaScript and client-side web development, maybe they're Java or C# devs, then I'm going to choose Angular. Because my devs will have a much flatter curve -- TypeScript and Angular's class-based component try to mimic the OO style of writing. 

But if our devs know JavaScript, React is going to allow us to create much cleaner, well-designed bits of code that will scale, run fast and most importantly be written quickly and maintained easier. For that situation, React is the clear winner ... for now.


<small>Note: Originally published on https://accelebrate.com/blog/react-vs-angular-vs-vue-vs-svelte-which-framework-should-you-choose/ on January 22, 2022. Updated for clarity and accuracy.
</small>