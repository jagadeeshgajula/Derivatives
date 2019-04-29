import { TestBed } from '@angular/core/testing';

import { InsertSwapServiceService } from './insert-swap-service.service';

describe('InsertSwapServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InsertSwapServiceService = TestBed.get(InsertSwapServiceService);
    expect(service).toBeTruthy();
  });
});
