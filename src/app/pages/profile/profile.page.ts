import { Component, OnInit } from '@angular/core';
import { AuthService, User } from 'src/app/services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  loadingData: Boolean = true;
  currentUser: User;

  constructor( private authService: AuthService) {

  }

  ngOnInit() {
    this.authService.getUserProfile().subscribe((profile: User) => {
      this.currentUser = profile;
      console.log('Current passed user: ', profile);
      this.loadingData = false;
    });

  }

}
