const newsItems = [
  {
    category: 'School News',
    date: 'Sep 19',
    title: 'New student leadership council announced',
    description: 'This year’s council will help coordinate spirit events and student voice initiatives across campus.'
  },
  {
    category: 'Athletics',
    date: 'Sep 17',
    title: 'Varsity team opens season with strong win',
    description: 'The Lions came away with a decisive first-game victory and a standout performance from the defense.'
  },
  {
    category: 'Community',
    date: 'Sep 14',
    title: 'Parent volunteer signup is now live',
    description: 'Families are encouraged to sign up for event support, transportation, and school spirit initiatives.'
  }
];

const eventItems = [
  {
    title: 'Homecoming Week',
    type: 'Event',
    date: 'Sep 27',
    text: 'Spirit week activities and Friday night kickoff celebration.'
  },
  {
    title: 'Football vs Northview',
    type: 'Game Day',
    date: 'Sep 27',
    text: 'Main stadium • 7:00 PM • Community pep rally at 5:30 PM.'
  },
  {
    title: 'Senior Parent Meeting',
    type: 'Announcement',
    date: 'Sep 30',
    text: 'College planning and graduation update session for families.'
  }
];

const newsGrid = document.getElementById('newsGrid');
const eventGrid = document.getElementById('eventGrid');

if (newsGrid) {
  newsGrid.innerHTML = newsItems
    .map(
      (item) => `
        <article class="news-card">
          <div class="news-thumb"></div>
          <div class="news-body">
            <div class="news-meta">
              <span>${item.category}</span>
              <span>${item.date}</span>
            </div>
            <h3>${item.title}</h3>
            <p>${item.description}</p>
          </div>
        </article>
      `
    )
    .join('');
}

if (eventGrid) {
  eventGrid.innerHTML = eventItems
    .map(
      (item) => `
        <article class="event-card">
          <div class="event-body">
            <div class="event-meta">
              <span class="event-badge">${item.type}</span>
              <span>${item.date}</span>
            </div>
            <h3>${item.title}</h3>
            <p>${item.text}</p>
          </div>
        </article>
      `
    )
    .join('');
}

const form = document.querySelector('.editor-form');
if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const button = form.querySelector('button[type="submit"]');
    if (button) {
      button.textContent = 'Published';
      button.disabled = true;
      button.style.opacity = '0.75';
    }
  });
}
