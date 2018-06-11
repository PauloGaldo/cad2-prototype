import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DireccionIncidenteComponent } from './direccion-incidente.component';

describe('DireccionIncidenteComponent', () => {
  let component: DireccionIncidenteComponent;
  let fixture: ComponentFixture<DireccionIncidenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DireccionIncidenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DireccionIncidenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
