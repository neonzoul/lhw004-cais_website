# CAIS website prototype v0.2

Public static prototype for the CAIS client review. It is approximately 80% representative of the intended website experience; remaining gaps are approved content, media rights, final admissions data and the production backend/CMS.

- Clean public preview: `https://neonzoul.github.io/lhw004-cais_website/`
- Public presenter: `https://neonzoul.github.io/lhw004-cais_website/presenter.html`

## Open locally

```powershell
python -m http.server 4173 -d dist
```

- Clean website preview: `http://localhost:4173/index.html#home`
- Presenter with desktop/mobile controls and internal annotations: `http://localhost:4173/presenter.html`

The clean preview contains no presentation controls. Presenter loads `?presentation=1`, which enables numbered note pins and an on/off review control.

## Routes

`#home` · `#about` · `#curriculum` · `#life` · `#admissions` · `#articles` · `#contact`

## Implemented

- Responsive seven-route prototype and working navigation.
- Editable Home event/announcement slideshow (`eventItems` in `dist/app.js`).
- Vision, Mission, Management Team, Learning journey and Outdoor Learning Partnerships structures.
- Internal presentation annotations kept outside the clean website view.
- Static enquiry-form simulation; no data leaves the browser.
- Only supplied CAIS media or clearly labelled placeholders.

Read `CONTENT_REQUESTS.md`, `PRESENTATION_NOTES.md` and `SOURCE_EVIDENCE.md` before school-facing use.

## Publication status

Mos authorized a public client-review deployment on 4 November 2026. This is a **prototype for review**, not the production school website. Supplied CAIS media and factual placeholders still require the school's final confirmation before production use.

GitHub Pages deploys through the manual `workflow_dispatch` workflow. Pushing to `main` alone does not change the public prototype.
