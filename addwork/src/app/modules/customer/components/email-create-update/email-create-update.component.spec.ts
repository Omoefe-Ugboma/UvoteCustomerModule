import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailCreateUpdateComponent } from './email-create-update.component';

describe('EmailCreateUpdateComponent', () => {
  let component: EmailCreateUpdateComponent;
  let fixture: ComponentFixture<EmailCreateUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmailCreateUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailCreateUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
