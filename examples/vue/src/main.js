const { createApp } = require('vue');
import App from './App.vue';

const app = createApp(App);

app.config.compilerOptions.isCustomElement = (tag) => {
  return tag.includes('-');
};

app.mount('#app');
