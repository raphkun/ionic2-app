import { Component, OnInit } from '@angular/core';
import { NavController, Loading, LoadingController } from 'ionic-angular';
import { DetailPage } from '../detail/detail';

import { Hero } from "../../models/hero";
import { DataService } from "../../providers/data.service";

@Component({
  selector: 'master-list',
  templateUrl: 'master-list.html'
})
export class MasterList implements OnInit {
  loading: Loading;
  heroes: Hero[];

  constructor(public navCtrl: NavController, private loadingCtrl: LoadingController, public dataService: DataService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(refresher ?): void {
    this.showLoading();
    this.dataService
      .getHeroes()
      .then(heroes => {
        this.heroes = heroes;
        this.loading.dismiss();
        refresher && refresher.complete();
      })
    ;
  }

  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Loding heroes...'
    });
    this.loading.present();
  }

  heroTapped(event, tappedHero) {
    this.navCtrl.push(DetailPage, {
      hero: tappedHero
    });
  }
}
