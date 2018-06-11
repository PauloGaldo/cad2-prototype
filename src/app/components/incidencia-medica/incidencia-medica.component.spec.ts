import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidenciaMedicaComponent } from './incidencia-medica.component';

describe('IncidenciaMedicaComponent', () => {
  let component: IncidenciaMedicaComponent;
  let fixture: ComponentFixture<IncidenciaMedicaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncidenciaMedicaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncidenciaMedicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
