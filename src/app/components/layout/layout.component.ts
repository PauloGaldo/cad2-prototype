import { Component, OnInit } from '@angular/core';
import { ResizeEvent } from 'angular-resizable-element';
import { DragulaService } from 'ng2-dragula';

@Component({
    selector: 'cad-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

    public styleDirInc = {};
    public styleDesInc = {};
    public styleOriLlam = {};
    public styleTipInc = {};
    public styleCorp = {};
    public styleNotInc = {};
    public styleCuest = {};
    public styleProt = {};
    public styleCol1 = {};
    public styleCol2 = {};
    public textoOrigenLlamada = '';
    public valoresForm = {};
    public width = 30;

    constructor(private dragulaService: DragulaService) {
        // dragulaService.setOptions('first-bag', {
        //     moves: function (el, container, handle) {
        //         return /handle/gi.test(handle.className);
        //     }
        // });
    }

    ngOnInit() {
    }

    onResizeEnd(event: ResizeEvent): void {
        const resize = event.rectangle.width * 100 / window.innerWidth;
        this.styleCol1 = {
            width: `${resize}%`
        };
        this.styleCol2 = {
            width: `${100 - resize}%`
        };
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

    onResizeCU(event) {
        this.styleCuest = {
            width: `${event}px`,
            height: 'auto'
        };
    }

    onResizePRO(event) {
        this.styleProt = {
            width: `${event}px`,
            height: 'auto'
        };
    }

    formChange(values: any) {
        console.log(values);
        this.valoresForm = values;
    }

}
