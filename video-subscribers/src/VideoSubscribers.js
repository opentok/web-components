import { html, css, LitElement } from 'lit';

export class VideoSubscribers extends LitElement {
  static styles = css`
    * {
      font-size: 200%;
    }
  `;

  static properties = {
    session: {},
    token: {},
    width: {type: String},
    height: {type: String}
  };

  constructor() {
    super();
    this.session = {};
    this.token = "";
    this.width = "360px";
    this.height = "240px";
  }

  updated(changedProperties) {
    if(changedProperties.get("session")){
      this.session.on({
        // This function runs when another client publishes a stream (eg. session.publish())
        streamCreated: (event) => {
          const subscriberOptions = {
            insertMode: 'append',
            width: this.width,
            height: this.height
          };
          this.session.subscribe(event.stream, document.querySelector('video-subscribers'), subscriberOptions, (error) => {
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
