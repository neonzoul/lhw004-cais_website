# CAIS website prototype v0.2

Local static prototype for the internal CAIS review. It is approximately 80% representative of the intended website experience; remaining gaps are approved content, media rights, final admissions data and the production backend/CMS.

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

This repository is for **internal review**. Supplied CAIS media remains pending publication approval.

The GitHub Pages workflow is prepared as `workflow_dispatch` only. Pushing to `main` does not deploy the site; Mos must explicitly approve public publication before anyone runs the workflow, enables Pages or changes repository visibility.
