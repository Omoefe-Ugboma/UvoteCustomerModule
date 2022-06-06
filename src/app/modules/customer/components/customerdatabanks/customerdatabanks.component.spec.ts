import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerdatabanksComponent } from './customerdatabanks.component';

describe('CustomerdatabanksComponent', () => {
  let component: CustomerdatabanksComponent;
  let fixture: ComponentFixture<CustomerdatabanksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerdatabanksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerdatabanksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
