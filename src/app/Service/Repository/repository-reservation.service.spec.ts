import { TestBed } from '@angular/core/testing';

import { RepositoryReservationService } from './repository-reservation.service';

describe('RepositoryReservationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RepositoryReservationService = TestBed.get(RepositoryReservationService);
    expect(service).toBeTruthy();
  });
});
