import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interface";

@Injectable()
export class DbzService {

    private _personajes: Personaje[] = [
        {
          nombre:'Goku',
          poder:1500
        },
        {
          nombre: 'Vegeta',
          poder:1000
        }
      ];

    get personajes(): Personaje[]{
        return [...this._personajes]; //spread para no referenciar _personajes y evitar la modificación
    }

    constructor(){
    }

    agregarPersonaje(personaje: Personaje){
        this._personajes.push(personaje);
    }
}