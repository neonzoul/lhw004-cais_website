const pages = [...document.querySelectorAll('[data-page]')];
const routeLinks = [...document.querySelectorAll('[data-route]')];
const menuButton = document.querySelector('.menu-button');
const siteNav = document.querySelector('.site-nav');
const form = document.querySelector('#prototype-form');

// Replace or reorder these objects to maintain the Home event/announcement slideshow.
// All current entries are explicit placeholders; no past event is represented as upcoming.
const eventItems = [
  {
    type: 'Event placeholder',
    title: 'Upcoming school event',
    meta: ['Date to be confirmed', 'Time to be confirmed', 'School location'],
    summary: 'Replace this card with the next approved school event, registration details and a current photograph.',
    image: 'assets/community-team.jpg',
    alt: 'CAIS school community reference image',
  },
  {
    type: 'Announcement placeholder',
    title: 'Latest school announcement',
    meta: ['School approval required', 'Publish date required'],
    summary: 'Use this space for a concise update that families need to see quickly, with a clear owner and date.',
    image: 'assets/learning-together.jpg',
    alt: 'Children learning together reference image',
  },
  {
    type: 'Calendar placeholder',
    title: 'A highlight from school life',
    meta: ['Real activity required', 'Educator context required'],
    summary: 'Share one verified learning moment and explain what children experienced—not only what happened.',
    image: 'assets/nature-art.jpg',
    alt: 'Nature-inspired art reference image',
  },
];

const presentationNotes = {
  journey: {
    title: 'The parent journey shapes the page order',
    body: '<p><strong>Start with your question. Move at your pace.</strong> is a presentation principle, not website copy. The live experience supports four needs: discover CAIS, assess fit, build trust and contact the school.</p>',
  },
  events: {
    title: 'Events should stay current without redesign work',
    body: '<p>The slideshow is driven by one editable JavaScript list. Current cards are labelled placeholders; the past July event is not presented as upcoming.</p>',
  },
  purpose: {
    title: 'Vision and mission need school-owned wording',
    body: '<p>The structure is ready, while the wording remains visibly provisional. Before launch, CAIS should approve the exact vision, mission and educational philosophy.</p>',
  },
  learning: {
    title: 'Learning is explained as a progression',
    body: '<p>Belong → Explore → Grow gives families a simple model. Official EYFS or curriculum terminology, age bands and assessment language must be confirmed before publication.</p>',
  },
  partners: {
    title: 'Outdoor partnerships require evidence',
    body: '<p>No partner is invented. Publish only approved organisations with the purpose of the activity, safeguarding approach, educator context and current evidence.</p>',
  },
  publishing: {
    title: 'School-owned publishing workflow',
    body: '<p><strong>Write → School review → Publish → Keep current.</strong> The final system should let the school edit pages and publish Articles without depending on a developer for every update.</p>',
  },
};

let eventIndex = 0;

function normaliseRoute(value) {
  const route = (value || 'home').replace(/^#/, '').split('?')[0];
  return pages.some((page) => page.dataset.page === route) ? route : 'home';
}

function showRoute(routeValue, scroll = true) {
  const route = normaliseRoute(routeValue);
  pages.forEach((page) => page.classList.toggle('is-active', page.dataset.page === route));
  routeLinks.forEach((link) => {
    const isActive = link.dataset.route === route;
    link.classList.toggle('is-active', isActive);
    if (isActive) link.setAttribute('aria-current', 'page');
    else link.removeAttribute('aria-current');
  });
  siteNav.classList.remove('is-open');
  menuButton.setAttribute('aria-expanded', 'false');
  document.title = `${route === 'home' ? 'Celestia Andaman International School' : route.replace('-', ' ')} · CAIS Prototype Review`;
  if (scroll) window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderEvents() {
  const stage = document.querySelector('.event-stage');
  const dots = document.querySelector('.event-dots');
  const item = eventItems[eventIndex];
  stage.innerHTML = `<article class="event-card"><img src="${item.image}" alt="${item.alt}"><div class="event-copy"><small>${item.type}</small><h3>${item.title}</h3><div class="event-meta">${item.meta.map((value) => `<span>${value}</span>`).join('')}</div><p>${item.summary}</p><span class="content-status">Sample content · replace before publication</span></div></article>`;
  dots.innerHTML = eventItems.map((event, index) => `<button class="event-dot" type="button" data-event-index="${index}" aria-label="Show ${event.title}" aria-pressed="${index === eventIndex}"></button>`).join('');
  dots.querySelectorAll('[data-event-index]').forEach((button) => button.addEventListener('click', () => {
    eventIndex = Number(button.dataset.eventIndex);
    renderEvents();
  }));
}

function changeEvent(offset) {
  eventIndex = (eventIndex + offset + eventItems.length) % eventItems.length;
  renderEvents();
}

function setupPresentationMode() {
  const params = new URLSearchParams(window.location.search);
  if (params.get('presentation') !== '1') return;
  const dock = document.querySelector('.review-dock');
  const toggle = document.querySelector('.review-toggle');
  const dialog = document.querySelector('.note-dialog');
  const close = document.querySelector('.dialog-close');
  dock.hidden = false;
  document.body.classList.add('presentation-mode');

  toggle.addEventListener('click', () => {
    const enabled = document.body.classList.toggle('presentation-mode');
    toggle.setAttribute('aria-pressed', String(enabled));
    toggle.textContent = `Presentation notes: ${enabled ? 'on' : 'off'}`;
    if (!enabled && dialog.open) dialog.close();
  });

  document.querySelectorAll('[data-note]').forEach((pin) => pin.addEventListener('click', () => {
    const note = presentationNotes[pin.dataset.note];
    document.querySelector('#note-title').textContent = note.title;
    document.querySelector('#note-body').innerHTML = note.body;
    dialog.showModal();
  }));
  close.addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', (event) => {
    if (event.target === dialog) dialog.close();
  });
}

window.addEventListener('hashchange', () => showRoute(location.hash));
routeLinks.forEach((link) => link.addEventListener('click', () => {
  const route = link.dataset.route;
  if (location.hash === `#${route}`) showRoute(route);
}));

menuButton.addEventListener('click', () => {
  const open = siteNav.classList.toggle('is-open');
  menuButton.setAttribute('aria-expanded', String(open));
});

document.querySelector('[data-event-prev]').addEventListener('click', () => changeEvent(-1));
document.querySelector('[data-event-next]').addEventListener('click', () => changeEvent(1));

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const result = form.querySelector('.form-result');
  result.hidden = false;
  result.focus();
});

renderEvents();
setupPresentationMode();
showRoute(location.hash, false);
