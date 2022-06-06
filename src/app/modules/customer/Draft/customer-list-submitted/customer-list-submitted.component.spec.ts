import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerListSubmittedComponent } from './customer-list-submitted.component';

describe('CustomerListSubmittedComponent', () => {
  let component: CustomerListSubmittedComponent;
  let fixture: ComponentFixture<CustomerListSubmittedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerListSubmittedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerListSubmittedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
