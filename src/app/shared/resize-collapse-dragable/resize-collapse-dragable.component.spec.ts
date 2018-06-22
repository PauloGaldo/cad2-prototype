import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResizeCollapseDragableComponent } from './resize-collapse-dragable.component';

describe('ResizeCollapseDragableComponent', () => {
  let component: ResizeCollapseDragableComponent;
  let fixture: ComponentFixture<ResizeCollapseDragableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResizeCollapseDragableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResizeCollapseDragableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
