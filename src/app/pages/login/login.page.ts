import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { LoadingController, Platform, ModalController, ToastController } from '@ionic/angular';
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

  constructor(public auth: AuthService, public loadingController: LoadingController, public platform: Platform, public modalController: ModalController, private toast: ToastController) { }

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
      this.auth.signInWithCredentials(this.userEmail, this.userPassword).then((user) => {
        localStorage.setItem('user', JSON.stringify(user));
        return this.auth.navigate('/tabs/home');
      }).catch(error => {
        this.showToast(error.message);
      });
      await loading.dismiss();
    }
    else {
      this.showToast('Please fill in all the required fields.')
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
      await this.auth.googleSignin().then((user) => {
        localStorage.setItem('user', JSON.stringify(user));
        return this.auth.navigate('/tabs/home');
      }).catch(error => {
        this.showToast(error.message);
      });
      await loading.dismiss();
    }
  }

  async showToast(msg: string) {
    const toast = await this.toast.create({
      message: msg,
      duration: 5000
    });
    toast.present();
  }

}
