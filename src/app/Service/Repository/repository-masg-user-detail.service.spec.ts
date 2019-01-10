import { TestBed } from '@angular/core/testing';

import { RepositoryMasgUserDetailService } from './repository-masg-user-detail.service';

describe('RepositoryMasgUserDetailService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RepositoryMasgUserDetailService = TestBed.get(RepositoryMasgUserDetailService);
    expect(service).toBeTruthy();
  });
});
