import { Injectable } from '@angular/core';
import { ApiAgentService } from '../api-agent.service';
import { RepositorySettingService } from './repository-setting.service';
import { RepositoryReservationService } from './repository-reservation.service';

@Injectable({
  providedIn: 'root'
})
export class RepositoryService {

  constructor(
    private apiAgentService: ApiAgentService,
    private repositorySettingService: RepositorySettingService,
    private repositoryReservationService: RepositoryReservationService

  ) { }

  // Sync up Data from API Server
  syncUpSetting(): void {
    this.repositorySettingService.syncUp();
  }

  syncUpUserData(): void {
    this.repositoryReservationService.syncUp();
  }

  //
  cleanUserData(): void {
    this.repositoryReservationService.clean();

  }
}
