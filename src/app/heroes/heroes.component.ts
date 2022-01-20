import { Component, OnInit } from '@angular/core';
import { HEROES } from '../mock/heroes.mock';
import { Hero } from '../model/hero.model';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.sass']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = HEROES;
  selectedHero?: Hero;

  constructor() { }

  ngOnInit(): void {
  }

onSelect(hero: Hero): void {
  this.selectedHero = hero;
}

}
