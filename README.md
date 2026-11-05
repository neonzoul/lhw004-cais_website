# CAIS website prototype v0.3

Public static prototype for the CAIS client review. It is approximately 80% representative of the intended website experience; remaining gaps are approved content, media rights, final admissions data and the production backend/CMS.

- Clean public preview: `https://neonzoul.github.io/lhw004-cais_website/`
- Public presenter: `https://neonzoul.github.io/lhw004-cais_website/presenter.html`

## Open locally

```powershell
python -m http.server 4173 -d dist
```

- Clean website preview: `http://localhost:4173/`
- Presenter with desktop/mobile controls and internal annotations: `http://localhost:4173/presenter.html`

The clean preview contains no presentation controls. Presenter loads `?presentation=1`, which enables numbered note pins and an on/off review control.

## Routes

`/` · `/why-cais/` · `/curriculum/` · `/school-life/` · `/admissions/` · `/articles/` · `/articles/nature-connected-learning/` · `/contact/`

## Implemented

- Responsive eight-route prototype and working navigation.
- Five-second parent decision facts, values-to-practice storytelling and real CAIS media.
- Vision, Mission, curriculum stage map, school-life evidence, admissions and relocating-family paths.
- First evidence-led article with visible sources and Article structured data.
- School structured data, favicon, descriptive metadata and production discovery checklist.
- Internal presentation annotations kept outside the clean website view.
- Visit/enquiry form simulation; no data leaves the browser.
- Only supplied CAIS media or clearly labelled placeholders.

Read `RESEARCH_AND_HYPOTHESES.md`, `COPY_AND_UI_AUDIT.md`, `CONTENT_REQUESTS.md`, `PRESENTATION_NOTES.md`, `SOURCE_EVIDENCE.md` and `PRODUCTION_RELEASE_CHECKLIST.md` before school-facing use.

## Publication status

Mos authorized a public client-review deployment. This is a **prototype for review**, not the production school website. Every route displays this status, and supplied CAIS media and factual placeholders still require the school's final confirmation before production use.

The review build uses page-level `noindex,nofollow` and a blocking `robots.txt`. These protections must be replaced for production. GitHub Pages deploys when reviewed files under `dist/` or the Pages workflow change on `main`; it can also be run manually through `workflow_dispatch`.
