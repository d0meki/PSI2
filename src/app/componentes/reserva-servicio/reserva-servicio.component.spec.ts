import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservaServicioComponent } from './reserva-servicio.component';

describe('ReservaServicioComponent', () => {
  let component: ReservaServicioComponent;
  let fixture: ComponentFixture<ReservaServicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservaServicioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservaServicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
