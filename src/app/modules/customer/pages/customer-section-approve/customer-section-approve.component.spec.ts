import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerSectionApproveComponent } from './customer-section-approve.component';

describe('CustomerSectionApproveComponent', () => {
  let component: CustomerSectionApproveComponent;
  let fixture: ComponentFixture<CustomerSectionApproveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerSectionApproveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerSectionApproveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
