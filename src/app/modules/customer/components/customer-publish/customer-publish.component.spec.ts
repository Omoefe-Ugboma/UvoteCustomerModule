import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerPublishComponent } from './customer-publish.component';

describe('CustomerPublishComponent', () => {
  let component: CustomerPublishComponent;
  let fixture: ComponentFixture<CustomerPublishComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerPublishComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerPublishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
