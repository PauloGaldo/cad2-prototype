import { AfterViewInit, Component } from "@angular/core";
import { MatButtonToggleChange } from "@angular/material";
declare var M: any;

@Component({
  selector: "cad-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements AfterViewInit {
  public verSabana: boolean;
  public nivelIncidencia: string;
  public nivelIncidenciaElegida = "center";

  constructor() {
    this.verSabana = false;
    this.nivelIncidencia = "left";
  }

  ngAfterViewInit(): void {
    // var elems = document.querySelectorAll(".timepicker");
    // var instances = M.Timepicker.init(elems, { format: 'dd/MM/yyyy hh:mm' });
  }

  mostrarSabana() {
    this.verSabana = !this.verSabana;
  }

  cambioIncidencia(event: MatButtonToggleChange) {
    this.nivelIncidenciaElegida = event.value;
  }
}
