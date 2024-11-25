import { TestBed } from '@angular/core/testing';

import { GetshipsService } from './getships.service';

describe('GetshipsService', () => {
  let service: GetshipsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetshipsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
