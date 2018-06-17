import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SmartAudioProvider } from '../../providers/smart-audio';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController,
              private smartAudio: SmartAudioProvider) {
    // this.nativeAudio.preloadComplex('button-beep', 'assets/sounds/Button-beep-tone.mp3', 1, 0, 0)
    //   .then(() => console.log('button-beep'), err => console.log(err));
    // this.nativeAudio.preloadComplex('button-click', 'assets/sounds/button-click-sound.mp3', 1, 0, 0)
    //   .then(() => console.log('button-click'), err => console.log(err));
    // this.nativeAudio.preloadComplex('button-noise', 'assets/sounds/Short-beep-noise.mp3', 1, 0, 0)
    //   .then(() => console.log('button-noise'), err => console.log(err));
  }

  onClickBeep() {
    this.smartAudio.play('click1');

  }

  onClickBeep2() {
    this.smartAudio.play('click2');
  }

  onClickNoise() {
    this.smartAudio.play('click2');
  }

}
