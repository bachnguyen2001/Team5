import { TestBed } from '@angular/core/testing';

import { RegionServicesService } from './region-services.service';

describe('RegionServicesService', () => {
  let service: RegionServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegionServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
