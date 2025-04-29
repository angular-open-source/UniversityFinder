import { TestBed } from '@angular/core/testing';

import { HipoLabsApiService } from './hipo-labs-api.service';

describe('HipoLabsApiService', () => {
  let service: HipoLabsApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HipoLabsApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
