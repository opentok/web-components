import { html, css, LitElement } from 'lit';

export class InputsSelect extends LitElement {

  static get properties() {
    return {
      devices: { type: Array, state: true },
      audioLabel: { attribute: 'audio-label' },
      videoLabel: { attribute: 'video-label' },
      buttonText: { attribute: 'button-text' },
    };
  }

  constructor() {
    super();
    this.devices = [];
    this.audioLabel = "Audio Source:";
    this.videoLabel = "Video Source:";
    this.buttonText = "Publish";
    this.disabled = true;
  }

  connectedCallback() {
    super.connectedCallback();
    if (window.OT){
      this.disabled = true;
      // We request access to Microphones and Cameras so we can get the labels
      OT.getUserMedia().then((stream) => {
        OT.getDevices((err, devices) => {
          if (err) {
            alert(`getDevices error: ${err.message}`);
            return;
          }
          this.devices = devices;
          console.log("this.devices: ", this.devices);
          this.disabled = false;
        });
        // Stop the tracks so that we stop using this camera and microphone
        // If you don't do this then cycleVideo does not work on some Android devices
        stream.getTracks().forEach(track => track.stop());
      });

    } else {
      console.error("Please load Vonage Video library.");
    }
  }

  __filterDevices(deviceKind) {
    return this.devices.filter((device) => device.kind === deviceKind);
  }

  __inputsSelected() {
    const options = {
      detail: {
        audioSource: this.renderRoot?.querySelector('#audio-source-select').value,
        videoSource: this.renderRoot?.querySelector('#video-source-select').value
      },
      bubbles: true,
      composed: true,
    };
    this.dispatchEvent(new CustomEvent('inputsSelected', options));
  }


  render() {
    return html`
      <form part="form">
        <label for="audio-source-select" part="label audio">${this.audioLabel}</label>
        <select id="audio-source-select" part="select audio">
          ${this.__filterDevices('audioInput').map((device, index) => {
            index += 1;
            return html`<option value="${device.deviceId}" part="option audio">${device.label || device.kind + index}</option>`
          })}
        </select><br/>
        <label for="video-source-select" part="label video">${this.videoLabel}</label>
        <select id="video-source-select" part="select video">
          ${this.__filterDevices('videoInput').map((device, index) => {
            index += 1;
            return html`<option value="${device.deviceId}" part="option video">${device.label || device.kind + index}</option>`
          })}
        </select>
        <button id="inputs-btn" type="button" @click="${this.__inputsSelected}" ?disabled=${this.disabled} part="button">${this.buttonText}</button>
      </form>
    `;
  }
}
