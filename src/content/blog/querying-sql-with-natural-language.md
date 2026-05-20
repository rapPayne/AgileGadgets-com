---
title: "Asking natural language questions to an AI to read your SQL database"
description: "Build a natural language interface for your PostgreSQL database using Python, LangChain, and Claude — ask questions in plain English, no SQL needed."
pubDate: 2026-05-19
author: Rap Payne
time-to-read: 10 minutes
url: /blog/querying-sql-with-natural-language
cloudinaryImageFileName: v1779242616/querying-sql-with-natural-language_xmelkp.png
categories: ["ai", "sql", "databases", "langchain", "postgresql", "python"]
---

Your database knows everything about your business. Your users know nothing about SQL. That's the gap we're closing today.

We'll build a natural language interface for any SQL database — ask it a question in plain English, get real data back. Questions like:

- "What are our top-selling products?"
- "Which customers ordered the most last month?"
- "What's the total value of inventory currently in stock?"

We're using Python, LangChain, Anthropic Claude, and PostgreSQL but the techniques apply to any other technology. Feel free to plug in your own. The full pipeline:

```mermaid
flowchart TD
    A[User Question] --> B[LLM Generates SQL]
    B --> C[Validate SQL]
    C --> D[Execute Query]
    D --> E[LLM Summarizes Results]
    E --> F[Answer]
```

Not all that complex. Extremely capable. Let's build it.

## Step 1 — Create the project

```bash
uv init ask-sql-natural-language-questions
cd ask-sql-natural-language-questions
```

## Step 2 — Install dependencies

```bash
uv add langchain langchain-anthropic langchain-community sqlalchemy psycopg2-binary python-dotenv
```

What each package does:

| Package | Purpose |
|---------|---------|
| `langchain` | Core LangChain |
| `langchain-anthropic` | Claude integration into LangChain |
| `langchain-community` | SQL database utilities |
| `sqlalchemy` | DB connection toolkit. Makes it easier to connect Python code to any DB |
| `psycopg2-binary` | PostgreSQL driver |
| `python-dotenv` | So you can put secrets in a .env file |

So `Python -> SQLAlchemy -> psycopg2 -> PostgreSQL`

## Step 3 — Configure environment variables

Create `.env` in the project root:

```env
ANTHROPIC_API_KEY=your_api_key_here
DATABASE_URL=postgresql+psycopg2://your_user:your_password@localhost:5432/your_db_name
```

On macOS, your database username is your macOS username by default — not `postgres`.

## Step 4 — Connect to PostgreSQL

Create `database.py`:

```python
from dotenv import load_dotenv
from sqlalchemy import create_engine
from langchain_community.utilities import SQLDatabase
import os

load_dotenv()

engine = create_engine(os.getenv("DATABASE_URL"))
db = SQLDatabase(engine)
```

LangChain's `SQLDatabase` inspects your schema — tables, columns, relationships, data types — and packages all of it up for the LLM. Claude will know exactly what it's working with.

## Step 5 — Create the Claude client

Create `llm.py`:

```python
from langchain_anthropic import ChatAnthropic

llm = ChatAnthropic(
    model="claude-sonnet-4-6",
    temperature=0
)
```

`temperature=0` is deliberate. We want boring, predictable SQL. This is one of the rare times you actually *don't* want creativity.

## Step 6 — Generate SQL from natural language

Create `sql_generation.py`:

```python
from database import db
from llm import llm

def generate_sql(question: str) -> str:
    schema = db.get_table_info()

    prompt = f"""You are a PostgreSQL expert.

Given this database schema:

{schema}

Convert the user's question into SQL.

Rules:
- Return ONLY SQL
- Use PostgreSQL syntax
- Never modify data
- Always include LIMIT 100 unless aggregation requires otherwise

Question: {question}
"""

    response = llm.invoke(prompt)
    return response.content.strip()
```

The schema goes into the prompt so Claude knows exactly what's available. No guessing or hallucinating table names. Obviously the tables and columns must be named logically or we'll need to provide the LLM with explanation of the goofy names.

## Step 7 — Protect your database

This step is optional. I'm including it to raise awareness that ...

>
> **Without protection, the AI could destroy your database.**
>

I recommend at minimum:
1. Use an account with read only privilege. This is the <a href="https://en.wikipedia.org/wiki/Principle_of_least_privilege" target="_blank" rel="noopener noreferrer">Principle of Least Privilege</a> in action.
2. Implement guardrails to limit the destructive SQL that is run. Like below.
3. More levels of protection are better than fewer — that's <a href="https://en.wikipedia.org/wiki/Defense_in_depth_(computing)" target="_blank" rel="noopener noreferrer">Defense in Depth</a>.

Create `validation.py`:

```python
FORBIDDEN = ["INSERT", "UPDATE", "DELETE", "DROP", "ALTER", "TRUNCATE"]

def validate_sql(sql: str):
    upper_sql = sql.upper()
    for word in FORBIDDEN:
        if word in upper_sql:
            raise ValueError(f"Forbidden SQL operation attempted: {word}")
```

## Step 8 — Execute the query

Create `query_execution.py`:

```python
from database import db

def run_query(sql: str):
    return db.run(sql)
```

## Step 9 — Summarize the results

Raw SQL output isn't user-friendly. Have the LLM explain it and draw insights from it.

Create `summarization.py`:

```python
from llm import llm

def summarize_results(question: str, sql: str, results: str) -> str:
    prompt = f"""User question:
{question}

SQL used:
{sql}

Results:
{results}

Explain the results clearly and concisely.
"""
    response = llm.invoke(prompt)
    return response.content
```

## Step 10 — Wire everything together

Create `main.py`:

```python
from sql_generation import generate_sql
from validation import validate_sql
from query_execution import run_query
from summarization import summarize_results

def ask_database(question: str):
    sql = generate_sql(question)
    validate_sql(sql)
    results = run_query(sql)
    answer = summarize_results(question, sql, results)

    return {
        "sql": sql,
        "results": results,
        "answer": answer
    }

question = input("Ask a natural language question: ")
response = ask_database(question)

print("\nGenerated SQL:")
print(response["sql"])

print("\nAnswer:")
print(response["answer"])
```

## Step 11 — Run it

```bash
uv run python main.py
```

Ask it something:

```
What are our top 5 selling products?
```

You get back the generated SQL:

```sql
SELECT p.product_name,
       SUM(od.quantity) AS total_sold
FROM order_details od
JOIN products p ON od.product_id = p.product_id
GROUP BY p.product_name
ORDER BY total_sold DESC
LIMIT 5;
```

And then a plain-English summary of the results. No SQL knowledge required on the user's end.


## Before You Ship This

I gave you a very simple solution. But here are a few things to tighten up before this goes anywhere near production in the real world:

- **Log generated SQL** — you need visibility into what's actually running
- **Add query timeouts** — a bad prompt can produce a slow query
- **Monitor expensive queries** — set up `pg_stat_statements` or equivalent
- **Review regularly** — AI-generated SQL can be creative in ways you don't want

Treat AI-generated SQL the same way you'd treat SQL from an untrusted user. Because that's basically what it is.

---

Need help implementing this pattern or training your team to build AI-powered data tools? <a href="https://agilegadgets.com/about" target="_blank" rel="noopener noreferrer">Reach out</a> — consulting and training available.
