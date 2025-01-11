import { TestBed } from '@angular/core/testing';

import { GirdSortingService } from './gird-sorting.service';

describe('GirdSortingService', () => {
  let service: GirdSortingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GirdSortingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
