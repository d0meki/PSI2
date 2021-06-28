import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnfermeraEditComponent } from './enfermera-edit.component';

describe('EnfermeraEditComponent', () => {
  let component: EnfermeraEditComponent;
  let fixture: ComponentFixture<EnfermeraEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnfermeraEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnfermeraEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
