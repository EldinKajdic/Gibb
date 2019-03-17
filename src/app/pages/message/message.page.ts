import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-message',
  templateUrl: './message.page.html',
  styleUrls: ['./message.page.scss'],
})
export class MessagePage implements OnInit {
  chatId:string = null;
  imgSrcSender:string = "https://scontent-arn2-1.xx.fbcdn.net/v/t1.0-1/p50x50/33711477_10216009252241663_8544926530193588224_n.jpg?_nc_cat=101&_nc_ht=scontent-arn2-1.xx&oh=3bbe0d2fcf1a1ab89696ccf02e483e08&oe=5D1DAC95";
  imgSrcReceiver:string = "https://media.licdn.com/dms/image/C4D03AQHUp9evMmCruA/profile-displayphoto-shrink_200_200/0?e=1556755200&v=beta&t=nKQoJIs8Aiz-JKEUNORmLzMjpWJVkiJoZxIyWnPzOus";
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.chatId = this.activatedRoute.snapshot.paramMap.get('chatId');
  }
}
