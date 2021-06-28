import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnfermeraTableComponent } from './enfermera-table.component';

describe('EnfermeraTableComponent', () => {
  let component: EnfermeraTableComponent;
  let fixture: ComponentFixture<EnfermeraTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnfermeraTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnfermeraTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
