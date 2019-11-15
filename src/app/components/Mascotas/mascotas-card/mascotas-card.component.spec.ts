import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MascotasCardComponent } from './mascotas-card.component';

describe('MascotasCardComponent', () => {
  let component: MascotasCardComponent;
  let fixture: ComponentFixture<MascotasCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MascotasCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MascotasCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
