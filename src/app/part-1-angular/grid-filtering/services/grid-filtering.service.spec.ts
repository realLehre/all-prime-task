import { TestBed } from '@angular/core/testing';

import { GridFilteringService } from './grid-filtering.service';

describe('GridFilteringService', () => {
  let service: GridFilteringService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GridFilteringService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
