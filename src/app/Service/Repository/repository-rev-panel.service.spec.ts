import { TestBed } from '@angular/core/testing';

import { RepositoryRevPanelService } from './repository-rev-panel.service';

describe('RepositoryRevPanelService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RepositoryRevPanelService = TestBed.get(RepositoryRevPanelService);
    expect(service).toBeTruthy();
  });
});
