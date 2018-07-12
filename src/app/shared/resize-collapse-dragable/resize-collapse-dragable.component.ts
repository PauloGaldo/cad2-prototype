import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ResizeEvent } from 'angular-resizable-element';
declare var M: any;

@Component({
    selector: 'cad-resize-collapse-dragable',
    templateUrl: './resize-collapse-dragable.component.html',
    styleUrls: ['./resize-collapse-dragable.component.scss']
})
export class ResizeCollapseDragableComponent implements OnInit, AfterViewInit {

    @Input() collapsible: string;
    @Output() resize: EventEmitter<number> = new EventEmitter();
    @Output() drag: EventEmitter<number> = new EventEmitter();
    public style = {};
    public instances: any;
    public toggle = false;
    public collapsibleClass: string;

    constructor() {

    }

    ngOnInit() {
        this.collapsibleClass = `${this.collapsible}`;
    }

    ngAfterViewInit(): void {
        const elem = document.querySelectorAll(`.${this.collapsibleClass}`);
        this.instances = M.Collapsible.init(elem, { accordion: true });
        this.instances[0].open(0);
        this.dragElement(document.getElementById('dragable'));
    }

    onResizeEnd(event: ResizeEvent): void {
        this.style = {
            width: `${event.rectangle.width}px`,
            height: 'auto',
            top: '0px !important'
        };
        this.resize.emit(event.rectangle.width);
    }

    collapseAccordeon() {
        if (this.toggle) {
            this.instances[0].close(0);
        } else {
            this.instances[0].open(0);
        }
        this.toggle = !this.toggle;
    }

    dragElement(elmnt) {
        const self = this;
        console.log(elmnt);

        let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
        const dragMouseDown = function (e: any) {
            e = e || window.event;
            e.preventDefault();
            // get the mouse cursor position at startup:
            pos3 = e.clientX;
            pos4 = e.clientY;
            document.onmouseup = closeDragElement;
            // call a function whenever the cursor moves:
            document.onmousemove = elementDrag;
        };

        const elementDrag = function (e: any) {
            e = e || window.event;
            e.preventDefault();
            // calculate the new cursor position:
            pos1 = pos3 - e.clientX;
            pos2 = pos4 - e.clientY;
            pos3 = e.clientX;
            pos4 = e.clientY;
            // set the element's new position:
            self.drag.emit({
                top: (elmnt.offsetTop - pos2) + 'px',
                left: (elmnt.offsetLeft - pos1) + 'px'
            });
        };

        const closeDragElement = function () {
            /* stop moving when mouse button is released:*/
            document.onmouseup = null;
            document.onmousemove = null;
        };

        if (document.getElementById(elmnt.id + 'header')) {
            /* if present, the header is where you move the DIV from:*/
            document.getElementById(elmnt.id + 'header').onmousedown = dragMouseDown;
        } else {
            /* otherwise, move the DIV from anywhere inside the DIV:*/
            elmnt.onmousedown = dragMouseDown;
        }

    }
