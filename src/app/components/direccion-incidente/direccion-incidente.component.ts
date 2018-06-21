import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ResizeEvent } from 'angular-resizable-element';

@Component({
  selector: 'cad-direccion-incidente',
  templateUrl: './direccion-incidente.component.html',
  styleUrls: ['./direccion-incidente.component.scss']
})
export class DireccionIncidenteComponent implements OnInit {
  public style = {};

  @Output() resize: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() { }

  onResizeEnd(event: ResizeEvent): void {
    this.style = {
      width: `${event.rectangle.width}px`,
      height: 'auto'
    };
    this.resize.emit(event.rectangle.width);
  }
}
