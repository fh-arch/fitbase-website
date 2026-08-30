# AI and Search Bot Policy

Objective: allow search indexing and user-requested retrieval while declining general model-training crawlers.

## Allowed public retrieval

- Googlebot, Bingbot
- OAI-SearchBot, ChatGPT-User
- Claude-SearchBot, Claude-User
- PerplexityBot, Perplexity-User
- Google-Extended (required if Gemini grounding access is desired; independent of Google Search ranking)

Each allowed group repeats private-path exclusions for `/api/`, `/admin/` and `/personel/`.

## Blocked training crawlers

- GPTBot
- ClaudeBot

Robots instructions are voluntary crawler controls, not authentication. Private routes must enforce access at the application and network layers.
