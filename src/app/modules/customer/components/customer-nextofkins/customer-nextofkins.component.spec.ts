import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerNextofkinsComponent } from './customer-nextofkins.component';

describe('CustomerNextofkinsComponent', () => {
  let component: CustomerNextofkinsComponent;
  let fixture: ComponentFixture<CustomerNextofkinsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerNextofkinsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerNextofkinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
