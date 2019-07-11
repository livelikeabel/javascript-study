import { TestBed } from '@angular/core/testing';

import { OneService } from './one.service';

describe('OneService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OneService = TestBed.get(OneService);
    expect(service).toBeTruthy();
  });
});
