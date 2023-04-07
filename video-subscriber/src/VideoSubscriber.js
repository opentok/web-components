import { html, LitElement } from 'lit';

export class VideoSubscriber extends LitElement {
  static get properties() {
    return {
      session: { type: Object },
      stream: { type: Object },
      properties: { type: Object },
    };
  }

  constructor() {
    super();
    this.session = {};
    this.stream = null;
    this.properties = {};
    this.subscriber = {};
  }

  firstUpdated() {
    if (this.stream) {
      this.subscriber = this.session.subscribe(
        this.stream,
        document.getElementById(this.stream.streamId),
        this.properties,
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

  subscribeToAudio(state) {
    this.subscriber.subscribeToAudio(state);
  }

  subscribeToVideo(state) {
    this.subscriber.subscribeToVideo(state);
  }

  render() {
    return this.stream
      ? html`<div
          part="container"
          id=${this.stream.streamId}
          class="OTSubscriberContainer"
        >
          <slot></slot>
        </div>`
      : html`Loading`;
  }
}
