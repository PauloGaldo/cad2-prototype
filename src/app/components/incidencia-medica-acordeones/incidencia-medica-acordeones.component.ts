import { Component, OnInit } from '@angular/core';
import { DragulaService } from 'ng2-dragula';

@Component({
  selector: 'cad-incidencia-medica-acordeones',
  templateUrl: './incidencia-medica-acordeones.component.html',
  styleUrls: ['./incidencia-medica-acordeones.component.scss']
})
export class IncidenciaMedicaAcordeonesComponent implements OnInit {

  public styleDirInc = {};
  public styleDesInc = {};
  public styleOriLlam = {};
  public styleTipInc = {};
  public styleCorp = {};
  public styleNotInc = {};

  constructor(private dragulaService: DragulaService) {
    dragulaService.setOptions('first-bag', {
      moves: function (el, container, handle) {
        return /handle/gi.test(handle.className);
      }
    });
  }

  ngOnInit() {
  }

  onResizeDI(event) {
    this.styleDirInc = {
      width: `${event}px`,
      height: 'auto'
    };
  }

  onResizeOL(event) {
    this.styleOriLlam = {
      width: `${event}px`,
      height: 'auto'
    };
  }

  onResizeDEI(event) {
    this.styleDesInc = {
      width: `${event}px`,
      height: 'auto'
    };
  }

  onResizeTI(event) {
    this.styleTipInc = {
      width: `${event}px`,
      height: 'auto'
    };
  }

  onResizeCO(event) {
    this.styleCorp = {
      width: `${event}px`,
      height: 'auto'
    };
  }

  onResizeNI(event) {
    this.styleNotInc = {
      width: `${event}px`,
      height: 'auto'
    };
  }

}
