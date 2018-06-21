import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ResizeEvent } from 'angular-resizable-element';

@Component({
  selector: 'cad-tipo-incidente',
  templateUrl: './tipo-incidente.component.html',
  styleUrls: ['./tipo-incidente.component.scss']
})
export class TipoIncidenteComponent implements OnInit {

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
