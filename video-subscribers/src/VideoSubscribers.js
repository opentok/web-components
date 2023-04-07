import { html, css, LitElement } from 'lit';

export class VideoSubscribers extends LitElement {

  static get properties() {
    return {
      session: {},
      token: {},
      properties: { type: Object },
    }
  };

  constructor() {
    super();
    this.session = {};
    this.token = "";
    this.properties = {};
  }

  updated(changedProperties) {
    if(changedProperties.get("session")){
      this.session.on({
        // This function runs when another client publishes a stream (eg. session.publish())
        streamCreated: (event) => {
          this.session.subscribe(event.stream, document.querySelector('video-subscribers'), this.properties, (error) => {
            if(error){
              console.error("error subscribing to session: ", error);
            }
          });
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

  render() {
    return html`
      <slot></slot>
    `;
  }
}
