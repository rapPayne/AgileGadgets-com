---
title: "Your AI can do free, easy web searching with DuckDuckGo"
description: "Give your LangChain agent live web search in about six lines of code — no API key, no signup, no billing account. DuckDuckGo just works."
pubDate: 2026-09-17
author: Rap Payne
time-to-read: 5 minutes
url: /blog/free-easy-ai-web-search-duckduckgo
cloudinaryImageFileName: v1789656641/free-easy-ai-web-search-duckduckgo_d6rlty.jpg
categories: ["AI", "API", "LangChain", "agentic AI", "python"]
---

If your GenAI app doesn't allow web search it won't answer questions like who won last night's game, what the current Bitcoin price is, or what version of some library just shipped. It'll either guess or flat-out tell you it doesn't know. Web search fixes that.

Every other search API wants something from you first — an account, an API key, a credit card on file, a rate-limit tier to pick. DuckDuckGo needs none of that. No signup. No key. No bill. Just import it and go. I literally still don't know how they afford to do it or why - other than altruism.

Let's start with a quick reminder how to fire off a basic LangChain inference call. We'll watch it fail, then fix it with a search tool.

## Step 1 — The bare-bones inference script

No tools. No search. Just a question and an answer.

```python
# ask.py
from langchain_anthropic import ChatAnthropic

llm = ChatAnthropic(model="claude-opus-5")

question = input("Ask me anything: ")
response = llm.invoke(question)

print("\nAnswer:")
print(response.content)
```

Set `ANTHROPIC_API_KEY` and run it:

```bash
uv run python ask.py
```

Ask it something timeless and it nails it:

```
Ask me anything: What's a closure in JavaScript?
```

Now ask it something current:

```
Ask me anything: What's the latest model put out by OpenAI?
```

It'll hallucinate, specifying whatever the newest version was at training time. That's why we need to add a web search tool. But most search providers make you:

1. Hit their website and register.
2. Generate an API key.
3. Hand over a credit card so they can charge you eventually.
4. Add that API key to your app securely (probably via a `.env` file).
5. Make every search with that key so they can track you.

DuckDuckGo isn't like that. **No registration, no key, no extra coding, no tracking.**

## Step 2 — Install the search dependency

```bash
uv add langchain langchain-community duckduckgo-search
```

Three packages. `langchain` ships `create_agent`, the harness that runs the tool-calling loop[^1]; `langchain-community` ships the DuckDuckGo tool wrapper; `duckduckgo-search` does the actual fetching. (Some environments need `ddgs` instead of `duckduckgo-search` — if it fails to import, `uv add ddgs` and try again.)

## Step 3 — Give the model a tool and let it decide

Here's the move that matters — same question, same model, but now the LLM can reach for a search tool when it needs to:

```python
# search_agent.py
from langchain.agents import create_agent
from langchain_anthropic import ChatAnthropic
from langchain_community.tools import DuckDuckGoSearchRun

llm = ChatAnthropic(model="claude-opus-5")
search_tool = DuckDuckGoSearchRun()   # 1

agent = create_agent(model=llm, tools=[search_tool])  # 2

question = input("Ask me anything: ")
response = agent.invoke({"messages": [{"role": "user", "content": question}]})

print("\nAnswer:")
print(response["messages"][-1].content)
```

Line up the two scripts and the difference is two things:

1. `search_tool = DuckDuckGoSearchRun()` — grabs the DDGS web search tool.
2. `create_agent(model=llm, tools=[search_tool])` - provides DDGS to the LLM.

Run it:

```bash
uv run python search_agent.py
```

Ask it timeless questions and the agent skips the tool entirely, answering straight from its own knowledge - same as before. Ask a current-events question and it reasons its way to `DuckDuckGoSearchRun`, calls it, reads back real results, and answers with what's actually true today.[^2]

## Want more than a text blob back?

`DuckDuckGoSearchRun` hands the model one wall of text. If you want titles, snippets, and links as structured data instead, swap in `DuckDuckGoSearchResults`:

```python
from langchain_community.tools import DuckDuckGoSearchResults
from langchain_community.utilities import DuckDuckGoSearchAPIWrapper

wrapper = DuckDuckGoSearchAPIWrapper(max_results=5)
search_tool = DuckDuckGoSearchResults(api_wrapper=wrapper, output_format="list")
```

Drop that in place of the one-liner above and nothing else in `search_agent.py` changes — the tool's interface is identical from the agent's point of view.

## Things to know before you ship this

- **Rate limiting happens.** Hammer it with requests and you'll start getting blocked. I have a project that uses DDGS but falls back to Tavily when DDGS fails. Find it at <a href="https://github.com/rapPayne/genai-search-with-duckduckgo-and-tavily" target="_blank" rel="noopener noreferrer">genai-search-with-duckduckgo-and-tavily</a>.
- **It's private.** Every search is stateless and anonymous — great for privacy, but don't expect it to personalize results.

---

Need help building agentic AI systems or training your team on LangChain? <a href="https://agilegadgets.com/about" target="_blank" rel="noopener noreferrer">Reach out</a> — consulting and training available.

[^1]: If you've seen older tutorials use `create_tool_calling_agent` + `AgentExecutor`, or even LangGraph's `create_react_agent`, know that both are deprecated now — LangChain folded all of it into one function, `create_agent`, from the main `langchain` package. It's the current recommended path, and it's also the least code of the three.

[^2]: Want to watch that reasoning happen step by step instead of just seeing the final answer? Swap `.invoke()` for `.stream(inputs, stream_mode="updates")` and iterate over the chunks — you'll see each message as the agent decides to call the tool, gets its result, and moves on. It's a very cool, very eye-opening exercise.
