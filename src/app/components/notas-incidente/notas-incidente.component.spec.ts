import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotasIncidenteComponent } from './notas-incidente.component';

describe('NotasIncidenteComponent', () => {
  let component: NotasIncidenteComponent;
  let fixture: ComponentFixture<NotasIncidenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotasIncidenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotasIncidenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
