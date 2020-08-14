import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { HeroesService, Heroe } from '../../../services/heroes.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit {

  // heroes: Heroe[] = [];

  constructor(
              private router : Router,
              // private _heroesService : HeroesService
  ) { }

  ngOnInit(){
    
        // this.heroes = this._heroesService.getHeroes();

  }

  buscarHeroe( termino: string ){
      console.log(termino);
      this.router.navigate( ['/busqueda', termino] );
  }

}
