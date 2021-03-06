import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar-personajes',
  templateUrl: './agregar-personajes.component.html'
})
export class AgregarPersonajesComponent {

  //La clase hijo contiene el imput y el output con el eventEmitter

    @Input() nuevo: Personaje = {
      nombre:'',
      poder:0
    }

    //para acceder al servicio, lo importamos y creamos una instancia.
    constructor(private dbzService: DbzService){}

  //@Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

  agregar(){
    if(this.nuevo.nombre.trim().length === 0){
      return;
    }

    //this.onNuevoPersonaje.emit(this.nuevo)

    this.dbzService.agregarPersonaje(this.nuevo);

    this.nuevo={
      nombre:"",
      poder:0
    }
  }
}