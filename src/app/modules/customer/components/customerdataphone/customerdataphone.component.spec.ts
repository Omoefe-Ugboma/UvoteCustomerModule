import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerdataphoneComponent } from './customerdataphone.component';

describe('CustomerdataphoneComponent', () => {
  let component: CustomerdataphoneComponent;
  let fixture: ComponentFixture<CustomerdataphoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerdataphoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerdataphoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
