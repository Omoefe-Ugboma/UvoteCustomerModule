import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerdataAddressComponent } from './customerdata-address.component';

describe('CustomerdataAddressComponent', () => {
  let component: CustomerdataAddressComponent;
  let fixture: ComponentFixture<CustomerdataAddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerdataAddressComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerdataAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
