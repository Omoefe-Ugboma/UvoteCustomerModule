import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerdatanextofkinsComponent } from './customerdatanextofkins.component';

describe('CustomerdatanextofkinsComponent', () => {
  let component: CustomerdatanextofkinsComponent;
  let fixture: ComponentFixture<CustomerdatanextofkinsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerdatanextofkinsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerdatanextofkinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
