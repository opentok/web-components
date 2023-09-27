# Vue x Video API Web Components

This demo was created with [Stackblitz's Vue Starter App](https://stackblitz.com/fork/vue) to create a barebones application to focus on integrating the Web Components.

Deployed application:

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/fork/github/opentok/web-components/tree/main/examples/vue)

## The Web Components

- `<video-publisher>` : Initializes a publisher and publishes to the session. [more info](https://github.com/opentok/web-components/tree/main/video-publisher)
- `<video-subscribers>` : Subscribes and displays other streams in the session. [more info](https://github.com/opentok/web-components/tree/main/video-subscribers)
- `<screen-share>` : Adds ability to allow user to share their screen. [more info](https://github.com/opentok/web-components/tree/main/screen-share)

## How to use

### 1. Set `compilerOptions.isCustomElement`
so that Vue knows you will be using Web Components. This may vary depending on how you are compiling your application as it states in the [documentation](https://vuejs.org/guide/extras/web-components.html).
For this demo, compilation is done in the browser so, in your main.js, put this piece of code:
```js
app.config.compilerOptions.isCustomElement = (tag) => {
  return tag.includes('-');
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
npm i @vonage/screen-share
```
then import into your `*.vue` project file
```js
import '@vonage/video-publisher/video-publisher.js';
import '@vonage/video-subscribers/video-subscribers.js';
import '@vonage/screen-share/screen-share.js';
```

OR use a CDN and place in your index.html file
```html
<script type="module" src="https://unpkg.com/@vonage/video-publisher@latest/video-publisher.js?module"></script>
<script type="module" src="https://unpkg.com/@vonage/video-subscribers@latest/video-subscribers.js?module"></script>
<script type="module" src="https://unpkg.com/@vonage/screen-share@latest/screen-share.js?module"></script>
```

### 4. Place the Web Components
where you want them to show up in your app
for ex:
```html
<video-publisher ref="publisher"></video-publisher>
<video-subscribers ref="subscribers"></video-subscribers>
<screen-share start-text="start" stop-text="stop" width="300px" height="240px" ref="screenshare"></screen-share>
```

### 5. Get `apiKey`, `sessionId`, and `token`
>**Note**: In production applications, they are retrieved from the server [more info](https://tokbox.com/developer/sdks/server/). For this demo, they are hardcoded.

To get the credentials needed to run the demo:
- [Sign up for](https://www.tokbox.com/account/user/signup) or [Log into](https://tokbox.com/account) your account.
- In the left-side menu of the [dashboard](https://tokbox.com/account), click `Projects` and select a previous project or create a new one to view the API Key and Secret.

    ![Screenshot of projects dashboard](https://github.com/opentok/web-components/raw/main/examples/vue/projects-dashboard-screenshot.jpeg)

    ![Screenshot of project API Key and Secret](https://github.com/opentok/web-components/raw/main/examples/vue/project-api-key-secret-screenshot.jpeg)

- Scroll to the bottom of the page to the `Project Tools` section and click the `Create Session ID` button.

    ![Screenshot of Project Tools section](https://github.com/opentok/web-components/raw/main/examples/vue/create-session-id-screenshot.jpg)

- Copy and paste the generated `Session ID` into the corresponding input field in the next section.

    ![Screenshot of Project Tools section with generated Session ID pasted in input field](https://github.com/opentok/web-components/raw/main/examples/vue/paste-session-id-screenshot.jpg)

- Click `Generate Token` and a token will be created. This is the final credential you need to get the demo running.

    ![Screenshot of Project Tools section with Generated Token](https://github.com/opentok/web-components/raw/main/examples/vue/generated-token-screenshot.jpg)

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
this.$refs.screenshare.session = session;
this.$refs.screenshare.token = token;
```

### 8. (Optional) Set properties attribute for Web Components (if available)
```js
this.$refs.publisher.properties = { ... };
```
(see [full list](https://tokbox.com/developer/sdks/js/reference/OT.html#initPublisher))
```js
this.$refs.subscribers.properties = { ... };
```
(see [full list](https://tokbox.com/developer/sdks/js/reference/Session.html#subscribe))

### That's it!

We go more in-depth in our blogpost
[Use Web Components in Vue 2 and 3 + Composition API](https://developer.vonage.com/blog/20/10/30/use-web-components-in-vue-2-and-3-composition-api-dr).
