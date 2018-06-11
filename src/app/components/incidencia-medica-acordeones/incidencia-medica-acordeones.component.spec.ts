import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidenciaMedicaAcordeonesComponent } from './incidencia-medica-acordeones.component';

describe('IncidenciaMedicaAcordeonesComponent', () => {
  let component: IncidenciaMedicaAcordeonesComponent;
  let fixture: ComponentFixture<IncidenciaMedicaAcordeonesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncidenciaMedicaAcordeonesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncidenciaMedicaAcordeonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
