import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroeComponent } from './heroe/heroe.component';
import { ListaComponent } from './lista/lista.component';



@NgModule({
  declarations: [HeroeComponent, ListaComponent],
  imports: [CommonModule],
  exports: [HeroeComponent, ListaComponent]
})
export class HeroesModule { }
