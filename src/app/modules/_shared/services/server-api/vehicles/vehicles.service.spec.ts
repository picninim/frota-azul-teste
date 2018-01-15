import { TestBed, inject } from '@angular/core/testing';

import { VehicleServices } from './vehicles.service';

describe('VehicleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VehicleServices]
    });
  });

  it('should be created', inject([VehicleServices], (service: VehicleServices) => {
    expect(service).toBeTruthy();
  }));
});
