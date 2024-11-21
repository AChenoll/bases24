import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Instituto{
  nombre: string;
  localidad: string;
  familiasProfesionales: string[];
  logo: string;
}

@Component({
  selector: 'app-instituto',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './instituto.component.html',
  styles: ``
})
export class InstitutoComponent {

  public playamar: Instituto = {
    nombre: 'IES Playamar',
    localidad: 'Torremolinos',
    familiasProfesionales: ['Informatica y Comunicaciones', 'Transporte y Mantenimiento'],
    logo: 'playamar.png'
  }

  public jacaranda: Instituto = {
    nombre: 'IES Jacaranda',
    localidad: 'Churriana',
    familiasProfesionales: ['Hostelería y turismo'],
    logo: 'jacaranda.jpg'
  }

  public fuengirola: Instituto = {
    nombre: 'IES Fuengirola N1',
    localidad: 'Fuengirola',
    familiasProfesionales: ['Informatica y Comunicaciones'],
    logo: 'fuengirola.jpg'
  }

  public politecnico: Instituto = {
    nombre: 'IES Politecnico Jesus Marin',
    localidad: 'Malaga',
    familiasProfesionales: ['Informatica y Comunicaciones', 'Transporte y Mantenimiento', 'Imagen y Sonido', 'Administracion y Finanzas', 'Mantenimiento Electronico'],
    logo: 'politecnico.jpg'
  }

  public portada: Instituto = {
    nombre: 'IES Portada Alta',
    localidad: 'Malaga',
    familiasProfesionales: ['Informatica y Comunicaciones', 'Administracion y Finanzas'],
    logo: 'portadaalta.jpg'
  }

  public listadoNombresCentro: Instituto[] = [this.playamar, this.jacaranda, this.fuengirola, this.politecnico, this.portada];
  public pilaCentros: Instituto[] = [];

  public posicionLista: number = 0; //Inicializo a 0 para utilizar el primer puesto de la lista de centros

  public anterior(): void {
    if (this.posicionLista > 0) { //Controlo que no se pase de la posicion minima del array
      this.posicionLista -= 1;
    }
  }

  public siguiente(): void { //Controlo que no se pase de la posicion maxima del array
    if (this.posicionLista < this.listadoNombresCentro.length - 1) {
      this.posicionLista += 1;
    }
  }


  public eliminar(): void {
    let eliminadoArray = this.listadoNombresCentro.splice(this.posicionLista, 1);
    let eliminado = eliminadoArray.pop();
    this.pilaCentros.push(eliminado!);
    if (this.posicionLista >= this.listadoNombresCentro.length) {
      this.posicionLista -= 1;
      if (this.posicionLista < 0) {
        this.posicionLista = 0;
      }
    }
  }


  public insertar(): void {
    let insertado = this.pilaCentros.pop()
    let insertacion = this.listadoNombresCentro.splice(this.posicionLista, 0, insertado!)
  }
}
