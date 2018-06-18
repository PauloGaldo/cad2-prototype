import { Component, OnInit } from '@angular/core';
import { DragulaService } from 'ng2-dragula';

@Component({
  selector: 'cad-incidencia-medica-acordeones',
  templateUrl: './incidencia-medica-acordeones.component.html',
  styleUrls: ['./incidencia-medica-acordeones.component.scss']
})
export class IncidenciaMedicaAcordeonesComponent implements OnInit {

  constructor(private dragulaService: DragulaService) {
    dragulaService.setOptions('first-bag', {
      moves: function (el, container, handle) {
        return handle.className === 'handle mat-icon material-icons';
      }
    });
  }

  ngOnInit() {
  }

}
