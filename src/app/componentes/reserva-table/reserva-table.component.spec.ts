import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservaTableComponent } from './reserva-table.component';

describe('ReservaTableComponent', () => {
  let component: ReservaTableComponent;
  let fixture: ComponentFixture<ReservaTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservaTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservaTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
