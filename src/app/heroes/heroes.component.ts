import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../shared/service/hero/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

    heroes: Hero[];
    selectedHero: Hero;

    constructor(private heroService: HeroService) { }

    ngOnInit() {
      this.getHeroes();
    }

    getHeroes() {
      this.heroService.getHeroes().subscribe(
        heroes => this.heroes = heroes
      );

    }

    onSelect(hero: Hero) {
      this.selectedHero = hero;
    }
}
