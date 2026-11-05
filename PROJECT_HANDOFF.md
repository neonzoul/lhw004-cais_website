# CAIS prototype v0.3 — public review handoff

## Release status

Mos completed the editorial review and explicitly approved the public push on 5 November 2026. The v0.3 review build is deployed at:

- Preview: `https://neonzoul.github.io/lhw004-cais_website/`
- Presenter: `https://neonzoul.github.io/lhw004-cais_website/presenter.html`
- Deployed commit: `febc2c0c979aaab85d2fc51586e764f1f6bd1ea4`
- GitHub Pages run: `41996160980`

This remains a public client-review prototype with noindex controls. It is not the production school website; `caisphuket.com`, DNS, hosting and email remain unchanged.

## Local review

```powershell
python -m http.server 4173 -d dist
```

- Clean preview: `http://localhost:4173/`
- Presenter: `http://localhost:4173/presenter.html`
- Source entry: `dist/index.html`

Opening `dist/index.html` directly also works for the main page, but local HTTP is required to test every real route correctly.

## What changed

- Rebuilt the prototype from a hash-based single page into eight focused, durable routes.
- Rewrote the parent journey around decision facts, school fit, visible practice and useful next actions.
- Added a restrained organic/playful visual language across selected media masks, card corners, geometry and CTA forms.
- Reduced the classroom-video section to media only; explanatory copy appears in Presentation Mode only.
- Restored Events & Announcements after the video and before family-fit paths as one current story at a time.
- Expanded the slideshow to support a real event post: poster, status, title, date, time, location, description, highlight, registration CTA and expiry state. Open House #3 is included as a clearly labelled past-event content model.
- Added the complete first article: “What nature-connected learning looks like for young children.”
- Added School and Article JSON-LD, favicon, descriptions, real internal links and review noindex controls.
- Added competitor/parent research, hypotheses, copy/UI audit and production release gates.

## Automated QA evidence

Final public browser suite completed on 5 November 2026 at 15:40 Asia/Bangkok.

- Eight routes returned HTTP 200 with one H1, description and review noindex.
- Desktop 1440 px and mobile 390 px had no horizontal overflow on every route.
- All referenced page images loaded.
- Event slideshow, gallery modal, enquiry-form simulation, presenter, presentation notes and mobile menu passed.
- School and Article JSON-LD parsed successfully.
- No console errors or page errors.
- Screenshots and machine report are in ignored local folder `.tmp_qa/v03-screenshots/` and `.tmp_qa/qa-v03-report.json`.

## Production gates still owned by the school/partner

- Official address and map pin, contact details, hours, age/cutoff map, terms, fees and admissions workflow.
- Leadership roles/biographies and educator sign-off on curriculum/article content.
- Publication permission for every child/staff image and video.
- Real current event/announcement content.
- Form destination, privacy/consent, response owner and operational SLA.
- Production CMS/hosting, canonical URLs, sitemap, indexable robots, analytics and Search Console.

See `CONTENT_REQUESTS.md` and `PRODUCTION_RELEASE_CHECKLIST.md` for the short operational lists.

## Git status

Implementation commits: `c77db7d` (content/UI), `cd6f939` (local handoff) and `febc2c0` (full event-announcement model).

Public deployment: successful at GitHub Pages run `41996160980`; eight-route production smoke passed.
