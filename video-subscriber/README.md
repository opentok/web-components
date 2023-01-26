# \<video-subscriber>

This Web Component follows the [open-wc](https://github.com/open-wc/open-wc) recommendation and is meant to be used with the [OpenTok Video SDK](https://tokbox.com/developer/sdks/js/).

> A [Vonage Video API account](https://tokbox.com/account/user/signup) will be needed.

A goal is to simplify the code needed to create a chat room quickly. This Web Component will display an individual participant's feed to allow the developer more control over how and where the Web Component will be added. For example, make a screen share stream larger and on top of particpants' video streams.

## Installation

```bash
npm i @vonage/video-subscriber
```

## Usage

### import from node modules

```html
<script type="module">
  import '@vonage/video-subscriber/video-subscriber.js';
</script>
```

### OR using a CDN
```html
<script type="module" src="https://unpkg.com/@vonage/video-subscriber@latest/video-subscriber.js?module"></script>
```

### Attributes that can be used (optional):

- `width` : set the width of each video in video subscribers. Can be in pixels (ex: "360px") or a percentage (ex: "75%"). Default is "100%".
- `height` : set the height of each video in video subscribers. Can be in pixels (ex: "240px") or a percentage (ex: "55%"). Default is "100%".

### Custom Events to listen for

- `error` : contains details if there was an error subscribing to the stream
- `subscribed` : contains details of subscriber if successful [Subscriber Object](https://tokbox.com/developer/sdks/js/reference/Subscriber.html)
- `unsubscribed` : contains details of subscriber unsubscribed [Subscriber Object](https://tokbox.com/developer/sdks/js/reference/Subscriber.html)

## Getting it to work

1. Listen for `streamCreated` event on the [Session Object](https://tokbox.com/developer/sdks/js/reference/Session.html) 
2. Create a <video-subscriber> Element
3. Set Session and Stream properties on the Web Component
4. Append the element to a container

an example using Vanilla JS
```javascript
const videoSubscriberContainer = document.querySelector("#video-subscriber-container");
session.on("streamCreated", function(event) {
  const videoSubscriberEl = document.createElement("video-subscriber");
  videoSubscriberEl.setAttribute("id", `${event.stream.streamId}`);
  videoSubscriberEl.session = session;
  videoSubscriberEl.stream = event.stream;
  videoSubscriberContainer.appendChild(videoSubscriberEl);
});

```

>**Note**: This can vary with library / framework (see [examples folder](../examples))


## Linting and formatting

To scan the project for linting and formatting errors, run

```bash
npm run lint
```

To automatically fix linting and formatting errors, run

```bash
npm run format
```

## Testing with Web Test Runner

To execute a single test run:

```bash
npm run test
```

To run the tests in interactive watch mode run:

```bash
npm run test:watch
```

## Demoing with Storybook

To run a local instance of Storybook for your component, run

```bash
npm run storybook
```

To build a production version of Storybook, run

```bash
npm run storybook:build
```


## Tooling configs

For most of the tools, the configuration is in the `package.json` to minimize the amount of files in your project.

If you customize the configuration a lot, you can consider moving them to individual files.

## Local Demo with `web-dev-server`

```bash
npm start
```

To run a local development server that serves the basic demo located in `demo/index.html`
