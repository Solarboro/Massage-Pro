import { TestBed } from '@angular/core/testing';

import { RepositorySettingService } from './repository-setting.service';

describe('RepositorySettingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RepositorySettingService = TestBed.get(RepositorySettingService);
    expect(service).toBeTruthy();
  });
});
