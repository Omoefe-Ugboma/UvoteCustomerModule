import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerSubmitListComponent } from './customer-submit-list.component';

describe('CustomerSubmitListComponent', () => {
  let component: CustomerSubmitListComponent;
  let fixture: ComponentFixture<CustomerSubmitListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerSubmitListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerSubmitListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
