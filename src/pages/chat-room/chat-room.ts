import { Component } from '@angular/core';
import { FirebaseListObservable } from "angularfire2";
import { AuthService } from "../../providers/auth.service";
import { DataService } from "../../providers/data.service";

@Component({
  selector: 'chat-room-page',
  templateUrl: 'chat-room.html'
})
export class ChatRoomPage {
  currentUser = '';
  messages: FirebaseListObservable<any[]>; // TODO: create Message class
  newMessage: string = '';

  constructor(public dataSrv: DataService, public authSrv: AuthService) {
    this.messages = dataSrv.getMessages();
    this.currentUser = authSrv.getUserEmail();
  }

  addMessage() {
    let now = new Date();
    this.dataSrv.postMessage({
      author: this.currentUser,
      message: this.newMessage,
      posted: now.getTime()
    });
    this.newMessage = '';
  }

}
