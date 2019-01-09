import { TestBed } from '@angular/core/testing';

import { RepositoryMasgReservationService } from './repository-masg-reservation.service';

describe('RepositoryMasgReservationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RepositoryMasgReservationService = TestBed.get(RepositoryMasgReservationService);
    expect(service).toBeTruthy();
  });
});
