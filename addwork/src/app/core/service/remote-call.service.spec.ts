import { TestBed } from '@angular/core/testing';

import { RemoteCallService } from './remote-call.service';

describe('RemoteCallService', () => {
  let service: RemoteCallService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RemoteCallService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
