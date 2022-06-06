import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerdataemailComponent } from './customerdataemail.component';

describe('CustomerdataemailComponent', () => {
  let component: CustomerdataemailComponent;
  let fixture: ComponentFixture<CustomerdataemailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerdataemailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerdataemailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
