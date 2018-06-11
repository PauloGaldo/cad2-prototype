import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DescripcionIncidenteeComponent } from './descripcion-incidentee.component';

describe('DescripcionIncidenteeComponent', () => {
  let component: DescripcionIncidenteeComponent;
  let fixture: ComponentFixture<DescripcionIncidenteeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DescripcionIncidenteeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DescripcionIncidenteeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
