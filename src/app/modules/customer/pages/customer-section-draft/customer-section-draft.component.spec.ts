import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerSectionDraftComponent } from './customer-section-draft.component';

describe('CustomerSectionDraftComponent', () => {
  let component: CustomerSectionDraftComponent;
  let fixture: ComponentFixture<CustomerSectionDraftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerSectionDraftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerSectionDraftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
