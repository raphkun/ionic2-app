import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { SignInPage } from '../pages/signin/signin';
import { Menu } from '../pages/menu/menu';
import { MasterList } from '../pages/master-list/master-list';
import { DetailPage } from '../pages/detail/detail';
import { ChatRoomPage } from '../pages/chat-room/chat-room'

import { AngularFireModule } from 'angularfire2';
import { AuthService } from "../providers/auth.service";
import { DataService } from "../providers/data.service";

export const firebaseConfig = {
  apiKey: "AIzaSyDAcw5wiOp4lGuIYCjHwU0j-autQTtd9Co",
  authDomain: "heroes-c135c.firebaseapp.com",
  databaseURL: "https://heroes-c135c.firebaseio.com",
  storageBucket: "heroes-c135c.appspot.com",
  messagingSenderId: "905837988978"
};

@NgModule({
  declarations: [
    MyApp,
    SignInPage,
    Menu,
    MasterList,
    DetailPage,
    ChatRoomPage
  ],
  imports: [
    IonicModule.forRoot(MyApp, {
      backButtonText: ''
    }),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SignInPage,
    Menu,
    MasterList,
    DetailPage,
    ChatRoomPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, AuthService, DataService]
})
export class AppModule {}
