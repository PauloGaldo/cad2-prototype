import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DescripcionIncidenteComponent } from './descripcion-incidente.component';


describe('DescripcionIncidenteComponent', () => {
  let component: DescripcionIncidenteComponent;
  let fixture: ComponentFixture<DescripcionIncidenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DescripcionIncidenteComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DescripcionIncidenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
