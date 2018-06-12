import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaInvolucradosComponent } from './tabla-involucrados.component';

describe('TablaInvolucradosComponent', () => {
  let component: TablaInvolucradosComponent;
  let fixture: ComponentFixture<TablaInvolucradosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablaInvolucradosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaInvolucradosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
