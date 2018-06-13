import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidenciaNoMedicaAcordeonesComponent } from './incidencia-no-medica-acordeones.component';

describe('IncidenciaNoMedicaAcordeonesComponent', () => {
  let component: IncidenciaNoMedicaAcordeonesComponent;
  let fixture: ComponentFixture<IncidenciaNoMedicaAcordeonesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncidenciaNoMedicaAcordeonesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncidenciaNoMedicaAcordeonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
