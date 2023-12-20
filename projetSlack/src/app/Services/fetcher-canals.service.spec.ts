import { TestBed } from '@angular/core/testing';

import { FetcherCanalsService } from './fetcher-canals.service';

describe('FetcherCanalsService', () => {
  let service: FetcherCanalsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetcherCanalsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
