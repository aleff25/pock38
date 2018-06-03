import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NativeAudio } from '@ionic-native/native-audio';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController,
              private nativeAudio: NativeAudio) {
    this.nativeAudio.preloadComplex('button-beep', 'resources/sounds/Button-beep-tone.mp3', 1, 0, 0)
      .then(() => console.log('button-beep'), err => console.log(err));
    this.nativeAudio.preloadComplex('button-click', 'resources/sounds/button-click-sound.mp3', 1, 0, 0)
      .then(() => console.log('button-click'), err => console.log(err));
    this.nativeAudio.preloadComplex('button-noise', 'resources/sounds/Short-beep-noise.mp3', 1, 0, 0)
      .then(() => console.log('button-noise'), err => console.log(err));
  }

  onClickBeep() {
    this.nativeAudio.play('button-beep', () =>console.log('button-beep'));

  }

  onClickBeep2() {
    this.nativeAudio.play('button-click', () =>console.log('button-click'));

  }

  onClickNoise() {
    this.nativeAudio.play('button-noise', () =>console.log('button-noise'));
  }

}
