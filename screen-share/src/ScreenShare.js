import { html, css, LitElement } from 'lit';

export class ScreenShare extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        padding: 25px;
        color: var(--screen-share-text-color, #000);
      }
    `;
  }

  static get properties() {
    return {
      publisher: {},
      session: {},
      token: {},
      properties: { type: Object },
      buttonStartText: { type: String, attribute: 'start-text' },
      buttonStopText: { type: String, attribute: 'stop-text' },
      isSharing: { type: Boolean }
    }
  };

  constructor() {
    super();
    this.session = {};
    this.token = "";
    this.properties = {};
    this.buttonStartText = "start screenshare";
    this.buttonStopText = "stop screenshare";
    this.isSharing = false;
  }

  updated(changedProperties) {
    if(changedProperties.get("session")){
      this.session.connect(this.token);
    }
  }

  connectedCallback() {
    super.connectedCallback();
  }

  disconnectedCallback() {
    super.disconnectedCallback()
    this.publisher.destroy();
  }

  async __handleStartScreenshare() {
    this.properties = { ...this.properties, videoSource: 'screen', insertMode: 'append'};
    if (window.OT){
      this.publisher = OT.initPublisher(document.querySelector('screen-share'), this.properties, (error) => {
        if(error){
          console.error("error: ", error)
        } else {
          this.session.publish(this.publisher, (pubError) => {
            if(pubError){
              console.error("session error: ", pubError.message);
            } else {
              this.isSharing = true;
            }
          });
        }
      });
    } else {
      console.error("Please load Vonage Video library.");
    }
  }

  async __handleStopScreenshare() {
    this.publisher.destroy();
    this.isSharing = false;
  }

  displayButton() {
    if (this.isSharing) {
      return html`<button part="button" @click=${this.__handleStopScreenshare}>${this.buttonStopText}</button>`;
    } else {
      return html`<button part="button" @click=${this.__handleStartScreenshare}>${this.buttonStartText}</button>`;
    }
  }

  render() {
    return html`
      ${this.displayButton()}
      <br/>
      <slot></slot>
    `;
  }
}
