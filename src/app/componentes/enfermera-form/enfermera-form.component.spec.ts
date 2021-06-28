import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnfermeraFormComponent } from './enfermera-form.component';

describe('EnfermeraFormComponent', () => {
  let component: EnfermeraFormComponent;
  let fixture: ComponentFixture<EnfermeraFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnfermeraFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnfermeraFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
