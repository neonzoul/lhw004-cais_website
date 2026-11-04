# CAIS prototype v0.2 — deployment handoff

## Public review

- Clean preview: https://neonzoul.github.io/lhw004-cais_website/
- Presenter: https://neonzoul.github.io/lhw004-cais_website/presenter.html
- Repository: https://github.com/neonzoul/lhw004-cais_website
- Published prototype commit: `267edc0701331e248106f9604e3796bfaeeb16c0`
- GitHub Actions run: https://github.com/neonzoul/lhw004-cais_website/actions/runs/41868428099

Mos authorized public client review on 4 November 2026. This deployment is a review prototype rather than the production school website.

## Production smoke evidence

Smoke-tested on 4 November 2026 at 23:39 Asia/Bangkok against the public URL.

- Seven routes passed: Home, About, Curriculum, School Life, Admissions, Articles and Contact.
- Clean Preview hides all internal review controls and note pins.
- Presentation Mode, note dialog, Escape key and note visibility toggle passed.
- Event previous/next and dot navigation passed.
- Desktop 1440 px and mobile 390 px showed no horizontal overflow.
- Required Vision/Mission, Management Team, Learning Journey and Outdoor Learning Partnerships sections were present.
- All referenced images loaded.
- Enquiry form simulation passed without transmitting data.
- No console errors or page errors were observed.

## Remaining production inputs

See `CONTENT_REQUESTS.md` for the approved content, media rights, school facts, admissions workflow and ownership still required before production implementation.
