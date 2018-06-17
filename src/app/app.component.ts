import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { SmartAudioProvider } from '../providers/smart-audio';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, smartAudio: SmartAudioProvider) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      smartAudio.preload('click1', 'assets/sounds/Button-beep-tone.mp3');
      smartAudio.preload('click2', 'assets/sounds/Button-click-sound.mp3');
      smartAudio.preload('click3', 'assets/sounds/Short-beep-noise.mp3');
    });
  }
}
