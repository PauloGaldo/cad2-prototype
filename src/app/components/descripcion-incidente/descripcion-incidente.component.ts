import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ResizeEvent } from 'angular-resizable-element';

@Component({
  selector: 'cad-descripcion-incidente',
  templateUrl: './descripcion-incidente.component.html',
  styleUrls: ['./descripcion-incidente.component.scss']
})
export class DescripcionIncidenteComponent implements OnInit {

  public style = {};
  @Output() resize: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onResizeEnd(event: ResizeEvent): void {
    this.style = {
      width: `${event.rectangle.width}px`,
      height: 'auto'
    };
    this.resize.emit(event.rectangle.width);
  }

}
