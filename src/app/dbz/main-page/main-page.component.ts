import { Component } from '@angular/core';
import { provideRoutes } from '@angular/router';
import { Personaje } from '../interfaces/dbz.interface';
import { AgregarPersonajesComponent } from '../agregar-personajes/agregar-personajes.component';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {

  nuevo: Personaje = {
    nombre:"ejem",
    poder:22
  }

  // get personajes(): Personaje[]{
  //   return this.dbzService.personajes;
  // }

  // cambiarNombre(event: any){
  //   console.log(event.target.value);
  // }

  constructor(){

  }
}
