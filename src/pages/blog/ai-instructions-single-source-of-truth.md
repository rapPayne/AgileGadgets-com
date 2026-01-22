---
layout: ../../layouts/BlogPost.astro
title: "All AI Coding Assistants and humans can read ONE set of documentation"
description: "Here's how to create a single source of truth that literally every AI tool and human can read. Stop duplicating your instructions."
pubDate: 2026-01-20
author: Rap Payne
time-to-read: 5 minutes
url: /blog/ai-instructions-single-source-of-truth
cloudinaryImageFileName: v1769045314/AI_coding_assistants_SSOT_ynsrud.png
categories: ["ai", "vibe-coding"]
---

You're 10x-ing yourself using AI coding assistants. Good for you. You're documenting your team's standards in project files like README.md and CONTRIBUTING.md. Even better. And you're smart enough to want the two-for-one deal of using those same files for both purposes - informing your human teammates and your AI tools. But there's a problem; every AI assistant has their own way of configuring instructions and there's no concensus among them[^1]:
- **Claude Code** looks for `CLAUDE.md`
- **Cursor** uses `.cursorrules`
- **Continue.dev** wants `.continue/config.json`
- **Windsurf** checks `.windsurf/rules`
- **GitHub Copilot** reads comments in your code
- **JetBrains AI** scans files under /docs
- **Codeium Classic** digests README.md and nearby .md files

So you end up either:
1. Only configuring one tool (and suffering when you use others)
2. Copy-pasting the same instructions into multiple files (which get out of sync immediately) 💩

Here's a better approach.

## Create AI_INSTRUCTIONS.md

Write one file — `AI_INSTRUCTIONS.md` — that contains all your project-specific instructions. Then create tiny shim files for each AI tool that simply point to that canonical source.

Your file structure looks sort of like this:

```
/
├─ AI_INSTRUCTIONS.md        ← canonical source of truth
├─ CLAUDE.md                 ← Claude-specific shim
├─ .cursorrules              ← Cursor shim
├─ .continue/config.json     ← Continue.dev shim
├─ .windsurf/rules/shim      ← Windsurf shim
├─ README.md
├─ CONTRIBUTING.md
└─ docs/
   ├─ ARCHITECTURE.md
   ├─ CODING-STANDARDS.md
   └─ CONVENTIONS.md
```

## What goes in your shim files?
Each shim file is tiny. It just tells the AI to read `AI_INSTRUCTIONS.md`.

Markdown and plain text files like `CLAUDE.md` or `.cursorrules` will say:
```markdown
Read and follow **AI_INSTRUCTIONS.md**  
Do not infer behavior from this file alone.
```

JSON-based instructions like `.continue/config.json` will say:
```json
{
  "systemMessage": "Read /AI_INSTRUCTIONS.md for complete project documentation.
}
```
See? Simple.

## What goes in AI_INSTRUCTIONS.md?
Literally this:
```markdown
Follow all conventions and patterns described in these files:

1. /AI_INSTRUCTIONS.md (start here - this is the canonical source)
2. /README.md
3. /docs/ARCHITECTURE.md
4. /docs/CODING-STANDARDS.md
5. /docs/CONVENTIONS.md
6. /CONTRIBUTING.md
```
You may put AI-specific instructions in here that don't belong anywhere else, like:
```
## Rules
- Follow existing architecture and conventions
- Prefer clarity over cleverness
- Avoid introducing new dependencies without justification
- Write tests for new code
- Update documentation when making changes
```

## What goes in README.md?
- **Project overview**: What you're building and why
- **Instructions**: For human readers to compile and run the project
- **Environment setup**: Required tools, versions, configurations
- **AI usage**: Pointing to `AI_INSTRUCTIONS.md` as the canonical source

```markdown
## Project Overview
Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
## Getting Started
Curabitur pretium tincidunt lacus. Nulla gravida orci a odio.
## Environment Setup
Duis ac tellus et risus vulputate vehicula. Donec lobortis 
risus a elit.
## AI Usage
This repository is used with AI coding assistants.

Canonical instructions live in **AI_INSTRUCTIONS.md**.
Please read that file before making or suggesting changes.
```

## What goes in docs/ARCHITECTURE.md?
- **Architecture patterns**: "We use feature-based folders, not type-based"
- **High-level system design**: Major components and their interactions
- **Tech stack**: Specific versions, not just "React" but "React 18 with Vite 5"
- **Rules**: Project-specific architectural rules
- **Diagrams**: If needed
- **Invariants**: Things that must never change without explicit instruction
- **Examples**: Illustrative code snippets
- **References**: Links to external architecture docs if applicable

## What goes in docs/CODING-STANDARDS.md?
- **Language-specific guidelines**
- **Naming conventions**
- **Commenting standards**
- **Best practices**
- **Patterns to follow**
- **Anti-patterns to avoid**
- **Formatting rules**: Indentation, line length, etc.

## What goes in docs/CONVENTIONS.md?
- **File and folder naming conventions**
- **Component and function naming conventions**
- **API endpoint conventions**
- **Semantic conventions**: How to structure code for readability and maintainability

## Caution on context overflow
Keep in mind that the LLM context window is limited. If your project is large, you may need to prioritize which files to include in `AI_INSTRUCTIONS.md` or break it down further and include only the most relevant parts.

## The brilliant part
When you need to update your conventions, rules, patters, whatever, you change **one file**. Every AI tool picks up the changes because they all read from that single source.

---
[^1]: This list is approximate. The techniques are constantly changing. If you spot an error or outdated information, please let me know and I'll fix it. You can catch me at <a href="https://linkedin.com/in/rapPayne" target="_blank" rel="noopener noreferrer">LinkedIn</a> or <a href="https://x.com/rapPayne" target="_blank" rel="noopener noreferrer">X</a>.
