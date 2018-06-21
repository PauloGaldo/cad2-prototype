import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ResizeEvent } from 'angular-resizable-element';

@Component({
  selector: 'cad-origen-llamada',
  templateUrl: './origen-llamada.component.html',
  styleUrls: ['./origen-llamada.component.scss']
})
export class OrigenLlamadaComponent implements OnInit {

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
