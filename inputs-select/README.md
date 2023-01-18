# \<inputs-select>

This Web Component follows the [open-wc](https://github.com/open-wc/open-wc) recommendation and is meant to be used with the [OpenTok Video SDK](https://tokbox.com/developer/sdks/js/).

> A [Vonage Video API account](https://tokbox.com/account/user/signup) will be needed.

A goal is to simplify the code needed to create a chat room quickly. This Web Component will display the user's feed and publish to the session.

## Installation

```bash
npm i @vonage/inputs-select
```

## Usage

### import from node modules

```html
<script type="module">
  import '@vonage/inputs-select/inputs-select.js';
</script>
```

### OR using a CDN
```html
<script type="module" src="https://unpkg.com/@vonage/inputs-select@latest/inputs-select.js?module"></script>

```

### place tag in HTML

```html
<inputs-select></inputs-select>
```

### Attributes that can be used (optional):

- `audio-label` : set the text for the audio inputs label. Default is "Audio Source:".
- `video-label` : set the text for the audio inputs label. Default is "Video Source:".
- `button-text` : set the text for the audio inputs label. Default is "Publish".

```html
<inputs-select audio-label="Audio Inputs:" video-label="Video Inputs:" button-text="Preview"></inputs-select>
```

### Custom Event to listen for

- `inputsSelected` : details contains audio and video device IDs that can be passed into the <video-publisher> Web Component

example (event.details)
```json
{
  audioSource: 'default', 
  videoSource: 'ab123c4d5ef6g789h0...',
}
```

## Styling

The Web Component uses the [CSS pseudo-element `::part`](https://developer.mozilla.org/en-US/docs/Web/CSS/::part) for styling. So you can style it the same way you would style a regular button element. Here's an example:

This is the HTML structure of the Web Component:

```html
<form part="form">
  <label for="audio-source-select" part="label audio">Audio Source:</label>
  <select id="audio-source-select" part="select audio">
    <option value="audio.deviceId" part="option audio">audio input 1</option>
    ...
  </select><br/>
  <label for="video-source-select" part="label video">Video Source:</label>
  <select id="video-source-select" part="select video">
    <option value="video.deviceId" part="option video">video input 1</option>
    ...
  </select>
  <button id="inputs-btn" type="button" part="button">Publish</button>
</form>
```

Here is how to apply CSS to a part:
```css
inputs-select::part(button) {
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
