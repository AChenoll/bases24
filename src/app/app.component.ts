import { Component } from '@angular/core';
import { InstitutoComponent } from './instituto/instituto.component';
import { ContadorModule } from './contador/contador.module';
import { HeroesModule } from './heroes/heroes.module';
import { DbzModule } from './dbz/dbz.module';
import { MainPageComponent } from './dbz/pages/main-page.component';



@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [ContadorModule, HeroesModule, InstitutoComponent, DbzModule]
})
export class AppComponent {
  public title: string = 'Mi primera App de Angular';
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
