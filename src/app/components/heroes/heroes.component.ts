import{Component, OnInit} from '@angular/core';

//servicio
import{ HeroesService, Heroe } from '../../servicios/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html', 
})
export class HeroesComponent implements OnInit {

    heroes:Heroe[] = [];
    constructor(private _heroesService:HeroesService ){
      console.log("constructor");
    }

    ngOnInit(){
      //console.log("ngOnInit");
      this.heroes = this._heroesService.getHeroes();
      console.log(this.heroes);
    }
}