import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../model/hero.model';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.sass']
})
export class HeroDetailComponent implements OnInit {
  @Input()
  hero?: Hero;





  constructor() { }

  ngOnInit(): void {
  }

}
