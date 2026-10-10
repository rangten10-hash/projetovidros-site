# Project architecture

- Render the standard reviewer card and Article author metadata in the shared `BlogPost` template, not per-post records, so existing and future articles stay consistent.
- Keep Espelhos LED neighborhood copy and titles in a shared deterministic module for both the page and prerendered metadata, so crawlers and visitors see matching local content.
- Keep the regular mirror gallery's category and caption metadata in the Espelhos page because its filters and photo presentation are specific to that page.
- Render mirror material, protection and comparison content in the shared `MirrorQualitySection` on both main mirror pages so catalog claims remain consistent.
- Keep Max System product specifications, media and structured metadata in a shared module used by its catalog feature, dedicated page and prerender script, so visitors and crawlers see consistent information.
- Render the Max System carousel artwork in a dedicated responsive picture component so desktop and mobile use the appropriate image without duplicating image requests.