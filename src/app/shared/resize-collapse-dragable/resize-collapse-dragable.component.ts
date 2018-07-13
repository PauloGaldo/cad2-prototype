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
    @Output() resize: EventEmitter<any> = new EventEmitter();
    @Output() drag: EventEmitter<any> = new EventEmitter();
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

    dragElement(element: HTMLElement, event: any): void {
        console.log(event.clientX, event.clientY);
        this.drag.emit({
            element: element,
            positions: {
                top: event.clientX,
                left: event.clientY
            }
        });
        element.parentElement.setAttribute('style', 'top:' + event.clientX + 'px !important');
        element.parentElement.setAttribute('style', 'left:' + event.clientY + 'px !important');
    }

}
