import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerTestParentComponent } from './customer-test-parent.component';

describe('CustomerTestParentComponent', () => {
  let component: CustomerTestParentComponent;
  let fixture: ComponentFixture<CustomerTestParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerTestParentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerTestParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
