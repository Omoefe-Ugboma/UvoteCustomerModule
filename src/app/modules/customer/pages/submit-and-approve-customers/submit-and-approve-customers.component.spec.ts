import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitAndApproveCustomersComponent } from './submit-and-approve-customers.component';

describe('SubmitAndApproveCustomersComponent', () => {
  let component: SubmitAndApproveCustomersComponent;
  let fixture: ComponentFixture<SubmitAndApproveCustomersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubmitAndApproveCustomersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitAndApproveCustomersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
