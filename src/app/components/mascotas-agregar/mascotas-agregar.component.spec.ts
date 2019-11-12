import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MascotasAgregarComponent } from './mascotas-agregar.component';

describe('MascotasAgregarComponent', () => {
  let component: MascotasAgregarComponent;
  let fixture: ComponentFixture<MascotasAgregarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MascotasAgregarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MascotasAgregarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
