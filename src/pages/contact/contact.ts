import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TextToSpeech, TTSOptions } from '@ionic-native/text-to-speech';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  text: TTSOptions;

  constructor(public navCtrl: NavController,
              private tts: TextToSpeech) {

    this.text = {text: 'Olá, Tudo bem ?', locale: 'pt-BR'};

  }


  acao() {
    this.tts.speak(this.text)
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }
}
