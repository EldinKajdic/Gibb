import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-settings',
  templateUrl: 'settings.page.html',
  styleUrls: ['settings.page.scss']
})
export class settingsPage implements OnInit {

  user:any;
  constructor(public auth: AuthService, public loadingController: LoadingController) {
    
  }

  ngOnInit(): void {
    this.getUserProfile();
  }

  async getUserProfile(){
    const loading = await this.loadingController.create({
      spinner: 'crescent',
      keyboardClose: true,
      showBackdrop: false
    });

    await loading.present();
    this.user = this.auth.getUser();
    await loading.dismiss();
  }
}
