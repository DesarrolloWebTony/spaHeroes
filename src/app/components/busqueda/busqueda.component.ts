import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
})

export class BusquedaComponent implements OnInit {

  heroes: any[] = [];
  termino: string;

  constructor(
              private _heroesService : HeroesService,
              private activateRoute : ActivatedRoute
  ) {}

  ngOnInit(){

    // console.log(this.heroes = this._heroesService.buscarHeroes('spiderman'));
      this.activateRoute.params.subscribe( params => {
      this.termino = params['termino'];
      this.heroes = this._heroesService.buscarHeroes( params['termino'] );
      console.log(this.heroes);
      });

  }

}
