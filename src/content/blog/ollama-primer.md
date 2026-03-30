---
title: "Run LLMs Locally with Ollama - A Practical Guide"
description: "Stop paying API fees and worrying about rate limits. Run powerful language models like Llama, Mistral, and Phi on your own machine with Ollama."
pubDate: 2026-03-30
author: Rap Payne
time-to-read: 12 minutes
url: /blog/ollama-primer
cloudinaryImageFileName: v1774908948/ollama-primer_pxzyzt.png
categories: ["ai", "llm", "tutorial", "local development"]
---

So you want to run LLMs on your own machine without sending your data to OpenAI, Anthropic, or Google? Maybe you're tired of API costs, or you need to work offline, or you just want full control over your AI stack. Ollama makes this straightforward. Here's everything you need to know.

## What is Ollama?

Ollama is a command-line tool that lets you run large language models locally. Think of it as Docker for LLMs. It handles model downloads, manages GPU memory, and provides a simple API you can hit from any application.

Instead of this:
```javascript
// Sending data to OpenAI
const response = await openai.chat.completions.create({
  model: "gpt-5",
  messages: [{ role: "user", content: "Hello" }]
});
```

You get this:
```javascript
// Running locally with Ollama
const response = await fetch('http://localhost:11434/api/generate', {
  method: 'POST',
  body: JSON.stringify({
    model: 'llama3.1',
    prompt: 'Hello'
  })
});
```

No API keys. No usage limits. No data leaving your machine.

## Installation

### macOS

Easiest option is Homebrew:
```bash
brew install ollama
```

Or download the app from <a href="https://ollama.ai/download" target="_blank" rel="noopener noreferrer">ollama.ai</a> and drag it to Applications.

### Linux

One-liner install:
```bash
curl -fsSL https://ollama.ai/install.sh | sh
```

This works on most distros (Ubuntu, Debian, Fedora, CentOS, etc.). It installs Ollama as a system service that starts automatically.

### Windows

Download the installer from <a href="https://ollama.ai/download" target="_blank" rel="noopener noreferrer">ollama.ai</a> and run it. Ollama runs as a Windows service in the background.

## Basic Usage

Check your Ollama version:
```bash
ollama --version
```

### Running Your First Model

Start with a small, fast model like Phi:
```bash
ollama run phi3
```

First time you run this, Ollama downloads the model (about 2.2GB). This might take a few minutes depending on your internet connection. After that, it's instant.

You'll drop into a chat interface:
```
>>> Hello, who are you?
I am Phi, a large language model trained by Microsoft...

>>> /bye
```

### Popular Models to Try

**Llama 3.1** (8B parameters, good all-around choice):
```bash
ollama run llama3.1
```

**Mistral** (7B parameters, fast and capable):
```bash
ollama run mistral
```

**Codellama** (optimized for code):
```bash
ollama run codellama
```

