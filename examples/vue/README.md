# Vue x Video API Web Components

This demo was created with [Stackblitz's Vue Starter App](https://stackblitz.com/fork/vue) to create a barebones application to focus on integrating the Web Components.

Deployed application:

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/fork/github/opentok/web-components/tree/main/examples/vue)

## The Web Components

- `<video-publisher>` : Initializes a publisher and publishes to the session. [more info](https://github.com/opentok/web-components/tree/main/video-publisher)
- `<video-subscribers>` : Subscribes and displays other streams in the session. [more info](https://github.com/opentok/web-components/tree/main/video-subscribers)


## How to use

### 1. Set `compilerOptions.isCustomElement`
so that Vue knows you will be using Web Components. This may vary depending on how you are compiling your application as it states in the [documentation](https://vuejs.org/guide/extras/web-components.html).
For this demo, compilation is done in the browser so, in your main.js, put this piece of code:
```js
app.config.compilerOptions.isCustomElement = (tag) => {
  return tag.startsWith('video-');
};
```

### 2. Get opentok.js
place into your index.html
```html
<script src="https://static.opentok.com/v2/js/opentok.min.js"></script>
```

### 3. Get the Web Components

install to your project
```bash
npm i @vonage/video-publisher
npm i @vonage/video-subscribers
```
then import into your `*.vue` project file
```js
import '@vonage/video-publisher/video-publisher.js';
import '@vonage/video-subscribers/video-subscribers.js';
```

OR use a CDN and place in your index.html file
```html
<script type="module" src="https://unpkg.com/@vonage/video-publisher@latest/video-publisher.js?module"></script>
<script type="module" src="https://unpkg.com/@vonage/video-subscribers@latest/video-subscribers.js?module"></script>

```

### 4. Place the Web Components
where you want them to show up in your app
for ex:
```html
<video-publisher width="360px" height="240px" ref="publisher"></video-publisher>
<video-subscribers width="360px" height="240px" ref="subscribers"></video-subscribers>
```

### 5. Get `apiKey`, `sessionId`, and `token`
>**Note**: In production applications, they are retrieved from the server [more info](https://tokbox.com/developer/sdks/server/). For this demo, they are hardcoded.

### 6. Create a session
```js
const session = OT.initSession(apiKey, sessionId);
```

### 7. Set the session and token for Web Components
```js
this.$refs.publisher.session = session;
this.$refs.publisher.token = token;
this.$refs.subscribers.session = session;
this.$refs.subscribers.token = token;
```

### That's it!

We go more in-depth in our blogpost
[Use Web Components in Vue 2 and 3 + Composition API](https://developer.vonage.com/blog/20/10/30/use-web-components-in-vue-2-and-3-composition-api-dr).
