const menuButton = document.querySelector('.menu-button');
const siteNav = document.querySelector('.site-nav');
const pageName = document.body.dataset.page;

document.querySelectorAll('[data-nav]').forEach((link) => {
  if (link.dataset.nav === pageName) link.setAttribute('aria-current', 'page');
});

if (menuButton && siteNav) {
  menuButton.addEventListener('click', () => {
    const open = siteNav.classList.toggle('is-open');
    menuButton.setAttribute('aria-expanded', String(open));
  });
  document.addEventListener('click', (event) => {
    if (!siteNav.contains(event.target) && !menuButton.contains(event.target)) {
      siteNav.classList.remove('is-open');
      menuButton.setAttribute('aria-expanded', 'false');
    }
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      siteNav.classList.remove('is-open');
      menuButton.setAttribute('aria-expanded', 'false');
    }
  });
}

const reveals = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -30px' });
  reveals.forEach((item) => revealObserver.observe(item));
} else {
  reveals.forEach((item) => item.classList.add('is-visible'));
}

const notes = {
  positioning: {
    title: 'Hypothesis 01 · clarity before poetry',
    body: '<p>If parents can identify the school type, age range, curriculum, location and next step in five seconds, more qualified families will continue exploring. The emotional promise remains, but decision facts now sit beside it.</p>',
  },
  'value-proof': {
    title: 'Hypothesis 02 · value → practice → parent meaning',
    body: '<p>Generic words such as “holistic” or “nature-connected” become credible only when paired with what a child actually does and what that experience develops. Each pillar now links to a visible practice and a deeper page.</p>',
  },
  video: {
    title: 'Hypothesis 03 · help parents imagine their child here',
    body: '<p>Real classroom movement, sound and interaction reduce the distance between a claim and a felt experience. The review build links to existing CAIS video; production should host an approved captioned version on the school domain.</p>',
  },
  events: {
    title: 'Hypothesis 04 · currentness after understanding',
    body: '<p>Events appear after the school philosophy and lived experience are clear. At this point, one current update makes CAIS feel active and gives returning families a reason to revisit—without interrupting a new parent’s first five-minute journey.</p>',
  },
};

const eventItems = [
  {
    type: 'Past event · content model',
    title: 'Open House #3 · Beachside Edition',
    date: '18 July 2026',
    time: '10:00 AM–12:00 PM',
    location: 'Dusit Thani Laguna Phuket · Bang Tao Beach',
    summary: 'A beachside open house with a mini art exhibition, an exclusive offer and a lucky draw for one scholarship award.',
    highlight: 'Special highlight · Mini Art Exhibition',
    action: 'See how event registration works',
    href: 'contact/',
    status: 'Past-event reference · replace with the next approved event',
    image: 'assets/open-house-3-event.png',
    alt: 'CAIS Open House number 3 Beachside Edition poster from 18 July 2026',
  },
  {
    type: 'School-life story · publish date to confirm',
    title: 'Learning grows through shared experience',
    date: 'Publish date to confirm',
    time: 'One real moment',
    location: 'CAIS learning community',
    summary: 'A short story can show what children noticed, made or learned—turning an activity update into useful evidence of the school approach.',
    highlight: 'One activity · one learning purpose',
    action: 'Explore school life',
    href: 'school-life/',
    status: 'Prototype content · replace with an approved school story',
    image: 'assets/classroom-roleplay.jpg',
    alt: 'CAIS children taking part in a classroom role-play activity',
  },
  {
    type: 'Family announcement · content to confirm',
    title: 'The update families need next',
    date: 'Publish and expiry dates required',
    time: 'Time, if relevant',
    location: 'Location or online',
    summary: 'Reserve this position for a timely notice, calendar highlight or invitation. The production CMS should make updates simple for the school team.',
    highlight: 'Current information · clear next step',
    action: 'Ask the school',
    href: 'contact/',
    status: 'Prototype content · replace with the latest approved notice',
    image: 'assets/nature-collage.jpg',
    alt: 'CAIS children creating with natural materials',
  },
];

let eventIndex = 0;

function renderEvents() {
  const stage = document.querySelector('.event-stage');
  const dots = document.querySelector('.event-dots');
  if (!stage || !dots) return;
  const item = eventItems[eventIndex];
  stage.innerHTML = `<article class="event-card"><div class="event-image"><img src="${item.image}" alt="${item.alt}"></div><div class="event-copy"><small>${item.type}</small><h3>${item.title}</h3><dl class="event-details"><div><dt>Date</dt><dd>${item.date}</dd></div><div><dt>Time</dt><dd>${item.time}</dd></div><div><dt>Location</dt><dd>${item.location}</dd></div></dl><p>${item.summary}</p><p class="event-highlight">${item.highlight}</p><a class="event-action" href="${item.href}">${item.action} <span aria-hidden="true">→</span></a><span class="content-status">${item.status}</span></div></article>`;
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
  if (!dock || !toggle || !dialog) return;
  dock.hidden = false;
  document.body.classList.add('presentation-mode');
  toggle.addEventListener('click', () => {
    const enabled = document.body.classList.toggle('presentation-mode');
    toggle.setAttribute('aria-pressed', String(enabled));
    toggle.textContent = 'Notes: ' + (enabled ? 'on' : 'off');
    if (!enabled && dialog.open) dialog.close();
  });
  document.querySelectorAll('[data-note]').forEach((pin) => pin.addEventListener('click', () => {
    const note = notes[pin.dataset.note];
    document.querySelector('#note-title').textContent = note.title;
    document.querySelector('#note-body').innerHTML = note.body;
    dialog.showModal();
  }));
  dialog.querySelector('.dialog-close')?.addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', (event) => {
    if (event.target === dialog) dialog.close();
  });
}

const galleryDialog = document.querySelector('.gallery-dialog');
if (galleryDialog) {
  const dialogImage = galleryDialog.querySelector('img');
  const dialogCaption = galleryDialog.querySelector('p');
  document.querySelectorAll('.gallery-item').forEach((item) => item.addEventListener('click', () => {
    const sourceImage = item.querySelector('img');
    dialogImage.src = sourceImage.src;
    dialogImage.alt = sourceImage.alt;
    dialogCaption.textContent = item.dataset.caption || sourceImage.alt;
    galleryDialog.showModal();
  }));
  galleryDialog.querySelector('.dialog-close')?.addEventListener('click', () => galleryDialog.close());
  galleryDialog.addEventListener('click', (event) => {
    if (event.target === galleryDialog) galleryDialog.close();
  });
}

document.querySelectorAll('.enquiry-form').forEach((form) => form.addEventListener('submit', (event) => {
  event.preventDefault();
  const result = form.querySelector('.form-result');
  result.hidden = false;
  result.focus();
}));

document.querySelector('[data-event-prev]')?.addEventListener('click', () => changeEvent(-1));
document.querySelector('[data-event-next]')?.addEventListener('click', () => changeEvent(1));

renderEvents();
setupPresentationMode();
