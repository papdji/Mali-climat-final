import { Component, OnInit } from '@angular/core';
import { AngularFireMessaging } from '@angular/fire/messaging';
import { mergeMap } from 'rxjs/operators';
import { AuthService, User } from '../services/auth.service';

@Component({
  selector: 'app-settings',
  templateUrl: 'settings.page.html',
  styleUrls: ['settings.page.scss']
})
export class SettingsPage implements OnInit {
  loadingData: Boolean = true;
  currentUser: User;
  notifications: boolean = false;

  constructor(private authService: AuthService, private afMessaging: AngularFireMessaging) {}

  ngOnInit(){
    this.afMessaging.getToken
    .subscribe(
      (token) => {
        if(token){
          // token present
          alert(token)
          this.notifications = true;
        }
      },
      (error) => { console.error(error); },
    )
    this.authService.getUserProfile().subscribe((profile: User) => {
      this.currentUser = profile;
      console.log('Current passed user: ', profile);
      this.loadingData = false;
    });
  }

  requestPushNotificationsPermission(e) {
    if(e.detail.checked){
      this.afMessaging.requestToken
       .subscribe(
         (token) => { 
           console.log('Permission accordée! Enregistrez-le sur votre serveur!', token);
          alert(token) },
         (error) => { console.error(error); },
       );
    } else {
      //delete token
      this.afMessaging.getToken
      .pipe(mergeMap(token => this.afMessaging.deleteToken(token)))
      .subscribe(
        (token) => { console.log('Jeton supprimé !'); },
      );
    }
  }
}
