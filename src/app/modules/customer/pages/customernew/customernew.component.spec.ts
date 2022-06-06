import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomernewComponent } from './customernew.component';

describe('CustomernewComponent', () => {
  let component: CustomernewComponent;
  let fixture: ComponentFixture<CustomernewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomernewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomernewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
