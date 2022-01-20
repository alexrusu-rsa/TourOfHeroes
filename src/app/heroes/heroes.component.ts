import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { HEROES } from '../mock/heroes.mock';
import { Hero } from '../model/hero.model';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.sass']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];
    selectedHero?: Hero;

  constructor(private heroService:HeroService) {
   }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroes = this.heroService.getHeroes();
  }

onSelect(hero: Hero): void {
  this.selectedHero = hero;
}

}
