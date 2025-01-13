import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../../interfaces/personaje.interface';

@Component({
  selector: 'dbz-lista',
  standalone: false,
  templateUrl: './lista.component.html',
  styles: ``
})
export class ListaComponent {

  @Input()
  public listaPersonajes: Personaje[] = [
    {
      nombre: 'Default',
      fuerza: 0
    }
  ];

  // Creamos el emisor
  @Output()
  public onDeletePersonaje: EventEmitter<number> = new EventEmitter();

  // Hagoi la funcion que emite el indice de la posicion que queremos eliminar
  public deletePersonaje(index: number): void {
    this.onDeletePersonaje.emit(index);
  };
}
