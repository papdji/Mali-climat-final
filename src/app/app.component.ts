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
  isDarkThemeTurnedOn: boolean;
  public labels = ['Test'];
  public currentUser: any;
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
  render: any;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private menu: MenuController) {
  }

  public closeMenu() {
    this.menu.close();
    const themeSelected = localStorage.getItem("themeSelected")
    if (themeSelected == "light") {
      this.isDarkThemeTurnedOn = false;      
    } else if (themeSelected == "dark") {
      this.isDarkThemeTurnedOn = true;      
    } else {
      this.isDarkThemeTurnedOn = false;      
    }

  }
  onToggleColorTheme(ev: any) { 
    if (ev.detail.checked) {
      let themeSelected = "dark";
      localStorage.setItem("themeSelected", themeSelected);
      this.render.setAttribute(document.body, "color-theme", "dark");      
    } else {
      let themeSelected = "light";
      localStorage.setItem("themeSelected", themeSelected);
      this.render.setAttribute(document.body, "color-theme", "light");
    }
  }


  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}