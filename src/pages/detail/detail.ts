import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';

import { Hero } from '../../models/hero';

@Component({
  selector: 'detail-page',
  templateUrl: 'detail.html'
})
export class DetailPage {
  hero: Hero;

  constructor(public navParams: NavParams) {
    this.hero = this.navParams.get('hero');
  }

  ionViewDidLoad() {
  }

}
