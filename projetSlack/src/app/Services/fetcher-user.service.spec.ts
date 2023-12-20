import { TestBed } from '@angular/core/testing';

import { FetcherUserService } from './fetcher-user.service';

describe('FetcherUserService', () => {
  let service: FetcherUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetcherUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
