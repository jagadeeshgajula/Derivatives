import { TestBed } from '@angular/core/testing';

import { ResetsServiceService } from './resets-service.service';

describe('ResetsServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ResetsServiceService = TestBed.get(ResetsServiceService);
    expect(service).toBeTruthy();
  });
});
