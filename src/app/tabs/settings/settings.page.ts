import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-settings',
  templateUrl: 'settings.page.html',
  styleUrls: ['settings.page.scss']
})
export class settingsPage implements OnInit {

  user:any;
  defaultProfileUrl:string = '../../assets/profile/defaultProfile.png';
  emailVerified:boolean;
  constructor(public auth: AuthService) {
    
  }

  ngOnInit(): void {
    this.getUserProfile();
  }

  getUserProfile(){
    this.emailVerified = false;
    this.user = JSON.parse(localStorage.getItem('user'));
    this.emailVerified = this.user.emailVerified;
  }
}
