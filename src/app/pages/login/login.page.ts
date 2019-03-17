import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public showLoading: boolean = false;
  constructor(public auth: AuthService, public loadingController: LoadingController) { }

  ngOnInit() {
  }

  async signInWithGoogle(){
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
