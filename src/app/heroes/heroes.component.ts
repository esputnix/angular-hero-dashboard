import { Component, OnInit } from '@angular/core';

import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: ["a", "b", 'c'];

  constructor(p) { }

  ngOnInit() {
  }

}
