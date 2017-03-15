export class Hero {
  id: number;
  name: string;
  avatar: string;
  background: string;
  alias: string;
  abilities: any;

  static decode(json): Hero {
    let hero = Object.create(Hero.prototype);
    return Object.assign(hero, json);
  }
}
