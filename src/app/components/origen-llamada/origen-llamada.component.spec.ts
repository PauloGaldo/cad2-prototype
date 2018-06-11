import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrigenLlamadaComponent } from './origen-llamada.component';

describe('OrigenLlamadaComponent', () => {
  let component: OrigenLlamadaComponent;
  let fixture: ComponentFixture<OrigenLlamadaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrigenLlamadaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrigenLlamadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
