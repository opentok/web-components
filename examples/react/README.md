# React x Video API Web Components

This demo was created with [Create React App](https://github.com/facebook/create-react-app) to create a barebones application to focus on integrating the Web Components.

Deployed application:

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/fork/github/opentok/web-components/tree/main/examples/react)

## The Web Components

- `<video-publisher>` : Initializes a publisher and publishes to the session. [more info](https://github.com/opentok/web-components/tree/main/video-publisher)
- `<video-subscribers>` : Subscribes and displays other streams in the session. [more info](https://github.com/opentok/web-components/tree/main/video-subscribers)
- `<screen-share>` : Adds ability to allow user to share their screen. [more info](https://github.com/opentok/web-components/tree/main/screen-share)

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
npm i @vonage/screen-share
```
then import into your project
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

### 3. Place the Web Components
where you want them to show up in your app
for ex:
```html
<video-publisher ref={publisher}></video-publisher>
<video-subscribers ref={subscribers}></video-subscribers>
<screen-share start-text="start" stop-text="stop" width="300px" height="240px" ref={screenshare}></screen-share>
```

### 4. Get references to the Web Components using `useRef`
```js
const publisher = useRef(null);
const subscribers = useRef(null);
const screenshare = useRef(null);
```

### 5. Get `apiKey`, `sessionId`, and `token`
>**Note**: In production applications, they are retrieved from the server [more info](https://tokbox.com/developer/sdks/server/). For this demo, they are hardcoded.

To get the credentials needed to run the demo:
- [Sign up for](https://www.tokbox.com/account/user/signup) or [Log into](https://tokbox.com/account) your account.
- In the left-side menu of the [dashboard](https://tokbox.com/account), click `Projects` and select a previous project or create a new one to view the API Key and Secret.

    ![Screenshot of projects dashboard](https://github.com/opentok/web-components/raw/main/examples/react/projects-dashboard-screenshot.jpeg)

    ![Screenshot of project API Key and Secret](https://github.com/opentok/web-components/raw/main/examples/react/project-api-key-secret-screenshot.jpeg)

- Scroll to the bottom of the page to the `Project Tools` section and click the `Create Session ID` button.

    ![Screenshot of Project Tools section](https://github.com/opentok/web-components/raw/main/examples/react/create-session-id-screenshot.jpg)

- Copy and paste the generated `Session ID` into the corresponding input field in the next section.

    ![Screenshot of Project Tools section with generated Session ID pasted in input field](https://github.com/opentok/web-components/raw/main/examples/react/paste-session-id-screenshot.jpg)

- Click `Generate Token` and a token will be created. This is the final credential you need to get the demo running.

    ![Screenshot of Project Tools section with Generated Token](https://github.com/opentok/web-components/raw/main/examples/react/generated-token-screenshot.jpg)


### 6. Create a session
```js
const session = OT.initSession(apiKey, sessionId);
```

### 7. Set the session and token for Web Components
```js
publisher.current.session = session;
publisher.current.token = token;
subscribers.current.session = session;
subscribers.current.token = token;
screenshare.current.session = session;
screenshare.current.token = token;
```

### 8. (Optional) Set properties attribute for Web Components (if available)
```js
publisher.current.properties = { ... };
```
(see [full list](https://tokbox.com/developer/sdks/js/reference/OT.html#initPublisher))
```js
subscribers.current.properties = { ... };
```
(see [full list](https://tokbox.com/developer/sdks/js/reference/Session.html#subscribe))

### That's it!

We have a more in-depth blogpost covering older versions of React.
[Using Web Components in a React Application](https://developer.vonage.com/blog/20/10/07/using-web-components-in-a-react-application-dr)


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
