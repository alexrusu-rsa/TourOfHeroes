import { Injectable } from '@angular/core';
import { HEROES } from './mock/heroes.mock';
import { Hero } from './model/hero.model';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  getHeroes(): Hero[] {
    return HEROES;
  }
}
