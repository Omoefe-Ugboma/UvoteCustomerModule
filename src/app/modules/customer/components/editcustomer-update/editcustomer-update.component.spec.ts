import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditcustomerUpdateComponent } from './editcustomer-update.component';

describe('EditcustomerUpdateComponent', () => {
  let component: EditcustomerUpdateComponent;
  let fixture: ComponentFixture<EditcustomerUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditcustomerUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditcustomerUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
