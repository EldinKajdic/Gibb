import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { LoadingController, Platform, ModalController } from '@ionic/angular';
import { isNullOrUndefined } from 'util';
import { RegistermodalComponent } from '../register/modals/registermodal/registermodal.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public showLoading: boolean = false;
  public showGoogleSignin: boolean = false;
  public userEmail: string;
  public userPassword: string;

  constructor(public auth: AuthService, public loadingController: LoadingController, public platform: Platform, public modalController: ModalController) { }

  ngOnInit() {
    if (this.platform.is('desktop')) {
      this.showGoogleSignin = true;
    }
    else {
      this.showGoogleSignin = false;
    }
  }

  async openRegisterModal() {
    const modal = await this.modalController.create({
      component: RegistermodalComponent
    });

    await modal.present();
  }

  async signInWithCredentials() {
    if (!isNullOrUndefined(this.userEmail) && !isNullOrUndefined(this.userPassword)) {
      const loading = await this.loadingController.create({
        message: 'Signing in...',
        spinner: 'crescent',
        keyboardClose: true
      });

      await loading.present();
      this.auth.signInWithCredentials(this.userEmail, this.userPassword);
      await loading.dismiss();
    }
  }

  async signInWithGoogle() {
    if (!this.platform.is('cordova')) {
      const loading = await this.loadingController.create({
        message: 'Signing in...',
        spinner: 'crescent',
        keyboardClose: true
      });

      await loading.present();
      await this.auth.googleSignin();
      await loading.dismiss();
    }
  }

}