**Gemma 2** (Google's model, excellent quality):
```bash
ollama run gemma2
```

**DeepSeek Coder** (best for programming tasks):
```bash
ollama run deepseek-coder
```

Browse all available models at <a href="https://ollama.ai/library" target="_blank" rel="noopener noreferrer">ollama.ai/library</a>.

### Model Size Considerations

Models come in different sizes. Bigger is usually better but requires more RAM:

- **7B models**: 8GB RAM minimum, fast responses
- **13B models**: 16GB RAM, better quality
- **70B models**: 64GB+ RAM, excellent but slow on CPU

If you have an NVIDIA GPU with enough VRAM, Ollama uses it automatically and everything runs much faster.

### Estimating RAM needs

A model's RAM requirement depends on its size and quantization level. Quantization compresses the model — less precision, less RAM, slightly lower quality.

A rough formula: **RAM needed ≈ (parameters in billions) × (bits per weight) ÷ 8**

| Model | Quantization | Approx. RAM |
|-------|-------------|-------------|
| 7B    | q4 (4-bit)  | ~4 GB       |
| 7B    | q8 (8-bit)  | ~8 GB       |
| 13B   | q4          | ~8 GB       |
| 13B   | q8          | ~16 GB      |
| 70B   | q4          | ~40 GB      |

When in doubt, check the model page on [ollama.ai/library](https://ollama.ai/library) — it lists the RAM requirement for each variant.

### Checking your GPU and VRAM

**macOS:**
```bash
system_profiler SPDisplaysDataType | grep -E "Chipset|VRAM"
```

**Linux (NVIDIA):**
```bash
nvidia-smi
```

**Windows:**
```bash
nvidia-smi
```

Or open Task Manager → Performance → GPU to see VRAM visually.

If `nvidia-smi` isn't found, you either don't have an NVIDIA GPU or the drivers aren't installed. AMD GPU support in Ollama is limited on non-Linux systems.

## Essential Commands

### List installed models
```bash
ollama list
```

### Pull a model without running it
```bash
ollama pull llama3.1
```

### Delete a model to free up space
```bash
ollama rm mistral
```

### Show model details
```bash
ollama show llama3.1
```

### Update a model to the latest version
```bash
ollama pull llama3.1
```

Models improve over time. Re-pulling gets you the latest version.

## Using Ollama via HTTP API

The chat interface is fine for quick tests, but you'll usually want to call Ollama from your applications.

Ollama runs a local web server on port 11434. You can hit it with curl, Python, JavaScript, or any language that speaks HTTP.

### Simple generation request

```bash
curl http://localhost:11434/api/generate -d '{
  "model": "llama3.1",
  "prompt": "Why is the sky blue?",
  "stream": false
}'
```

Response:
```json
{
  "model": "llama3.1",
  "created_at": "2025-12-27T10:30:00.000Z",
  "response": "The sky appears blue because...",
  "done": true
}
```

### Chat API (with conversation history)

```bash
curl http://localhost:11434/api/chat -d '{
  "model": "llama3.1",
  "messages": [
    { "role": "user", "content": "What is 2+2?" },
    { "role": "assistant", "content": "4" },
    { "role": "user", "content": "What about 2+3?" }
  ],
  "stream": false
}'
```

The chat endpoint maintains context across multiple turns.

### Streaming responses

Set `"stream": true` to get responses token-by-token:

```bash
curl http://localhost:11434/api/generate -d '{
  "model": "llama3.1",
  "prompt": "Write a haiku",
  "stream": true
}'
```

You'll receive multiple JSON objects, one per token:
```json
{"model":"llama3.1","response":"Silent","done":false}
{"model":"llama3.1","response":" morning","done":false}
{"model":"llama3.1","response":" dew","done":false}
...
{"model":"llama3.1","response":"","done":true}
```

This is how you build that ChatGPT-style typing effect.

## Using Ollama from JavaScript

Install the official client:
```bash
npm install ollama
```

Basic example:
```javascript
import ollama from 'ollama';

const response = await ollama.chat({
  model: 'llama3.1',
  messages: [{ role: 'user', content: 'Explain async/await' }],
});

console.log(response.message.content);
```

Streaming example:
```javascript
const response = await ollama.chat({
  model: 'llama3.1',
  messages: [{ role: 'user', content: 'Write a short story' }],
  stream: true,
});

for await (const part of response) {
  process.stdout.write(part.message.content);
}
```

The JavaScript client handles all the HTTP details and gives you a clean async interface.

## Using Ollama from Python

Install the package:
```bash
uv pip install ollama # or just `pip install ollama`
```

Basic usage:
```python
import ollama

response = ollama.chat(
    model='llama3.1',
    messages=[
        {'role': 'user', 'content': 'What is recursion?'}
    ]
)

print(response['message']['content'])
```

Streaming:
```python
stream = ollama.chat(
    model='llama3.1',
    messages=[{'role': 'user', 'content': 'Count to 10'}],
    stream=True
)

for chunk in stream:
    print(chunk['message']['content'], end='', flush=True)
```

## Creating Custom Models with Modelfiles

You can customize model behavior by creating a Modelfile. This lets you set system prompts, adjust temperature, or build specialized models.

Create a file called `Modelfile`:
```
FROM llama3.1

PARAMETER temperature 0.8
PARAMETER top_p 0.9

SYSTEM """
You are a helpful coding assistant. You provide concise, accurate code examples.
Always explain your reasoning. Format code with proper syntax highlighting.
"""
```

Build your custom model:
```bash
ollama create my-coding-assistant -f Modelfile
```

Use it:
```bash
ollama run my-coding-assistant
```

Your model now has custom behavior built in. This is powerful for creating domain-specific assistants.

### Common Modelfile parameters

- `temperature`: Controls randomness (0.0 = deterministic, 1.0 = creative)
- `top_p`: Nucleus sampling threshold (0.9 is a good default)
- `top_k`: Limits to top K tokens (50-100 is common)
- `presence_penalty`: Discourages repeating topics
- `frequency_penalty`: Discourages repeating exact words
- `num_ctx`: Context window size (default 2048, increase for longer conversations)
- `stop`: Custom stop sequences
- `seed`: For reproducible outputs

## Practical Use Cases

### Local code completion

Run Codellama and hit it from your editor. No sending proprietary code to external APIs.

### Offline AI assistance

Download models before traveling. Work on flights or anywhere without internet.

### Rapid prototyping

No API rate limits means you can iterate fast without worrying about costs.

### Data privacy

Keep sensitive data on your machine. Medical records, legal documents, financial info — none of it leaves your control.

### Learning and experimentation

Try different models and parameters without burning through API credits.

## Troubleshooting

### Model won't load - out of memory

You're trying to run a model bigger than your RAM. Try a smaller variant:
- Instead of `llama3.1:70b`, use `llama3.1:8b`
- Check available models: `ollama list`

### Slow performance

CPU inference is slow, especially for large models. Options:
- Use a smaller model
- Get a machine with more RAM
- Use a GPU (NVIDIA cards work best)

Kill existing processes or change the port:
```bash
OLLAMA_HOST=0.0.0.0:11435 ollama serve
```

### Can't connect from another machine

By default, Ollama only listens on localhost. To expose it:
```bash
OLLAMA_HOST=0.0.0.0:11434 ollama serve
```

Use with caution. Anyone who can reach your machine can now use your LLM.

### GPU not being detected

Check NVIDIA drivers:
```bash
nvidia-smi
```

If that fails, your GPU drivers aren't installed properly. On Linux:
```bash
# Ubuntu/Debian
sudo apt install nvidia-driver-525

# Restart Ollama after installing drivers
sudo systemctl restart ollama
```

### Model gives weird or incorrect outputs

Try adjusting temperature and top_p in your Modelfile or API calls. Lower temperature (0.3-0.5) gives more focused, deterministic responses.

## Performance Tips

**Use quantized models**: Most Ollama models are already quantized (compressed) for faster inference. You'll see tags like `q4_0` or `q8_0`. Lower numbers = more compression, less quality, but faster.

**Increase context window for longer conversations**:
```bash
ollama run llama3.1 --num-ctx 4096
```

**Pre-load models**: The first request is slow because Ollama loads the model into memory. After that, it's fast. Keep Ollama running and models stay loaded.

**Batch similar requests**: If you're processing multiple items, send them in quick succession while the model is hot.

## Comparison with Cloud APIs

### When to use Ollama

- You need data privacy
- You want to avoid API costs
- You work offline frequently
- You're prototyping and need fast iteration
- You have decent hardware (16GB+ RAM, or a good GPU)

### When to use cloud APIs

- You need the absolute best quality (GPT-4, Claude Opus)
- You don't have strong hardware
- You need guaranteed uptime and scaling
- You want someone else to handle model updates

There's no wrong choice. Many developers use both — Ollama for development and testing, cloud APIs for production.

## Going Further

### Running Ollama in Docker

```bash
docker run -d -v ollama:/root/.ollama -p 11434:11434 --name ollama ollama/ollama
```

Useful for deployment or keeping your system clean.

### Setting up auto-start

**macOS**: Ollama auto-starts when you install the app.

**Linux**: Already configured if you used the install script.

**Windows**: Runs as a service automatically.

To disable:
```bash
# Linux
sudo systemctl disable ollama

# macOS
launchctl unload ~/Library/LaunchAgents/com.ollama.ollama.plist
```

### Multi-GPU setup

If you have multiple GPUs, Ollama uses them automatically. Control which GPUs with:
```bash
CUDA_VISIBLE_DEVICES=0,1 ollama serve
```

## Conclusion

Ollama makes running LLMs locally practical. Download a model, send it prompts via HTTP, get responses back. No complex setup, no external dependencies.

Start with a small model like Phi or Mistral. Once you're comfortable, experiment with larger models and custom Modelfiles. The flexibility is worth it.

If you're building applications that need AI but can't send data to external APIs, or if you're tired of paying per-token, Ollama is your answer.

## Quick Reference

```bash
# Install (macOS)
brew install ollama

# Install (Linux)
curl -fsSL https://ollama.ai/install.sh | sh

# Run a model
ollama run llama3.1

# List models
ollama list

# Pull a model
ollama pull mistral

# Delete a model
ollama rm mistral

# API call
curl http://localhost:11434/api/generate -d '{
  "model": "llama3.1",
  "prompt": "Hello world",
  "stream": false
}'
```

## Prerequisites

This guide assumes you have:
- A Mac, Linux, or Windows machine
- At least 8GB RAM (16GB+ recommended)
- Basic familiarity with command line
- curl or another way to make HTTP requests

Optional but recommended:
- NVIDIA GPU with 8GB+ VRAM for faster inference
- 50GB+ free disk space if you plan to download multiple large models
