import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnfermeraCardComponent } from './enfermera-card.component';

describe('EnfermeraCardComponent', () => {
  let component: EnfermeraCardComponent;
  let fixture: ComponentFixture<EnfermeraCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnfermeraCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnfermeraCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
