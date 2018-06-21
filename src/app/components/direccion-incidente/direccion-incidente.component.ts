import { Component, OnInit } from "@angular/core";
import { ResizeEvent } from "angular-resizable-element";

@Component({
  selector: "cad-direccion-incidente",
  templateUrl: "./direccion-incidente.component.html",
  styleUrls: ["./direccion-incidente.component.scss"]
})
export class DireccionIncidenteComponent implements OnInit {
  public style = {};

  constructor() {}

  ngOnInit() {}

  onResizeEnd(event: ResizeEvent): void {
    console.log(event.rectangle.width);
    this.style = {
      // position: 'fixed',
      // left: `${event.rectangle.left}px`,
      // top: `${event.rectangle.top}px`,
      width: `${event.rectangle.width}px`,
      height: "auto" // `${event.rectangle.height}px`
    };
  }
}
