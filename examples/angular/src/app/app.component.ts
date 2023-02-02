import {
  Component,
  VERSION,
  OnInit,
  AfterViewInit,
  ViewChild,
  ElementRef,
} from '@angular/core';
import '@vonage/video-publisher/video-publisher.js';
import '@vonage/video-subscribers/video-subscribers.js';
import '@vonage/screen-share/screen-share.js';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, AfterViewInit {
  name = 'Angular ' + VERSION.major;
  // These values normally come from a Video API backend SDK in a production application, but for this demo, they are hardcoded
  apiKey = 'YOUR_API_KEY';
  sessionId = 'YOUR_SESSION_ID';
  token = 'YOUR_TOKEN';
  // @ts-ignore
  OT = window.OT;
  session = {};

  @ViewChild('publisher') publisherComponent: ElementRef;
  @ViewChild('subscribers') subscribersComponent: ElementRef;
  @ViewChild('screenshare') screenshareComponent: ElementRef;

  toggleVideo() {
    this.publisherComponent.nativeElement.toggleVideo();
  }

  toggleAudio() {
    this.publisherComponent.nativeElement.toggleAudio();
  }

  ngOnInit() {
    console.log('ngOnInit');
  }
  
  ngAfterViewInit() {
    console.log('ngAfterViewInit');
    this.session = this.OT.initSession(this.apiKey, this.sessionId);
  }
  
}
