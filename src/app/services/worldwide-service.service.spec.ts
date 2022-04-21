import { TestBed } from '@angular/core/testing';

import { WorldwideServiceService } from './worldwide-service.service';

describe('WorldwideServiceService', () => {
  let service: WorldwideServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorldwideServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
