import { TestBed } from '@angular/core/testing';

import { ApiAgentService } from './api-agent.service';

describe('ApiAgentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiAgentService = TestBed.get(ApiAgentService);
    expect(service).toBeTruthy();
  });
});
