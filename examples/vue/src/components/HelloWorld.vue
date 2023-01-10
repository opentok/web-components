<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div id="video-chat-container">
      <section id="publisher-container">
        <fieldset>
          <legend>Publisher</legend>
          <video-publisher
            width="360px"
            height="240px"
            ref="publisher"
          ></video-publisher>
        </fieldset>
        <button type="button" @click="toggleVideo">toggle Video</button>
        <button type="button" @click="toggleAudio">toggle Audio</button>
        <br/><br/>
        <screen-share start-text="start" stop-text="stop" width="300px" height="240px" ref="screenshare"></screen-share>
      </section>
      <section id="subscribers-container">
        <fieldset>
          <legend>Subscribers</legend>
          <video-subscribers
            width="360px"
            height="240px"
            ref="subscribers"
          ></video-subscribers>
        </fieldset>
      </section>
    </div>
  </div>
</template>

<script>
import '@vonage/video-publisher/video-publisher.js';
import '@vonage/video-subscribers/video-subscribers.js';
import '@vonage/screen-share/screen-share.js';

export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  created() {
    console.log('created');
    // These values normally come from a Video API backend SDK in a production application, but for this demo, they are hardcoded
    const apiKey = 'YOUR_API_KEY';
    const sessionId = 'YOUR_SESSION_ID';
    const token = 'YOUR_TOKEN';

    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then((response) => response.json())
      .then(
        (result) => {
          // Initialize an OpenTok Session object
          const session = OT.initSession(apiKey, sessionId);
          // Set session and token for Web Components
          this.$refs.publisher.session = session;
          this.$refs.publisher.token = token;
          this.$refs.subscribers.session = session;
          this.$refs.subscribers.token = token;
          this.$refs.screenshare.session = session;
          this.$refs.screenshare.token = token;
        },
        (error) => {
          console.error('error getting credentials: ', error);
        }
      );
  },
  methods: {
    toggleVideo() {
      this.$refs.publisher.toggleVideo();
    },
    toggleAudio() {
      this.$refs.publisher.toggleAudio();
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

#video-chat-container {
  display: flex;
  width: 100%;
}

#publisher-container {
  width: 400px;
}

#subscribers-container {
  width: 100%;
}

video-subscribers {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
  place-items: center;
}

screen-share::part(button) {
  font-size: 20px;
  color: white;
  background-color: black;
  border-radius: 5px;
}
</style>
