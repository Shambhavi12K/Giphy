import { TestBed } from '@angular/core/testing';

import { GifhyService } from './gifhy.service';

describe('GifhyService', () => {
  let service: GifhyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GifhyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
