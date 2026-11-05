# CAIS website v0.3 — copy, UI and discovery audit

Audit date: 5 November 2026. Severity: P0 blocks publication; P1 materially affects trust or conversion; P2 is enhancement.

## Outcome

The review build is now an approximately 80% publication-ready content and experience system. It has eight focused routes, a consistent responsive UI, a complete decision journey, the first evidence-led article and production discovery scaffolding. The remaining 20% is mostly school-owned truth, approved media, operational workflow and CMS/backend implementation.

## Baseline issues and response

| Priority | Baseline issue | v0.3 response | Residual gate |
|---|---|---|---|
| P0 | Supplied map pointed to QSI, not CAIS | removed; provisional coordinate map is visibly labelled | school must confirm exact address and pin |
| P0 | Public review prototype could be indexed | `noindex,nofollow` on every page plus review `robots.txt` | replace both for production launch |
| P0 | Hypotheses could read as school facts | internal review notes and production-gate language | school/agency approval of claims |
| P0 | hash-based SPA routes weaken durable discovery | converted to real directory URLs | production host rewrites and canonical URLs |
| P1 | emotional promise appeared before practical facts | five-second facts beside the promise | confirm phone, hours, stage ages and availability |
| P1 | broad values lacked observable proof | pillar practice, day flow, contextual captions, article | educator validation and fresh first-hand evidence |
| P1 | parent comparison information was incomplete | dedicated Curriculum, Admissions, School Life and Contact pages | fees, schedule, class sizes, language/support facts if approved |
| P1 | trust depended mainly on imagery | vision/mission, founders, source notes and content architecture | verified roles, biographies, qualifications, policies and permissions |
| P1 | relocating-family journey was implicit | online conversation, current location and preferred start | confirm whether the school can support this workflow |
| P1 | AI/Search discoverability lacked entity structure | School JSON-LD, Article JSON-LD, descriptive titles, internal links | production canonical URLs, sitemap, indexable robots and Search Console |
| P2 | experience felt static | restrained reveal, depth and hover states | performance tune on final media |
| P2 | repeated rectangles and capsule buttons felt editorial rather than early-years | selective organic masks, asymmetric corners, play-object geometry and varied button shapes across roughly 20% of the system | keep the effect restrained when final media is added |
| P2 | interaction access | skip link, keyboard dialogs/menu, focus states, reduced motion | formal WCAG pass on production build |

## Copy system

The copy follows four levels:

1. **Fact:** British curriculum, ages 2–7, Thalang, EYFS and KS1.
2. **Promise:** happiness, relationships, nature, mindfulness and strong foundations.
3. **Practice:** what a child or educator actually does.
4. **Decision:** the next page or action that helps the parent evaluate fit.

This prevents the site from sounding either overly corporate or too simple. Technical terms such as EYFS, Key Stage 1, structured data and purposeful play are used only when they educate the reader or improve factual precision.

## Information architecture

- `/` — fast orientation and positioning
- `/why-cais/` — philosophy, values, vision, mission and trust
- `/curriculum/` — stages, learning areas and learning model
- `/school-life/` — first-hand evidence and atmosphere
- `/admissions/` — process expectations, relocation and questions
- `/articles/` — owned expertise and discovery content
- `/articles/nature-connected-learning/` — first evidence-led article
- `/contact/` — visit/question/online-conversation conversion

Homepage sequence: orientation → practical facts → learning approach → day structure → visual proof → silent classroom-video moment → current event/announcement → family-fit pathways → owned expertise → visit CTA.

## Discovery implementation notes

- The visible FAQ remains useful to parents, but FAQ rich-result schema is intentionally not claimed. Google now limits FAQ rich results mainly to authoritative government and health sites.
- Structured data describes visible facts only; it does not invent accreditation, fees, ratings, reviews or opening hours.
- The review deployment is intentionally blocked from indexing. Production release must remove the review banner and noindex controls, add canonical URLs and a sitemap, then verify Search Console.
- Search and AI visibility should be monitored as a learning loop, not guaranteed as a citation or ranking outcome.

## Production acceptance gates

1. School confirms official name, phone, email, postal address and map pin.
2. School confirms curriculum wording, class-age/cutoff map, term dates, hours and admissions workflow.
3. Educator reviews curriculum and first article for accuracy.
4. School confirms publication rights for every child/staff image and video.
5. Partner approves enquiry routing, privacy notice, retention and response owner.
6. Production build replaces noindex/robots, adds canonical/sitemap and validates live structured data.

