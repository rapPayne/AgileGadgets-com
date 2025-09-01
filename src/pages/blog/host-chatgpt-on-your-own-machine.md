---
layout: ../../layouts/BlogPost.astro
title: "How to get a ChatGPT-like service running on your own machine"
description: "Protect your privacy, save tons of money and have ultimate control over your own LLM. This guide walks you through setting up a local, private ChatGPT-style AI assistant."
pubDate: 2025-09-01
author: Rap Payne
time-to-read: 6 minutes
url: /blog/host-chatgpt-on-your-own-machine
cloudinaryImageFileName: v1756759375/host-chatgpt-on-your-own-machine_t2c47q.png
categories: ["AI", "machine learning"]
---
> **"I don't trust ChatGPT with my questions. (Or Gemini or Claude or any of them)."**

> **"Our app is getting more users so tokens are getting expensive."**  

> **"I need more control in the formatting of prompts and responses."**

The solution to these problems is run your own LLM installed on your own machine. No cost, no latency, no data sharing, full control. It is surprisingly simple.

I initially thought I'd need a supercomputer with tons of disk space and GPU power. And you do -- to **train** the model. But to just **run** it, even a laptop is fine.

It's surprisingly simple. We'll do these four steps ...
1) get an engine, 
2) get a model, 
3) start up the server, and 
4) interact with it.

## Step 1: Download the Ollama engine

Go to <a href="https://ollama.com/download" target="_blank" rel="noopener noreferrer">Ollama</a> and follow the installation instructions for your operating system. 

Verify it's running by executing:

```sh
ollama version
```

## Step 2: Download a model
To install a model, it's simply "ollama pull <model_name>"

You have tons of models to choose from. Go <a href="https://ollama.com/search" target="_blank" rel="noopener noreferrer">here</a> to get a list of them.

For my purposes, llama3.1 was what I needed. I installed it with `ollama pull llama3.1` and saw this output:      
```sh
$ ollama pull llama3.1
pulling manifest 
pulling 667b0c1932bc: 100% ▕█████████████████████████████████████████████████████████████████████████████████████████████████▏ 4.9 GB                         
pulling 948af2743fc7: 100% ▕█████████████████████████████████████████████████████████████████████████████████████████████████▏ 1.5 KB                         
pulling 0ba8f0e314b4: 100% ▕█████████████████████████████████████████████████████████████████████████████████████████████████▏  12 KB                         
pulling 56bb8bd477a5: 100% ▕█████████████████████████████████████████████████████████████████████████████████████████████████▏   96 B                         
pulling 455f34728c9b: 100% ▕█████████████████████████████████████████████████████████████████████████████████████████████████▏  487 B                         
verifying sha256 digest 
writing manifest 
success 
```

## Step 3: Start up the server
Simple:
```bash
ollama run llama3.1
```  

That's it. You now have an LLM working on your machine. All that's left to do is work with the model; prompt it.

## Step 4: prompt the model
You can do this in two ways: interactively, or programmatically.

### Interactively
You can use a simple command line interface to interact with the model. Just type your prompts after the `>>>` and see the responses.

```bash
$ ollama run llama3.1
>>> Write a limerick about running a marathon.
Here is a limerick about running a marathon:

There once was a runner so fine,
Whose marathon goal she did design.
She trained with great care,
And ran through the air,
And crossed the finish line in good time!

>>> Send a message (/? for help)
```
This is cute and all but not practical for real applications. You probably did all this to create an app. So let's see how to use your new service in an app.

### Programmatically
All you need to do is send a POST request to `http://localhost:11434/api/generate` with your prompt. Send this as the body:

```
{
  "model": "llama3.1",
  "prompt": "Write a limerick about running", // Or your prompt
  "stream": false
}
```
You'll get this response:
```
{
  "model": "llama3.1",
  "created_at": "2025-09-01T16:54:47.594435Z",
  "response": "Here is a limerick about running:\n\nThere once was a runner so fine,\nWhose speed on the track was divine.\nShe pounded the ground,\nWith her feet all around,\nAnd finished with a happy shine.",
  "done": true,
  "done_reason": "stop",
  "context": [128006, ... 33505],
  "total_duration": 892255750,
  "load_duration": 63993125,
  "prompt_eval_count": 17,
  "prompt_eval_duration": 126625000,
  "eval_count": 45,
  "eval_duration": 701249583
}
```
## Bonus! Processing the streaming value
If you set `"stream": true` in your request, you'll receive a stream of responses as the model generates them. This is useful for long prompts or when you want to display the output in real-time. Here's a node snippet to show how to handle that.
```javascript
  const response = await fetch("http://localhost:11434/api/generate", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      model: "llama3.1",
      prompt: "Write a limerick about running"
    }),
  });

  const reader = response.body.getReader();
  const decoder = new TextDecoder();

  let fullText = "";

  while (true) {
    const { done, value } = await reader.read();
    if (done) break;

    const chunk = decoder.decode(value, { stream: true }).trim();
    // each chunk may contain multiple JSON lines
    for (const line of chunk.split("\n")) {
      if (!line) continue;
      const json = JSON.parse(line);
      if (json.response) {
        fullText += json.response;
        process.stdout.write(json.response); // stream to console
      }
    }
  }

  console.log("\n\nFinal output:", fullText);
```

## Final thoughts

Running your own ChatGPT-like service is super empowering. You get privacy, control, and flexibility, and you’ll learn a ton about modern AI. If you hit a snag, feel free to [reach out to me](/about) for help.