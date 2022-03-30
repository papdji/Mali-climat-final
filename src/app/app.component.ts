import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import {
  ActionPerformed,
  PushNotificationSchema,
  PushNotifications,
  Token,
} from '@capacitor/push-notifications';
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
  

  public closeMenu() {
    this.menu.close();
    const toggle = document.getElementById('themeToggle');
console.log(toggle);

    // Listen for the toggle check/uncheck to toggle the dark class on the <body>
    toggle.addEventListener('ionChange', (ev) => {
      console.log('grealt');
      
      document.body.classList.toggle('dark', ev['detail'].checked);
    });

  }


  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
  // ngOnInit() {
  //   console.log('Initializing HomePage');
  
  //  // Request permission to use push notifications
  //   // iOS will prompt user and return if they granted permission or not
  //   // Android will just grant without prompting
  //   PushNotifications.requestPermissions().then(result => {
  //     if (result.receive === 'granted') {
  //       // Register with Apple / Google to receive push via APNS/FCM
  //       PushNotifications.register();
  //     } else {
  //       // Show some error
  //     }
  //   });

  //   PushNotifications.addListener('registration', (token: Token) => {
  //     alert('Push registration success, token: ' + token.value);
  //   });

  //   PushNotifications.addListener('registrationError', (error: any) => {
  //     alert('Error on registration: ' + JSON.stringify(error));
  //   });

  //   PushNotifications.addListener(
  //     'pushNotificationReceived',
  //     (notification: PushNotificationSchema) => {
  //       alert('Push received: ' + JSON.stringify(notification));
  //     },
  //   );

  //   PushNotifications.addListener(
  //     'pushNotificationActionPerformed',
  //     (notification: ActionPerformed) => {
  //       alert('Push action performed: ' + JSON.stringify(notification));
  //     },
  //   );
  // }
}

