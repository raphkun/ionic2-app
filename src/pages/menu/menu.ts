import { Component, ViewChild } from '@angular/core';
import { Nav } from "ionic-angular";

import { AuthService } from "../../providers/auth.service";

import { SignInPage } from "../signin/signin";
import { MasterList } from "../master-list/master-list";
import { ChatRoomPage } from "../chat-room/chat-room";

@Component({
  selector: 'menu',
  templateUrl: 'menu.html'
})
export class Menu {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = SignInPage;
  pages: Array<{title: string, icon: string, component: any}>;

  constructor(private auth:AuthService) {
    // TODO: load available pages from DataService
    this.pages = [
      { title: 'Dashboard', icon: 'ios-image-outline', component: MasterList },
      { title: 'Photos', icon: 'ios-image-outline', component: null },
      { title: 'Available Missions', icon: 'ios-image-outline', component: null },
      { title: 'My Missions', icon: 'ios-image-outline', component: null },
      { title: 'Chat', icon: 'ios-chatboxes-outline', component: ChatRoomPage }
    ];
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    if (page.component) {
      this.nav.setRoot(page.component);
    }
  }

  logout() {
    this.nav.setRoot(SignInPage);
    this.auth.signOut();
  }

  ionViewDidLoad() {
  }

}
