import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-registermodal',
  templateUrl: './registermodal.component.html',
  styleUrls: ['./registermodal.component.scss'],
})
export class RegistermodalComponent implements OnInit {
  public userEmail: string;
  public userPassword: string;

  constructor(private modalController: ModalController, private auth:AuthService) { }

  async closeModal() {
    await this.modalController.dismiss();
  }

  async registerAccount() {
    if(!isNullOrUndefined(this.userEmail) && !isNullOrUndefined(this.userPassword)){
      await this.auth.registerUser(this.userEmail, this.userPassword);
    }
  }

  ngOnInit() { }

}
