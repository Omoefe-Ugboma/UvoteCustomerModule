import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerListNotSubmittedComponent } from './customer-list-not-submitted.component';

describe('CustomerListNotSubmittedComponent', () => {
  let component: CustomerListNotSubmittedComponent;
  let fixture: ComponentFixture<CustomerListNotSubmittedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerListNotSubmittedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerListNotSubmittedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
