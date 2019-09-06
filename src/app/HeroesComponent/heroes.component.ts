import { Component, OnInit } from '@angular/core';
import {Template} from '@angular/compiler/src/render3/r3_ast';
import {Hero} from '../Classes/hero';
import {RouterModule} from '@angular/router';
import {HeroService} from '../Services/hero.service';



@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  selectedHero: Hero;
  heroes: Hero[];

  constructor(private heroService: HeroService) {}


  ngOnInit() {
    this.getHeroes();
  }
  /*
  *Because asynchronous method, we need "Subscribe" to return an Observable
   */
  getHeroes(): void {
   this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);

  }


}




