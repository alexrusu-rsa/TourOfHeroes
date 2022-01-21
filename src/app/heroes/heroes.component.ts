import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { MessagesService } from '../messages.service';
import { Hero } from '../model/hero.model';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.sass']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];
    selectedHero?: Hero;

  constructor(private heroService:HeroService, private messagesService:MessagesService) {
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroesAux=>this.heroes = heroesAux);
  }

onSelect(hero: Hero): void {
  this.selectedHero = hero;
  this.messagesService.add(`HeroesComponent: Selected hero id=${hero.id}`);

}

}
