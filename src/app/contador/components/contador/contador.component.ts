import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-contador',
  template: `<hr>
  <p>
    Contador: {{ contador }}
  </p>
  <button (click)="incrementarPor()">+ {{cantidad}}</button>
  <button (click)="reset()">RESET</button>
  <button (click)="disminuirPor()">- {{cantidad}}</button>`
})

export class ContadorComponent {
  public contador: number = 0;
  public cantidad: number = 5;

  incrementarPor(): void {
    this.contador += this.cantidad;
  }

  disminuirPor(): void {
    this.contador -= this.cantidad;
  }

  reset(): void {
    this.contador = 0;
  }
}
