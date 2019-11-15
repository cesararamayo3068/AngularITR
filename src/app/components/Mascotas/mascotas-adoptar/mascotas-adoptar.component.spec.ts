import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MascotasAdoptarComponent } from './mascotas-adoptar.component';

describe('MascotasAdoptarComponent', () => {
  let component: MascotasAdoptarComponent;
  let fixture: ComponentFixture<MascotasAdoptarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MascotasAdoptarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MascotasAdoptarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
