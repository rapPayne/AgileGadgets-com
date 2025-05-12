---
layout: ../../layouts/BlogPost.astro
title: "Hugging Face API Keys made Easy"
description: "You need Hugging Face security tokens to use their models and they're not super easy to understand. We spill the tea in this post."
date: 2025-05-12
author: Rap Payne
time-to-read: 5 minutes
url: /blog/hugging-face-api-keys-made-easy
cloudinaryImageFileName: v1747078803/HF_api_keys_fwijtk.png
tags: ["machine learning", "data science", "API"]
---

Hugging Face provides tons of Machine Learning tools but to use many of them you need an API key. Let's break down the process of getting and using those keys along with an explanation of the nuances of the different types of keys.

## To get a key

1. Log in to your [Hugging Face](https://huggingface.co/) account.
1. Go to your [tokens](https://huggingface.co/settings/tokens).
1. Click on "**Create new token**".
1. Choose your token type. [more on that below](#token-types).
1. Enter a unique name.
1. Click "**Create token**".
1. Copy the token and save it somewhere safe. This is the only time you'll be able to see it.
---
> Note: You can and should create many tokens, one for each project. This way, if one token is compromised, you can delete it without affecting your other projects.
---
## Token Types
**Read** - Read access only.

**Write** - Full read <u>and write</u> access to everything. <span class="danger">Dangerous!</span>
  
**Fine-grained** - Tuneable. This is the move!

Fine-grained access adheres to the most [secure](https://csrc.nist.gov/glossary/term/least_privilege) [practices](https://csrc.nist.gov/glossary/term/defense_in_depth). You can choose which activities:
- Repositories
- Inference
- Webhooks
- Collections
- Discussions and posts

And within those activities, you determine exactly what the token allows:
- Read
- Write
- Manage

Most of us are going to create the most dangerous token, the **Write** token and test with it. That's fine, but be sure to delete it and create a fine-grained token once it is working.