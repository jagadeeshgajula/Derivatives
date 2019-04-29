import { TestBed } from '@angular/core/testing';

import { StubResetServiceService } from './stub-reset-service.service';

describe('StubResetServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StubResetServiceService = TestBed.get(StubResetServiceService);
    expect(service).toBeTruthy();
  });
});
