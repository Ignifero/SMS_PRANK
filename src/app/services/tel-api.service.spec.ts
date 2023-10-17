import { TestBed } from '@angular/core/testing';

import { TelApiService } from './tel-api.service';

describe('TelApiService', () => {
  let service: TelApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TelApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
