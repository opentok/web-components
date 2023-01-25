import { html, LitElement } from 'lit';

export class VideoSubscriber extends LitElement {
  static get properties() {
    return {
      session: { type: Object },
      stream: { type: Object },
      width: { type: String },
      height: { type: String },
    };
  }

  constructor() {
    super();
    this.session = {};
    this.stream = null;
    this.width = '360px';
    this.height = '240px';
    this.subscriber = {};
  }

  firstUpdated() {
    if (this.stream) {
      const subscriberOptions = {
        insertMode: 'append',
        width: this.width,
        height: this.height,
      };
      this.subscriber = this.session.subscribe(
        this.stream,
        document.getElementById(this.stream.streamId),
        subscriberOptions,
        error => {
          if (error) {
            const options = {
              detail: {
                error,
              },
              bubbles: true,
              composed: true,
            };
            this.dispatchEvent(new CustomEvent('error', options));
          }
        }
      );
      if (this.subscriber !== {}) {
        const options = {
          detail: {
            subscriber: this.subscriber,
          },
          bubbles: true,
          composed: true,
        };
        this.dispatchEvent(new CustomEvent('subscribed', options));
      }
    }
  }

  connectedCallback() {
    super.connectedCallback();
    if (!window.OT) {
      console.error('Please load Vonage Video library.');
    }
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.session.unsubscribe(this.subscriber);
    const options = {
      detail: {
        subscriber: this.subscriber,
      },
      bubbles: true,
      composed: true,
    };
    this.dispatchEvent(new CustomEvent('unsubscribed', options));
  }

  render() {
    return this.stream
      ? html`<div id=${this.stream.streamId} class="OTSubscriberContainer">
          <slot></slot>
        </div>`
      : html`Loading`;
  }
}
