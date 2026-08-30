# QA Report

Date: 2026-08-30

## Automated

- Production build: passed
- Static route compilation: passed for new feature, solution, demo, pricing and migration pages
- Local HTTP smoke test: passed for home, hubs, representative detail pages, pricing, migration and demo
- Discovery files: `robots.txt`, `sitemap.xml` and `llms.txt` returned HTTP 200 locally
- Sitemap output: 39 canonical `fitbase.com.tr` URLs
- Detail-page output: canonical URL, one H1, BreadcrumbList and FAQPage detected
- Legacy preview-domain scan: no match in public app/source content
- Empty `href="#"` scan: no match in public app/source content

## Required live checks

- `robots.txt`, `sitemap.xml`, `llms.txt` return HTTP 200
- canonical and Open Graph URLs use `https://fitbase.com.tr`
- `www` and HTTP variants redirect once to the canonical host
- all sitemap pages return 200 and contain a single H1
- structured data validates and matches visible content
- WhatsApp demo and email fallback work on mobile
