import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateupdateemailComponent } from './createupdateemail.component';

describe('CreateupdateemailComponent', () => {
  let component: CreateupdateemailComponent;
  let fixture: ComponentFixture<CreateupdateemailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateupdateemailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateupdateemailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
