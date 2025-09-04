---
layout: ../../layouts/BlogPost.astro
title: "An MCP primer - AI communication standards"
description: "Stop AI hallucinations! Learn how the Model Context Protocol (MCP) lets devs connect LLMs to live docs, APIs, databases, and tools so your assistant always knows current facts"
pubDate: 2025-09-17
author: Rap Payne
time-to-read: 9 minutes
url: /blog/mcp-primer
cloudinaryImageFileName: v1757022739/mcp-primer_ckdyjp.png
categories: ["ai", "vibe-coding", "mcp"]
---

Model Context Protocol (MCP) has been described as the USB for AI. I like that. It's an emerging open standard that lets large language models (LLMs) talk to tools and to each other. 

## What kinds of tools can MCP connect to?
Remember, your LLM was trained on data as of a certain date. It doesn't know anything that happened after that date. But with MCP, it can call out to tools that do know about the world. For example:
- **APIs**: Weather, stock prices, news, etc.
- **Databases**: Query your SQL or NoSQL databases.
- **Files**: Read or write files on disk.
- **Other Models**: Call other LLMs.
- **User Input**: Direct content from a human.
- **Web Scraping**: Fetching data from websites in real-time.
- **Custom Code**: Any function you want to write in any language.

## Why have it?

If we didn't have MCP, then every LLM would have a different way of talking. That would be horrible for devs, who'd have to re-learn how to communicate with every new model. But with MCP, they can learn one protocol and use it every time.

## Architecture

MCP operates on a client-server model sending POST requests over HTTP. Basically it's a tiny web service listening for JSON requests and responding with JSON results.

- **MCP server**: The tool being exposed.
- **Clients**: The App communicating with the AI.

## Common Messages
- **Who are you?** → getServerInfo
- **What do you have?** → resources/list | tools/list | events/list
- **Gimme that thing.** → resources/get
- **Do this for me.** → tools/call

That’s 80% of traffic in MCP. Here's the tea.

---

**getServerInfo**: When a client connects to a server, it sends a handshake message to establish the connection and exchange capabilities.
```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "getServerInfo"
}
```
Response:
```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": {
    "server_name": "NewsAPI",
    "version": "1.0.0",
    "capabilities": ["resources", "tools", "tools/list"]
  }
}
```
"capabilities" will always be an array with some combination of "resources", "tools", and "tools/list". More may be added in the future.

---

**resources/list**: What data do you have?
```json
{
  "jsonrpc": "2.0",
  "id": 2,
  "method": "resources/list" # or tools/list or events/list
}
```
Response:
```json
{
  "jsonrpc": "2.0",
  "id": 2,
  "result": [
    {
      "uri": "news:headlines",
      "name": "Top Headlines",
      "description": "Latest top news headlines across all categories",
      "type": "feed",
      "format": "json"
    },
    {
      "uri": "news:category:sports",
      "name": "Sports News",
      "description": "Latest updates in sports",
      "type": "feed",
      "format": "json"
    },
    {
      "uri": "news:search",
      "name": "Search News",
      "description": "Search for news articles by keyword",
      "type": "search",
      "format": "json"
    }
  ]
}
```
The MCP spec requires certain fields, but doesn't limit you to just those fields. You can add whatever fields you want.
---

**resources/get**: That thing you said you have? Give it to me.
```json
{
  "jsonrpc": "2.0",
  "id": 3,
  "method": "resources/get",
  "params": {
    "uri": "news:headlines",
    "filters": { "category": "technology", "country": "tx" },
    "limit": 10
  }
}
```
Response:
```json
{
  "jsonrpc": "2.0",
  "id": 3,
  "result": {
    "content": [
      {
        "title": "Rap Payne wins lottery again",
        "author": "Amanda Silberling",
        "source": "TechCrunch",
        "publishedAt": "2025-09-17T14:00:00Z",
        "url": "https://techcrunch.com/article123",
        "summary": "Rap Payne has once again defied the odds by winning the lottery. Can you believe the luck on this guy?"
      },
      {
        "title": "Breakthrough in Quantum Computing Announced",
        "author": "Megan Farokhmanesh",
        "source": "Wired",
        "publishedAt": "2025-09-17T12:45:00Z",
        "url": "https://wired.com/article789",
        "summary": "Researchers have made a significant advancement in quantum computing, potentially revolutionizing the field."
      },
      ... more articles ...
    ],
    "metadata": {
      "category": "technology",
      "country": "tx",
      "totalResults": 10,
      "fetchedAt": "2025-09-17T14:05:00Z"
    }
  }
}
```
---

**tools/list**: What can you do?
```json
{
  "jsonrpc": "2.0",
  "id": 4,
  "method": "tools/list"
}
```
Response:
```json
{
  "jsonrpc": "2.0",
  "id": 4,
  "result": [
    {
      "name": "getWeather",
      "description": "Get current weather for a location",
      "inputSchema": {
        "type": "object",
        "properties": {
          "location": { "type": "string" }
        },
        "required": ["location"]
      }
    },
    {
      "name": "getStockPrice",
      "description": "Get latest stock price for a ticker",
      "inputSchema": {
        "type": "object",
        "properties": {
          "ticker": { "type": "string" }
        },
        "required": ["ticker"]
      }
    }
  ]
}
```
---

**tools/call**: Do this for me.
```json
{
  "jsonrpc": "2.0",
  "id": 5,
  "method": "tools/call",
  "params": {
    "name": "getWeather",
    "arguments": {
      "location": "Arlen"
    }
  }
}
```
Response:
```json
{
  "jsonrpc": "2.0",
  "id": 5,
  "result": {
    "temperature": 92,
    "condition": "Partly Cloudy",
    "humidity": 60,
    "wind_mph": 8
  }
}
```
---

## Final thoughts on MCP
This overview and set of examples should be enough to give you a good understanding of how MCP works. We made no attempt to cover every detail of MCP here. For all the official details, visit the <a href="https://modelcontextprotocol.io/docs/getting-started/intro" target="_blank" rel="noopener noreferrer">official MCP site</a>.

Thank God for MCP! It is going to make communication between LLMs and tools doable and enable agentic AI and more capable generative AI something that any of us can write. 