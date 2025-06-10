---
layout: ../../layouts/BlogPost.astro
title: "Quickly Use an AI LLM with a React App"
description: "Your React app can use the Hugging Face Inference API to consume a machine learning model with ."
pubDate: 2025-05-12
author: Rap Payne
time-to-read: 5 minutes
url: /blog/huggingface-spaces
cloudinaryImageFileName: v1746633734/huggingface-spaces_i2hd4j.png
categories: ["machine learning", "data science", "API", "tutorial"]
---

So you want to write and host an API that uses a pretrained machine learning model? Maybe your client needs to be alerted when a user enters a scary comment on their website. Is the customer angry? Impatient? Happy? Within a few minutes, you can add this capability to their site. Here's how.

There are a few [prerequisites](#prerequisites).

## Step 1: Create a New Space

Hugging Face will host a web app that runs any pretrained ML model. You decide the model and interface. They call these "Spaces". That's nice and all but our goal is to create an API. We'll use the web app to host our model and expose it via HTTP. One of their options, "Gradio", allows that.

1. Log in to your [Hugging Face](https://huggingface.co/) account.
2. Navigate to [Spaces](https://huggingface.co/spaces).
3. Click the "**+ New Space**" button.
4. **Space Name**: A unique name for your Space like `yourSpaceName`.
5. **Space SDK**: Select `Gradio`, then `blank`.
RAP: IMAGE HERE
6. **Visibility**: Set it to `Public` or `Private` as needed.
7. Click the "**Create Space**" button.
8. When it's finished building, close the log window.

## Step 2: Sync your files with your local machine using git
Editing the code is best done locally. We'll use git to sync our files with your Hugging Face repository.

1. Get a security token from your Hugging Face account:
  - Go to your [settings](https://huggingface.co/settings/tokens).
  - Click on "**New token**".
  - Token type: `Write`.
  - Token name: `spaces`.
  - Click "**Create token**".
  - Copy the token and save it somewhere safe. You won't be able to see it again.

2. Clone your new Spaces repository locally:
  ```bash
  git clone https://huggingface.co/spaces/<yourUsername>/<yourSpaceName>
  ```

3. Open VS Code (or your favorite text editor) in the cloned directory:
  ```bash
code yourSpaceName
  ```

You'll see a few files:
  - `README.md`: Notes for yourself.
  - `app.py`: The main application file.
  - `requirements.txt`: A file to specify dependencies.
  - `.gitattributes`: Specifies how files are treated in the repository. You can ignore it.

4. Apply your token
```bash
git remote set-url origin https://<yourUserName>:<yourToken>@huggingface.co/spaces/<yourUserName>/<yourSpaceName>
```

5. Test it out by pushing a change:
- Edit `app.py`
```python
import gradio as gr

def predict(input):
    return f"predict successfully ran with {input}"

demo = gr.Interface(fn=predict, inputs='text', outputs='label')
demo.launch()
```
- Run the following commands in your terminal:
  ```bash
  git add .
  git commit -m "Simple read and write ability"
  git push
  ```
- Go back to your Hugging Face Space. Click **Files** and choose `app.py`. You should see your changes.

6. Test it out at `https://huggingface.co/spaces/<yourUsername>/<yourSpaceName>`. You should see a Gradio interface with a "Submit" button.
IMAGE HERE, RAP

Notice at the bottom, you'll see a "Use via API" button. It has code to consume the API. I'll give you that code in a minute.


## Step 3: Get the web API working via HTTP
1. In your regular React website, install the Gradio client:
```bash
npm install @gradio/client
```
1. Edit your React component that has a textbox, button, and output label:
RAP: SHOULDN'T WE BE READING AN INPUT FROM THE USER? MAYBE A TEXT BOX WITH A SUBMIT BUTTON?
```javascript
import { Client } from "@gradio/client";

const response_0 = await fetch("https://raw.githubusercontent.com/gradio-app/gradio/main/test/test_files/bus.png");
const exampleImage = await response_0.blob();
						
const client = await Client.connect("YourUsername/YourSpaceName");
const result = await client.predict("/predict"));

console.log(result.data);
```
1. Run your React app and test it out. You should see the result on the page.

1. Bonus! Best practice says to pull this into a function in a separate file but hey, you do you.

## Step 4: Add Your Model and API Code
This is the hard part. The code you write will depend on the model you choose but good news; the model creator will usually provide a sample code snippet.

For this example, I'm using [SamLowe/roberta-base-go_emotions](https://huggingface.co/SamLowe/roberta-base-go_emotions).

1. Edit your `app.py` file. Clear out the existing code and replace it with code to load and run the model:
  ```python
  from transformers import pipeline

classifier = pipeline(task="text-classification", model="SamLowe/roberta-base-go_emotions", top_k=None)

sentences = ["I am not having a great day"]

model_outputs = classifier(sentences)
print(model_outputs[0])
# produces a list of dicts for each of the labels

# [{'label': 'sadness', 'score': 0.9998}]
  ```
  
  ```python
  from fastapi import FastAPI, Request
  from pydantic import BaseModel
  import torch
  from transformers import AutoModelForSequenceClassification, AutoTokenizer

  app = FastAPI()

  # Load model and tokenizer
  model_name = "distilbert-base-uncased-finetuned-sst-2-english"
  model_name = "SamLowe/roberta-base-go_emotions"
  model = AutoModelForSequenceClassification.from_pretrained(model_name)
  tokenizer = AutoTokenizer.from_pretrained(model_name)

  class InputData(BaseModel):
     text: str

  @app.post("/predict")
  async def predict(data: InputData):
     inputs = tokenizer(data.text, return_tensors="pt")
     outputs = model(**inputs)
     prediction = torch.argmax(outputs.logits, dim=1).item()
     return {"label": prediction}
  ```
3. Add any dependencies to the `requirements.txt` file:
  ```
  fastapi
  uvicorn
  torch
  transformers
  ```
4. git add, commit and push your changes:
  ```bash
  git add .
  git commit -m "Added model and API code"
  git push
  ```
5. Test it out at `https://huggingface.co/spaces/<yourUsername>/<yourSpaceName>`. You should see a Gradio interface with a "Submit" button.
IMAGE HERE, RAP
6. Test Your API. Use a tool like `curl` or Postman to test your API. For example:
```bash
curl -X POST https://huggingface.co/spaces/<yourUsername>/<yourSpaceName>/predict \
-H "Content-Type: application/json" \
-d 'I love this!'
```
IMAGE HERE, RAP
6. And finally, test it out in your React app. You should see the result on the page.
IMAGE HERE, RAP


## Conclusion

Congratulations! You've successfully deployed a machine learning model on Hugging Face Spaces and exposed it via an HTTP API. This setup is ideal for sharing your models with others while maintaining control over access.

For more advanced use cases, explore the Hugging Face documentation and experiment with additional features like custom domains and private Spaces.


## Prerequisites

This quick-and-dirty tutorial assumes you have ...

- An existing React web app to integrate with.
- A Hugging Face account. Sign up at [Hugging Face](https://huggingface.co/).
- A trained machine learning model selected. Find one [here](https://huggingface.co/models). In this tutorial, we used [SamLowe/roberta-base-go_emotions](https://huggingface.co/SamLowe/roberta-base-go_emotions).
- git installed on your local machine.
- Basic knowledge of JavaScript, Python and HTTP APIs.