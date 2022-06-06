import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerApproveListComponent } from './customer-approve-list.component';

describe('CustomerApproveListComponent', () => {
  let component: CustomerApproveListComponent;
  let fixture: ComponentFixture<CustomerApproveListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerApproveListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerApproveListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
