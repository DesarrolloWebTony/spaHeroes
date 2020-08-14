import { Component, OnInit } from '@angular/core';
// se exportara el servicio y una interfaz
import { HeroesService, Heroe } from '../../services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
})

export class HeroesComponent implements OnInit {


  // que los demas pasos generen esta variable es bueno para poder hacer
  // el ngFor
  heroes: Heroe[] = [];

  constructor( private _heroesService:HeroesService,
               private router:Router
               ) {
                    // console.log('constructor');
                }

  ngOnInit() {

    // no hay error por que heroes es un arreglo de Heroes y 
    // Y getHeroes retorna a Heroes
    this.heroes = this._heroesService.getHeroes();
    // console.log( this.heroes );
  }

  verHeroe( idx:number ){
      // console.log(idx);
      this.router.navigate( ['heroe', idx] );
  }

}
