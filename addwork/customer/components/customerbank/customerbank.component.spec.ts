import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerbankComponent } from './customerbank.component';

describe('CustomerbankComponent', () => {
  let component: CustomerbankComponent;
  let fixture: ComponentFixture<CustomerbankComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerbankComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerbankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
