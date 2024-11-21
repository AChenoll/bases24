import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-heroe',
  standalone: false,
  templateUrl: './heroe.component.html'
})
export class HeroeComponent {

  public nombre: string = 'Goku';
  public edad: number = 32;

  public get nombreCapitalizado(): string{
    return this.nombre.toUpperCase();
  }

  public getDescripcionHeroe(): string{
    return `${this.nombre} - ${this.edad}`
  }

  private getNombrePrivado(): string{
    return 'Kakarot'
  }

  public cambiarNombre(): void{
    this.nombre='Kakarot';
  }

  public cambiarEdad(): void{
    this.edad=45;
  }

  public restablecerDatos(): void{
    this.edad=32;
    this.nombre='Goku';
  }

  constructor(){}

}
