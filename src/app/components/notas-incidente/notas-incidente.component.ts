import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ResizeEvent } from 'angular-resizable-element';

@Component({
  selector: 'cad-notas-incidente',
  templateUrl: './notas-incidente.component.html',
  styleUrls: ['./notas-incidente.component.scss']
})
export class NotasIncidenteComponent implements OnInit {

  public nota_incidente;
  public style = {};
  @Output() resize: EventEmitter<number> = new EventEmitter();

  notes = [
    {
      name: 'Neque porro quisquam est qui dolorem',
      updated: new Date('2/20/16'),
    },
  ];

  ngOnInit() {
  }

  onResizeEnd(event: ResizeEvent): void {
    this.style = {
      width: `${event.rectangle.width}px`,
      height: 'auto'
    };
    this.resize.emit(event.rectangle.width);
  }

  onEnter(event: any) {
    this.notes.push({ name: this.nota_incidente, updated: new Date() });
    this.nota_incidente = null;
    const alturaVentana = window.innerHeight;
    const anchuraVentana = window.innerWidth;
    const columna1 = document.getElementsByClassName('columna1');
    const columna2 = document.getElementsByClassName('columna2');
    const table_container = document.getElementsByClassName('table_container');
    setTimeout(() => {
      table_container[0].setAttribute('style', 'height:' + (alturaVentana - columna2[0].clientHeight - 117) + 'px');
    }, 200);
  }

}
