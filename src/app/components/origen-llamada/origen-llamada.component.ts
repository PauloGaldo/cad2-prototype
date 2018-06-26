import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ResizeEvent } from 'angular-resizable-element';

@Component({
  selector: 'cad-origen-llamada',
  templateUrl: './origen-llamada.component.html',
  styleUrls: ['./origen-llamada.component.scss']
})
export class OrigenLlamadaComponent implements OnInit {

  public style = {};
  public origenForm: FormGroup;
  @Output() resize: EventEmitter<number> = new EventEmitter();
  @Output() formChange: EventEmitter<any> = new EventEmitter();

  constructor(public fb: FormBuilder) {
    this.origenForm = this.fb.group({
      colonia: '',
      calle: '',
      numero: '',
      estado: '',
      ciudad: '',
      cp: ''
    });
  }

  ngOnInit() {
    this.origenForm.valueChanges.subscribe((values) => {
      this.formChange.emit(values);
    });
  }

  onResizeEnd(event: ResizeEvent): void {
    this.style = {
      width: `${event.rectangle.width}px`,
      height: 'auto'
    };
    this.resize.emit(event.rectangle.width);
  }

}
