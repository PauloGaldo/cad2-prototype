import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoorporacionesComponent } from './coorporaciones.component';

describe('CoorporacionesComponent', () => {
  let component: CoorporacionesComponent;
  let fixture: ComponentFixture<CoorporacionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoorporacionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoorporacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
