import {
  Component,
  VERSION,
  OnInit,
  ViewChild,
  ElementRef,
} from '@angular/core';
import '@vonage/video-publisher/video-publisher.js';
import '@vonage/video-subscribers/video-subscribers.js';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;
  @ViewChild('publisher') publisherComponent: ElementRef;
  @ViewChild('subscribers') subscribersComponent: ElementRef;

  toggleVideo() {
    this.publisherComponent.nativeElement.toggleVideo();
  }

  toggleAudio() {
    this.publisherComponent.nativeElement.toggleAudio();
  }

  ngOnInit() {
    // These values normally come from a Video API backend SDK in a production application, but for this demo, they are hardcoded
    const apiKey = 'YOUR_API_KEY';
    const sessionId = 'YOUR_SESSION_ID';
    const token = 'YOUR_TOKEN';

    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then((response) => response.json())
      .then(
        (result) => {
          // @ts-ignore
          const OT = window.OT;
          const session = OT.initSession(apiKey, sessionId);

          // Set session and token for Web Components
          this.publisherComponent.nativeElement.session = session;
          this.publisherComponent.nativeElement.token = token;
          this.subscribersComponent.nativeElement.session = session;
          this.subscribersComponent.nativeElement.token = token;
        },
        (error) => {
          console.error('error getting credentials: ', error);
        }
      );
  }
}
