import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import { HeroService } from './../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  constructor(private heroService: HeroService) {}
  hero: Hero = {
    id: 1,
    name: 'Windstorm',
    firstname: 'john',
    lastname: 'rambo',
    birthdate: new Date('1987-10-10')
  };

  name = new FormControl('');
  firstname = new FormControl('');
  lastname = new FormControl('');
  birthdate = new FormControl('');
  id: number;

  heroes: Hero[];

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => (this.heroes = heroes));
  }

  add(): void {
    const hero = {
      //  id: this.id,
      name: this.name.value,
      firstname: this.firstname.value,
      lastname: this.lastname.value,
      birthdate: this.birthdate.value
    };
    console.log(hero);
    this.heroService.addHero(hero as Hero).subscribe(hero => {
      this.heroes.push(hero);
    });
  }
}
