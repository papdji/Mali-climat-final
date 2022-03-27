import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public labels = ['Test'];
  public currentUser: any;
  public dark = false;

  public appPages = [
    {
      title: 'Accueil',
      url: '/',
      icon: 'home'
    },
    { title: 'Localités', url: '/home', icon: 'earth' },
    { title: 'Condition', url: '/conditions', icon: 'folder' },
    { title: 'A propos', url: '/abouts', icon: 'stats-chart' },
    { title: 'Confidentialité', url: '/confidentialites', icon: 'create' },
    
    {
      title: 'Réglages',
      url: '/settings',
      icon: 'settings'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private menu: MenuController) {
    }

    public closeMenu(){
      this.menu.close();
    }
  

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
