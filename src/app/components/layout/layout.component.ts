import { Component, OnInit } from '@angular/core';
import { ResizeEvent } from 'angular-resizable-element';
import { DragulaService } from 'ng2-dragula';

@Component({
    selector: 'cad-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

    public widthWindow = window.innerWidth;
    public heightWindow = window.innerHeight;

    public styleDirInc = {};
    public styleOriLlam = {};
    public styleDesInc = {};
    public styleTipInc = {};
    public styleCorp = {};
    public styleNotInc = {};
    public styleCuest = {};
    public styleProt = {};
    public styleCol1 = {};
    public styleCol2 = {};
    public textoOrigenLlamada = '';
    public valoresForm = {};

    public grid: any;

    constructor(private dragulaService: DragulaService) {

    }

    ngOnInit() {
        this.styleOriLlam = {
            top: '0px',
            left: '0px',
            width: `${(this.widthWindow / 100) * 37.5}px`,
            height: `${197}px`
        };
        this.styleDirInc = {
            top: `${192}px`,
            left: '0px',
            width: `${(this.widthWindow / 100) * 37.5}px`,
            height: `${197}px`
        };
    }

    onDragOL(event: any) {
        // this.styleOriLlam = {
        //     top: event.top,
        //     left: event.left
        // };
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
