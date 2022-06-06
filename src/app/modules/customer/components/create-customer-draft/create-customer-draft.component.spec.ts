import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCustomerDraftComponent } from './create-customer-draft.component';

describe('CreateCustomerDraftComponent', () => {
  let component: CreateCustomerDraftComponent;
  let fixture: ComponentFixture<CreateCustomerDraftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateCustomerDraftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCustomerDraftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
