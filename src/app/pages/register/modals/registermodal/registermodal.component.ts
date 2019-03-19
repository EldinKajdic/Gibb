import { Component, OnInit } from '@angular/core';
import { ModalController, LoadingController, ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-registermodal',
  templateUrl: './registermodal.component.html',
  styleUrls: ['./registermodal.component.scss'],
})
export class RegistermodalComponent implements OnInit {
  public userName: string;
  public userEmail: string;
  public userPassword: string;

  constructor(private modalController: ModalController, private auth: AuthService, private loadingController: LoadingController, private toast: ToastController) { }

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

  async showToast(msg: string) {
    const toast = await this.toast.create({
      message: msg,
      duration: 5000
    });
    toast.present();
  }

  ngOnInit() { }

}
