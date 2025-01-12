import { TestBed } from '@angular/core/testing';

import { GridEditingService } from './grid-editing.service';

describe('GridEditingService', () => {
  let service: GridEditingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GridEditingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
