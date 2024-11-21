import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-lista',
  standalone: false,
  templateUrl: './lista.component.html',
  styles: ``
})
export class ListaComponent {
  public nombresHeroes: string[] = ['Goku', 'Vegeta', 'Trunks', 'Gohan'];

}
