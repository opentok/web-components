const videoPublisherEl = document.querySelector('video-publisher');
const videoSubscribersEl = document.querySelector('video-subscribers');
const screenShareEl = document.querySelector('screen-share');
const audioToggle = document.querySelector('#audio-toggle');
const videoToggle = document.querySelector('#video-toggle');

// These values normally come from the backend in a production application, but for this demo, they are hardcoded
const apiKey = 'YOUR_API_KEY';
const sessionId = 'YOUR_SESSION_ID';
const token = 'YOUR_TOKEN';

// Initialize an OpenTok Session object
const session = OT.initSession(apiKey, sessionId);

// Set session and token for Web Components
videoPublisherEl.session = session;
videoPublisherEl.token = token;
videoSubscribersEl.session = session;
videoSubscribersEl.token = token;
screenShareEl.session = session;
screenShareEl.token = token;

audioToggle.addEventListener('click', () => {
  console.log('audioToggle!');
  videoPublisherEl.toggleAudio();
});

videoToggle.addEventListener('click', () => {
  console.log('videoToggle!');
  videoPublisherEl.toggleVideo();
});
