import { Component, ViewChild } from '@angular/core';
import { IonSlides, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-home-modal',
  templateUrl: './home-modal.component.html',
  styleUrls: ['./home-modal.component.scss'],
})
export class HomeModalComponent {

  constructor(public modalController: ModalController) {
    localStorage.removeItem('showIntro');
   }

  @ViewChild('slider') slider: IonSlides;

  slideIndex = 0;
  slides = [
    {
      title: 'Welcome to Gibb!',
      imageUrl: '../../../../assets/backgrounds/register.png',
      description: 'Connect with friends, schedule gaming time and more',
    },
    {
      title: 'Create group chats',
      imageUrl: '../../../../assets/backgrounds/slide-team.png',
      description: 'Use the chat features to connect with multiple friends at once',
    },
    {
      title: 'Connect your accounts',
      imageUrl: '../../../../assets/backgrounds/slide-console.png',
      description: 'Make sure to connect your steam, xbox and playstation accounts for the best experience',
    },
    {
      title: 'Ready to play?',
      imageUrl: '../../../../assets/backgrounds/slide-play.png',
      description: 'Get into the app and start exploring the features now!',
    }
  ];

  onSlideChanged() {
    this.slider.getActiveIndex().then(index => {
      this.slideIndex = index;
    });
    console.log('Slide changed! Current index is', this.slideIndex);
  }

  async closeModal() {
    await this.modalController.dismiss();
  }

}
