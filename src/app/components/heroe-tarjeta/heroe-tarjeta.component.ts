import{Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html', 
})
export class HeroeTarjetaComponent implements OnInit {
    // la propiedad heroe puede venir de afuera
    @Input() heroe: any ={};
    @Input() index: number; 
    constructor(){}

    ngOnInit(){

    }

    verHeroe(){
      console.log(this.index);
    }
}