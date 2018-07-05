import { ChangeDetectorRef, Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SpeechRecognition } from '@ionic-native/speech-recognition';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  matches: String[];
  isRecording: boolean;

  constructor(public navCtrl: NavController,
              private speechRecognition: SpeechRecognition,
              private cd: ChangeDetectorRef) {

  }

  getPermission() {
    this.speechRecognition.hasPermission()
      .then((hasPermission: boolean) => {
        if (!hasPermission) {
          this.speechRecognition.requestPermission();
        }
      });
  }

  startListening() {
    let options = {
      language: 'pt-BR',
    };

    this.speechRecognition.startListening(options).subscribe(matches => {
      this.matches = matches;
      this.cd.detectChanges();
    });

    this.isRecording = true;
  }

  stopListening() {
    this.speechRecognition.stopListening()
      .then(() => this.isRecording = false);
  }

}
