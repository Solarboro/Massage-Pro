import { TestBed } from '@angular/core/testing';

import { MasgUserService } from './masg-user.service';

describe('MasgUserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MasgUserService = TestBed.get(MasgUserService);
    expect(service).toBeTruthy();
  });
});
