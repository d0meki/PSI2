import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservaEnfermeraComponent } from './reserva-enfermera.component';

describe('ReservaEnfermeraComponent', () => {
  let component: ReservaEnfermeraComponent;
  let fixture: ComponentFixture<ReservaEnfermeraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservaEnfermeraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservaEnfermeraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
