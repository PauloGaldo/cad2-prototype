import { Component } from '@angular/core';
import { MatButtonToggleChange } from '@angular/material';

@Component({
  selector: 'cad-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public verSabana: boolean;
  public nivelIncidencia: string;
  public nivelIncidenciaElegida = 'center';

  constructor() {
    this.verSabana = false;
    this.nivelIncidencia = 'left';
  }

  mostrarSabana() {
    this.verSabana = !this.verSabana;
  }

  cambioIncidencia(event: MatButtonToggleChange) {
    this.nivelIncidenciaElegida = event.value;
  }

}
