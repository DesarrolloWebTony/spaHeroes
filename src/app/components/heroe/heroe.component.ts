import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})

export class HeroeComponent {

  heroe:any = {};

  constructor( private activateRoute: ActivatedRoute,
               private _heroservice: HeroesService,
               private _router : Router
               ){
      this.activateRoute.params.subscribe( params => {
      // console.log( params['id'] );
      this.heroe = this._heroservice.getHeroe( params['id'] );
      console.log(this.heroe);
      });

   }

   regresar(){
     this._router.navigate(['heroes']);
   }


}
