import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerBanksComponent } from './customer-banks.component';

describe('CustomerBanksComponent', () => {
  let component: CustomerBanksComponent;
  let fixture: ComponentFixture<CustomerBanksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerBanksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerBanksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
