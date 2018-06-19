import { Component, OnInit } from '@angular/core';
import { ResizeEvent } from 'angular-resizable-element';

@Component({
  selector: 'cad-tipo-incidente',
  templateUrl: './tipo-incidente.component.html',
  styleUrls: ['./tipo-incidente.component.scss']
})
export class TipoIncidenteComponent implements OnInit {

  public style = {};

  constructor() { }

  ngOnInit() {
  }

  onResizeEnd(event: ResizeEvent): void {
    console.log(event.rectangle.width);
    this.style = {
      // position: 'fixed',
      // left: `${event.rectangle.left}px`,
      // top: `${event.rectangle.top}px`,
      width: `${event.rectangle.width}px`,
      height: 'auto'// `${event.rectangle.height}px`
    };
  }

}
