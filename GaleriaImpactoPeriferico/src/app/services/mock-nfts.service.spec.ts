import { TestBed } from '@angular/core/testing';

import { MockNftsService } from './mock-nfts.service';

describe('MockNftsService', () => {
  let service: MockNftsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MockNftsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
