import { Component, OnInit } from '@angular/core';
import { ModalController, LoadingController, ToastController, Platform } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth/auth.service';
import { isNullOrUndefined } from 'util';
import { HomeModalComponent } from 'src/app/tabs/home/home-modal/home-modal.component';

@Component({
  selector: 'app-registermodal',
  templateUrl: './registermodal.component.html',
  styleUrls: ['./registermodal.component.scss'],
})
export class RegistermodalComponent implements OnInit {
  public userName: string;
  public userEmail: string;
  public userPassword: string;

  constructor(private modalController: ModalController, private auth: AuthService, private loadingController: LoadingController, private toast: ToastController, private platform: Platform) { }

  async closeModal() {
    await this.modalController.dismiss();
  }

  async registerAccount() {
    if (!isNullOrUndefined(this.userEmail) && !isNullOrUndefined(this.userPassword) && !isNullOrUndefined(this.userName)) {
      const loading = await this.loadingController.create({
        message: 'Creating account...',
        spinner: 'crescent',
        keyboardClose: true
      });
      await loading.present();
      await this.auth.registerUser(this.userName, this.userEmail, this.userPassword).then((user) => {
        localStorage.setItem('user', JSON.stringify(user));
        this.auth.sendEmailVerification();
        this.closeModal().then(() => {
          if (!this.platform.is('desktop')) {
            this.openIntroModal();
          }
        });
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

  async openIntroModal() {
    const modal = await this.modalController.create({
      component: HomeModalComponent
    });

    await modal.present();
  }

  async showToast(msg: string) {
    const toast = await this.toast.create({
      message: msg,
      duration: 5000
    });
    toast.present();
  }

  ngOnInit() { }

}
