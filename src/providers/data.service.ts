import { Injectable } from '@angular/core';
import {AngularFire, FirebaseListObservable} from 'angularfire2';

import 'rxjs/add/operator/first';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Hero } from "../models/hero";

@Injectable()
export class DataService {

  constructor(public af: AngularFire) { }

  getHeroes(): Promise<Hero[]> {
    return this.af.database
      .list('heroes')
      .map(data => {
        let heroes: Hero[] = [];
        data.forEach(function (item) {
          heroes.push(Hero.decode(item))
        });
        return heroes;
      })
      .first()
      .toPromise()
    ;
  }

  getMessages(): FirebaseListObservable<any[]> {
    return this.af.database.list('chatroom');
  }

  postMessage(message) {
    this.af.database.list('chatroom').push(message);
  }

}
