# \<video-subscribers>

This Web Component follows the [open-wc](https://github.com/open-wc/open-wc) recommendation and is meant to be used with the [OpenTok Video SDK](https://tokbox.com/developer/sdks/js/).

A goal is to simplify the code needed to create a chat room quickly. This Web Component will display all the participants' feeds.

## Installation

```bash
npm i @vonage/video-subscribers
```

## Usage

### import from node modules

```html
<script type="module">
  import '@vonage/video-subscribers/video-subscribers.js';
</script>
```

### OR using a CDN
```html
<script type="module" src="https://unpkg.com/@vonage/video-subscribers@latest/video-subscribers.js?module"></script>

```

### place tag in HTML

```html
<video-subscribers></video-subscribers>
```

### Attributes that can be used (optional):

- `width` : set the width of each video in video subscribers. Can be in pixels (ex: "360px") or a percentage (ex: "75%"). Default is "100%".
- `height` : set the height of each video in video subscribers. Can be in pixels (ex: "240px") or a percentage (ex: "55%"). Default is "100%".

```html
<video-subscribers width="360px" height="55%"></video-subscribers>
```

## Getting it to work

1. Get a reference to the Web Component.
2. Generate a Session and Token.
3. Pass Session and Token into Web Component reference.

>**Note**: This can vary with library / framework (see [examples folder](../examples))

## Make it "Responsive"

By default, the Video Video API adds each subscriber video as a `div` resulting in the video feeds being stacked vertically. To get the video feeds to align horizontally and move to the next row when there is not enough room, apply this CSS to the Web Component:

```css
video-subscribers {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
  place-items: center;
}
```
>**Note**: The `px` in `minmax` should match the width you want for each subcriber video.

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
