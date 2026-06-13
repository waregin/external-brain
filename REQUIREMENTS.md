# external-brain — Requirements & Context

> This is the **umbrella/meta repo** for External Brain OS. Its current job is documentation and coordination, not code.

## Purpose
Central home for External Brain OS: architecture decisions, module registry, cross-module conventions. The "very beginnings of manually creating this project" exist here; it needs to catch up with decisions made since.

## Known architectural facts to capture (verify/correct in session)
- **Modules in flight:** priority-os (task prioritization; TickTick ~42k tasks + GitHub + manual input → recommendation written back to TickTick via cron, `rtp` tag, 8am reminder), email-os (functional, issues-driven), personal-content-os, trove-os (collections/home inventory; PostgreSQL schema done; API-first; multi-tenant from phase 1), media-os, fun-todo-os, pet-care-os (planned; cat food module needed mid-July), feed-os (planned; podcast/YT/RSS), knowledge-rag (planned; 20k+ ebook RAG)
- **Stack patterns so far:** PostgreSQL, Python, cron jobs, TickTick as the surfacing layer, Claude API for scoring
- **Infra:** local AI stack = Ollama + Open WebUI, blocked behind Arch Linux + KDE Plasma migration + RTX 4080 swap
- **Naming convention:** `*-os` module naming

## Requirements
- **Functional:** README with module registry (status, repo link, one-line purpose, session location); `decisions/` folder of ADRs (architecture decision records) capturing choices already made; cross-module conventions doc (DB naming, config, tagging like `rtp`/`needs-breakdown`)
- **Non-functional:** Low-ceremony — short ADRs, one decision per file

## First session objectives
1. Analyze repo; build the module registry from this doc + repo reality
2. Backfill ADRs for decisions listed above (Reggie supplies corrections)
3. Open issues for missing documentation; label one `next`
