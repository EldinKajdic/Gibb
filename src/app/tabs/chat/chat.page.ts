import { Component, ViewChild  } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-chat',
  templateUrl: 'chat.page.html',
  styleUrls: ['chat.page.scss']
})

export class chatPage {

  public searchBarDisplayed = false;
  public searchText:string = '';
  public chatsLastWeekRows:any;

  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  constructor() {}

  chatsToday = [{
    chatId: 1,
    imageUrl: 'https://media.licdn.com/dms/image/C4D03AQHUp9evMmCruA/profile-displayphoto-shrink_200_200/0?e=1556755200&v=beta&t=nKQoJIs8Aiz-JKEUNORmLzMjpWJVkiJoZxIyWnPzOus',
    title: 'MartiaKar',
    lastMessage: 'Where we droppin booyzzz?',
    timestamp: new Date()
  },
  {
    chatId: 2,
    imageUrl: 'https://scontent-arn2-1.xx.fbcdn.net/v/t1.0-1/p50x50/33711477_10216009252241663_8544926530193588224_n.jpg?_nc_cat=101&_nc_ht=scontent-arn2-1.xx&oh=3bbe0d2fcf1a1ab89696ccf02e483e08&oe=5D1DAC95',
    title: 'MayhaaM',
    lastMessage: 'BRB time to walk the dog..',
    timestamp: new Date()
  }];

  chatsYesterday = [{
    chatId: 3,
    imageUrl: 'https://media.licdn.com/dms/image/C4D03AQHUp9evMmCruA/profile-displayphoto-shrink_200_200/0?e=1556755200&v=beta&t=nKQoJIs8Aiz-JKEUNORmLzMjpWJVkiJoZxIyWnPzOus',
    title: 'MartiaKar',
    lastMessage: 'Ping if you see a R209 carbine',
    timestamp: new Date()
  },
  {
    chatId: 4,
    imageUrl: 'https://scontent-arn2-1.xx.fbcdn.net/v/t1.0-1/p50x50/33711477_10216009252241663_8544926530193588224_n.jpg?_nc_cat=101&_nc_ht=scontent-arn2-1.xx&oh=3bbe0d2fcf1a1ab89696ccf02e483e08&oe=5D1DAC95',
    title: 'MayhaaM',
    lastMessage: 'Body armor here, level three!',
    timestamp: new Date()
  }];

  chatsLastWeek= [{
    chatId: 5,
    imageUrl: 'https://scontent-arn2-1.xx.fbcdn.net/v/t1.0-1/p50x50/33711477_10216009252241663_8544926530193588224_n.jpg?_nc_cat=101&_nc_ht=scontent-arn2-1.xx&oh=3bbe0d2fcf1a1ab89696ccf02e483e08&oe=5D1DAC95',
    title: 'MayhaaM',
    lastMessage: 'Helloooo mother truckers',
    timestamp: new Date().setDate(new Date().getDate() - 3)
  },
  {
    chatId: 6,
    imageUrl: 'https://media.licdn.com/dms/image/C4D03AQHUp9evMmCruA/profile-displayphoto-shrink_200_200/0?e=1556755200&v=beta&t=nKQoJIs8Aiz-JKEUNORmLzMjpWJVkiJoZxIyWnPzOus',
    title: 'MartiaKar',
    lastMessage: 'Let\'s go to africa!',
    timestamp: new Date().setDate(new Date().getDate() - 6)
  }];

  chatsLastMonth= [
  {
    chatId: 7,
    imageUrl: 'https://media.licdn.com/dms/image/C4D03AQHUp9evMmCruA/profile-displayphoto-shrink_200_200/0?e=1556755200&v=beta&t=nKQoJIs8Aiz-JKEUNORmLzMjpWJVkiJoZxIyWnPzOus',
    title: 'MartiaKar',
    lastMessage: 'Wow did you read about the new champ Gibraltar? I heard he rocks!',
    timestamp: new Date().setDate(new Date().getDate() - 14)
  },
  {
    chatId: 8,
    imageUrl: 'https://scontent-arn2-1.xx.fbcdn.net/v/t1.0-1/p50x50/33711477_10216009252241663_8544926530193588224_n.jpg?_nc_cat=101&_nc_ht=scontent-arn2-1.xx&oh=3bbe0d2fcf1a1ab89696ccf02e483e08&oe=5D1DAC95',
    title: 'MayhaaM',
    lastMessage: 'Hey guys lets drop at market for once, relinquish dropmaster please',
    timestamp: new Date().setDate(new Date().getDate() - 22)
  }];

  loadData(event) {
    setTimeout(() => {
      event.target.complete();

      this.chatsLastMonth.push({
        chatId: 9,
        imageUrl: 'https://media.licdn.com/dms/image/C4D03AQHUp9evMmCruA/profile-displayphoto-shrink_200_200/0?e=1556755200&v=beta&t=nKQoJIs8Aiz-JKEUNORmLzMjpWJVkiJoZxIyWnPzOus',
        title: 'MartiaKar',
        lastMessage: 'Anyone down to gibb all night?',
        timestamp: new Date().setDate(new Date().getDate() - 25)
      });
      // App logic to determine if all data is loaded
      // and disable the infinite scroll
      // if (data.length == 1000) {
      //   event.target.disabled = true;
      // }
    }, 500);
  }

  removeMessage(listType, message){
    const index: number = listType.indexOf(message);
    if (index !== -1) {
      listType.splice(index, 1);
    }   
  }

  doRefresh(event) {
    setTimeout(() => {
      event.target.complete();
    }, 2000);
  }

  showNoMessagesText(){
    if(this.chatsLastMonth.length == 0 && this.chatsLastWeek.length == 0 && this.chatsYesterday.length == 0 && this.chatsToday.length == 0){
      return true;
    }
    return false;
  }

}
