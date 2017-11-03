import { TestBed, inject } from '@angular/core/testing';

import { DmServiceService } from './dm-service.service';

describe('DmServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DmServiceService]
    });
  });

  it('should be created', inject([DmServiceService], (service: DmServiceService) => {
    expect(service).toBeTruthy();
  }));
});
