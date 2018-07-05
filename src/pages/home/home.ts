import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SmartAudioProvider } from '../../providers/smart-audio';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,
              private smartAudio: SmartAudioProvider) {

  }

  onClickBeep() {
    this.smartAudio.play('click1');

  }

  onClickBeep2() {
    this.smartAudio.play('click2');
  }

  onClickNoise() {
    this.smartAudio.play('click3');
  }

}
