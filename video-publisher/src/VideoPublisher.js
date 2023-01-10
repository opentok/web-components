import { html, css, LitElement } from 'lit';

export class VideoPublisher extends LitElement {

  static get properties() {
    return {
      publisher: {},
      session: {},
      token: {},
      width: {type: String},
      height: {type: String}
    }
  };

  constructor() {
    super();
    this.session = {};
    this.token = "";
    this.width = "100%";
    this.height = "100%";
  }

  updated(changedProperties) {
    if(changedProperties.get("session")){
      this.session.on({
      // This function runs when session.connect() asynchronously completes
        sessionConnected: () => {
          // Publish the publisher we initialized earlier (this will trigger 'streamCreated' on other clients)
          this.session.publish(this.publisher, (error) => {
            if(error){
              console.error("session error: ", error.message);
            }
          });
        }
      });
      this.session.connect(this.token);
    }
  }

  connectedCallback() {
    super.connectedCallback();
    const publisherOptions = {
      insertMode: 'append',
      width: this.width,
      height: this.height
    };
    if (window.OT){
      this.publisher = OT.initPublisher(document.querySelector('video-publisher'),publisherOptions, (error) => {
        if(error){
          console.error("error: ", error)
        }
      });
    } else {
      console.error("Please load Vonage Video library.");
    }
  }

  disconnectedCallback() {
    super.disconnectedCallback()
    this.publisher.destroy();
  }

  toggleAudio() {
    if (this.publisher.getAudioSource().enabled){
      this.publisher.publishAudio(false);
    } else {
      this.publisher.publishAudio(true);
    }
  }

  toggleVideo() {
    if (this.publisher.getVideoSource().track){
      this.publisher.publishVideo(false);
    } else {
      this.publisher.publishVideo(true);
    }
  }

  render() {
    return html`
      <slot></slot>
    `;
  }
}
