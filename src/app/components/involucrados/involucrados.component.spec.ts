import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvolucradosComponent } from './involucrados.component';

describe('InvolucradosComponent', () => {
  let component: InvolucradosComponent;
  let fixture: ComponentFixture<InvolucradosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvolucradosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvolucradosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
