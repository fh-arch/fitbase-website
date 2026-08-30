# Fitbase SEO + GEO + AEO Audit

Date: 2026-08-30

## Baseline findings

- The canonical domain is `https://fitbase.com.tr`; old preview/hosting domains must not appear in canonical tags, structured data or public content.
- The site had no crawlable B2B feature or industry pages. Navigation mostly pointed to home-page fragments.
- `llms.txt` was empty and robots policy covered only two search crawlers.
- Product mockups and copy contained unsourced outcome numbers, setup times, service levels, integrations and testimonials.
- Legal identity exists centrally in `src/legalEntity.ts` but was not present in Organization structured data.

## Implemented

- Added crawlable feature, solution, pricing, demo and migration pages with unique metadata.
- Added visible FAQ content with matching FAQ schema, plus WebPage and BreadcrumbList schema.
- Separated search/user retrieval crawlers from training crawlers in robots policy.
- Added a canonical, factual `llms.txt` and expanded XML sitemap coverage.
- Added legal publisher identity and contact data to Organization schema.
- Removed unsourced homepage outcome, SLA, integration, setup-time and customer-proof claims from the main conversion flow.

## Remaining external work

- Verify canonical host redirect at Cloudflare/Nginx: `http` and `www` must permanently redirect to `https://fitbase.com.tr`.
- Register and verify Google Search Console and Bing Webmaster Tools; submit `/sitemap.xml`.
- Add analytics only after a consent and legal review. No analytics provider is assumed by this audit.
- Obtain verified customer evidence before publishing testimonials or numerical results.
