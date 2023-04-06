import { html, css, LitElement } from 'lit';

export class VideoPublisher extends LitElement {

  static get properties() {
    return {
      publisher: {},
      session: {},
      token: {},
      properties: { type: Object },
      autoPublish: { type: String, attribute: 'auto-publish' }
    }
  };

  constructor() {
    super();
    this.session = {};
    this.token = "";
    this.properties = {};
    this.autoPublish = "true";
  }

  startPublish() {
    this.publisher = OT.initPublisher(document.querySelector('video-publisher'), this.properties, (error) => {
      if(error){
        console.error("error creating publisher: ", error)
        const options = {
          detail: {
            error,
          },
          bubbles: true,
          composed: true,
        };
        this.dispatchEvent(new CustomEvent('error', options));
      } else {
        this.session.publish(this.publisher, (err) => {
          if(err){
            console.error("session publish error: ", err.message);
            const options = {
              detail: {
                error: err,
              },
              bubbles: true,
              composed: true,
            };
            this.dispatchEvent(new CustomEvent('error', options));
          } else {
            const options = {
              detail: {
                publisher: this.publisher,
              },
              bubbles: true,
              composed: true,
            };
            this.dispatchEvent(new CustomEvent('published', options));
          }
        });
      }
    });
  }

  updated(changedProperties) {
    if(changedProperties.get("session")){
      this.session.on({
      // This function runs when session.connect() asynchronously completes
        sessionConnected: () => {
          if (this.autoPublish === "true"){
            this.startPublish();
          }
        }
      });
      this.session.connect(this.token);
    }
  }

  connectedCallback() {
    super.connectedCallback();
    if (!window.OT){
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

  cycleVideo() {
    this.publisher.cycleVideo();
  }

  render() {
    return html`
      <slot></slot>
    `;
  }
}
