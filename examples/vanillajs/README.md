# Vanilla JS x Video API Web Components

This demo was created with [Stackblitz's Static Starter App](https://stackblitz.com/fork/web-platform) to create a barebones application to focus on integrating the Web Components.

Deployed application:

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/fork/github/opentok/web-components/tree/main/examples/vanillajs)

## The Web Components

- `<video-publisher>` : Initializes a publisher and publishes to the session. [more info](https://github.com/opentok/web-components/tree/main/video-publisher)
- `<video-subscribers>` : Subscribes and displays other streams in the session. [more info](https://github.com/opentok/web-components/tree/main/video-subscribers)


## How to use

### 1. Get opentok.js
place into your index.html
```html
<script src="https://static.opentok.com/v2/js/opentok.min.js"></script>
```

### 2. Get the Web Components

install to your project
```bash
npm i @vonage/video-publisher
npm i @vonage/video-subscribers
```
then import into your project
```js
import '@vonage/video-publisher/video-publisher.js';
import '@vonage/video-subscribers/video-subscribers.js';
```

OR use a CDN and place in your index.html file
```html
<script type="module" src="https://unpkg.com/@vonage/video-publisher@latest/video-publisher.js?module"></script>
<script type="module" src="https://unpkg.com/@vonage/video-subscribers@latest/video-subscribers.js?module"></script>

```

### 3. Place the Web Components
where you want them to show up in your app
```html
<video-publisher width="360px" height="240px" #publisher></video-publisher>
<video-subscribers width="360px" height="240px" #subscribers></video-subscribers>
```

### 4. Get references to the Web Components
```js
const videoPublisherEl = document.querySelector('video-publisher');
const videoSubscribersEl = document.querySelector('video-subscribers');
```

### 5. Get `apiKey`, `sessionId`, and `token`
>**Note**: In production applications, they are retrieved from the server [more info](https://tokbox.com/developer/sdks/server/). For this demo, they are hardcoded.

### 6. Create a session
```js
const session = OT.initSession(apiKey, sessionId);
```

### 7. Set the session and token for Web Components
```js
videoPublisherEl.session = session;
videoPublisherEl.token = token;
videoSubscribersEl.session = session;
videoSubscribersEl.token = token;
```

### That's it!
