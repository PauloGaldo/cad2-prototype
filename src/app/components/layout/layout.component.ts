import { AfterViewInit, Component, OnInit } from '@angular/core';
import { DragulaService } from 'ng2-dragula';

@Component({
    selector: 'cad-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit, AfterViewInit {

    public widthWindow = window.innerWidth;
    public heightWindow = window.innerHeight;

    constructor(private dragulaService: DragulaService) {

    }

    ngOnInit() {
    }

    ngAfterViewInit(): void {
    }

    dragElement(event: any) {
        console.log(event);
    }

}
