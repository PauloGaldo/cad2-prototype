import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cad-notas-incidente',
  templateUrl: './notas-incidente.component.html',
  styleUrls: ['./notas-incidente.component.scss']
})
export class NotasIncidenteComponent implements OnInit {

  notes = [
    {
      name: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur',
      updated: new Date('2/20/16'),
    },
    {
      name: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
      updated: new Date('1/18/16'),
    }
    ,
    {
      name: 'et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco',
      updated: new Date('1/18/16'),
    }
    ,
    {
      name: 'laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate',
      updated: new Date('1/18/16'),
    }
    ,
    {
      name: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
      updated: new Date('1/18/16'),
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
