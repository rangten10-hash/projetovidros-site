# Project architecture

- Render the standard reviewer card and Article author metadata in the shared `BlogPost` template, not per-post records, so existing and future articles stay consistent.
- Keep Espelhos LED neighborhood copy and titles in a shared deterministic module for both the page and prerendered metadata, so crawlers and visitors see matching local content.
- Keep the regular mirror gallery's category and caption metadata in the Espelhos page because its filters and photo presentation are specific to that page.