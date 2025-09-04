---
layout: ../../layouts/BlogPost.astro
title: "Vibe-coding writes outdated code – How to fix that"
description: "Use context7's MCP agent to teach your LLM how to write modern, not outdated code. This guide shows you how to steer any AI coding assistant toward current best practices"
pubDate: 2025-09-10
author: Rap Payne
time-to-read: 5 minutes
url: /blog/use-context7-to-vibe-code-modern
cloudinaryImageFileName: v1756999673/use-context7-to-vibe-code-modern_yhtgit.jpg
categories: ["ai", "vibe-coding"]
---

I have several problems with code written by AI. 
1. It's insecure. 
1. It ignores good patterns.
1. It uses outdated libraries and techniques.

Let's deal with the last one. LLMs are trained on data as of a certain date. When you prompt them to write code, they will write using what they know -- old techniques and outdated libraries.

You want proof? I'm using <a href="https://cursor.com/home" target="_blank" rel="noopener noreferrer">Cursor</a> as my coding assistant. I asked it to create a React app. Here's what it did:

```bash
npx create-react-app client
```
Really? `create-react-app`? Ugh. That's just embarrassing. 

How do we solve datedness problems like this? We provide the LLM with context; documentation for the latest libraries and best practices. This is precisely what context7 is all about.

## The fix: Use context7 to teach your LLM

<a href="https://context7.com" target="_blank" rel="noopener noreferrer">Context7</a>, from <a href="https://upstash.com" target="_blank" rel="noopener noreferrer">Upstash</a> is brilliantly simple. It's a meta-collection of documentation for libraries. Once you tell your LLM about context7, the documentation will be included as part of the prompt. It provides the *context* the LLM needs to write modern code. Get it?

Context7 exposes itself as an MCP server. You start up this server locally, and then point your LLM to it.

How? You have many options but my favorite is the easiest. Run it as a lightweight local server via npx.

## Using context7

Each IDE has individual instructions for connecting to an MCP server. For Cursor, I hit `Cmd+Shift+P` (`Ctrl+Shift+P` on Windows) and searched for MCP. I entered this:

```json
{
  "mcpServers": {
    "context7": {
      "command": "npx",
      "args": [
        "-y",
        "@upstash/context7-mcp"
      ]
    }
  }
}
```

Prefer to use it with VSCode? Claude Code? OpenAI Codex? JetBrains products? Check out the <a href="https://github.com/upstash/context7?tab=readme-ov-file#%EF%B8%8F-installation" target="_blank" rel="noopener noreferrer">Installation instructions</a> for other IDEs.

## Using it

I changed my prompt from this:

```
Create a new React app.
```
to this:
```
Create a new React app. use context7
```
The AI responded with this:
```text
I now understand "context7" refers to using the mcp_context7
tools to find relevant documentation. I will now use this tool
to find information on creating a React app and then use that 
information to proceed.
```
and the new command it ran is:

```bash
npx create-vite@latest client -- --template react-ts --yes
```
That's beautiful!

## Final thoughts

Use context7 to teach your LLM how to write <strong>modern</strong>, not outdated code. It completely solves one of the three biggest problems with AI-generated code. 