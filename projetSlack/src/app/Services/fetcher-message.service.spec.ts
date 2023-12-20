import { TestBed } from '@angular/core/testing';

import { FetcherMessageService } from './fetcher-message.service';

describe('FetcherMessageService', () => {
  let service: FetcherMessageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetcherMessageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
