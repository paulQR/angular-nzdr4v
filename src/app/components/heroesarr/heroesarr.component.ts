import{Component, OnInit} from '@angular/core';

import{ActivatedRoute} from '@angular/router';
//servicio
import{ HeroesService, Heroe} from '../../servicios/heroes.service';

@Component({
  selector: 'app-heroesarr',
  templateUrl: './heroesarr.component.html', 
})
export class HeroesArrComponent implements OnInit {
    heroes:Heroe[] = [];
    constructor(private activateRoute: ActivatedRoute,
    private _heroesService:HeroesService){}

    ngOnInit(){
       // this.heroes = this._heroesService.getHeroes();
        this.activateRoute.params.subscribe( params => {
        // console.log( params['id'] );
          this.heroes = this._heroesService.getHeroe( params['termino']);
          console.log( this.heroes );
        })

    }
}