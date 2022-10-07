# \<video-publisher>

This Web Ccomponent follows the [open-wc](https://github.com/open-wc/open-wc) recommendation and is meant to be used with the [OpenTok Video SDK](https://tokbox.com/developer/sdks/js/).

A goal is to simplify the code needed to create a chat room quickly. This Web Component will display the user's feed and publish to the session.

## Installation

```bash
npm i @vonage/video-publisher
```

## Usage

### import from node modules

```html
<script type="module">
  import '@vonage/video-publisher/video-publisher.js';
</script>
```

### OR using a CDN
```html
<script type="module" src="https://unpkg.com/@vonage/video-publisher@latest/video-publisher.js?module"></script>

```

### place tag in HTML

```html
<video-publisher></video-publisher>
```

### Attributes that can be used (optional):

- `width` : set the width of the video publisher. Can be in pixels (ex: "360px") or a percentage (ex: "75%"). Default is "100%".
- `height` : set the height of the video publisher. Can be in pixels (ex: "240px") or a percentage (ex: "55%"). Default is "100%".

```html
<video-publisher width="360px" height="55%"></video-publisher>
```

### Methods that can be called

- `toggleAudio()` : start/stop publishing audio
- `toggleVideo()` : start/stop publishing video

## Getting it to work

1. Get a reference to the Web Component.
2. Generate a Session and Token.
3. Pass Session and Token into Web Component reference.

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
