import { TestBed } from '@angular/core/testing';

import { GridPagingService } from './grid-paging.service';

describe('GridPagingService', () => {
  let service: GridPagingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GridPagingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
