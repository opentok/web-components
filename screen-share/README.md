# \<screen-share>

This Web Component follows the [open-wc](https://github.com/open-wc/open-wc) recommendation and is meant to be used with the [OpenTok Video SDK](https://tokbox.com/developer/sdks/js/).

> A [Vonage Video API account](https://tokbox.com/account/user/signup) will be needed.

A goal is to simplify the code needed to create a chat room quickly. This Web Component will enable screen sharing functionality.

## Installation

```bash
npm i @vonage/screen-share
```

## Usage

### import from node modules

```html
<script type="module">
  import '@vonage/screen-share/screen-share.js';
</script>
```

### OR using a CDN
```html
<script type="module" src="https://unpkg.com/@vonage/screen-share@latest/screen-share.js?module"></script>

```

### place tag in HTML

```html
<screen-share></screen-share>
```

### Attributes that can be used (optional):

- `width` : set the width of the screen share preview. Can be in pixels (ex: "360px") or a percentage (ex: "75%"). Default is "100%".
- `height` : set the height of the screen share preview. Can be in pixels (ex: "240px") or a percentage (ex: "55%"). Default is "100%".
- `start-text` : set the text of the button to begin screen sharing. Default is "start screenshare".
- `stop-text` : set the text of the button to end screen sharing. Default is "stop screenshare".

```html
<screen-share start-text="start" stop-text="stop" width="300px" height="240px"></screen-share>
```

## Styling

The Web Component uses the [CSS pseudo-element `::part`](https://developer.mozilla.org/en-US/docs/Web/CSS/::part) for styling. So you can style it the same way you would style a regular button element. Here's an example:

```css
screen-share::part(button) {
  font-size: 20px;
  color: white;
  background-color: black;
  border-radius: 5px;
}
```

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
