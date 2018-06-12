import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoIncidenteComponent } from './tipo-incidente.component';

describe('TipoIncidenteComponent', () => {
  let component: TipoIncidenteComponent;
  let fixture: ComponentFixture<TipoIncidenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoIncidenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoIncidenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
