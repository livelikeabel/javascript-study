import { TestBed } from '@angular/core/testing';

import { PageToggleService } from './page-toggle.service';

describe('PageToggleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PageToggleService = TestBed.get(PageToggleService);
    expect(service).toBeTruthy();
  });
});
