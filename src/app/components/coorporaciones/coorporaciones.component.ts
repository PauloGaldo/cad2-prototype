import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ResizeEvent } from 'angular-resizable-element';

@Component({
  selector: 'cad-coorporaciones',
  templateUrl: './coorporaciones.component.html',
  styleUrls: ['./coorporaciones.component.scss']
})
export class CoorporacionesComponent implements OnInit {

  public style = {};
  @Output() resize: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onResizeEnd(event: ResizeEvent): void {
    console.log(event.rectangle.width);
    this.style = {
      width: `${event.rectangle.width}px`,
      height: 'auto'
    };
    this.resize.emit(event.rectangle.width);
  }

}
