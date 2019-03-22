import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChatService } from 'src/app/services/chat/chat.service';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.page.html',
  styleUrls: ['./message.page.scss'],
})
export class MessagePage implements OnInit {
  chat$: Observable<any>;
  userId:any;
  newMsg: string;
  chatId: any;
  constructor(private activatedRoute: ActivatedRoute, public chatService: ChatService, private authService: AuthService) { }

  ngOnInit() {
    this.authService.getUser().then(user => {
      this.userId = user.uid
    });
    this.chatId = this.activatedRoute.snapshot.paramMap.get('id');
    const source = this.chatService.get(this.chatId);
    this.chat$ = this.chatService.joinUsers(source);
  }

  submit() {
    if(!this.newMsg){
      return alert('Enter something!');
    }
    this.chatService.sendMessage(this.chatId, this.newMsg);
    this.newMsg = '';
  }

  trackByCreated(i, msg){
    return msg.createdAt;
  }
}
