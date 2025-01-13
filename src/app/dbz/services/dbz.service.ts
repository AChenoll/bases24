import { Injectable } from '@angular/core';
import { Personaje } from '../interfaces/personaje.interface';

@Injectable({providedIn: 'root'})
export class DbzService {
  constructor() { }

  public personajes: Personaje [] = [
    {
      nombre: 'Krilin',
      fuerza: 500
    },{
      nombre: 'Goku',
      fuerza: 10000
    },{
      nombre: 'Trunks',
      fuerza: 7000
    }
  ];

  public onNewPersonaje(personaje: Personaje): void {
    this.personajes.push(personaje);
  }

  // Recibo el index del personaje a eliminar y lo elimino usando el splice
  public onDeletePersonaje(index: number): void {
    this.personajes.splice(index, 1)
  }

}
