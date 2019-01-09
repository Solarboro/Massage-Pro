import { Injectable } from '@angular/core';
import { ApiAgentService } from '../api-agent.service';
import { RepositorySettingService } from './repository-setting.service';
import { RepositoryReservationService } from './repository-reservation.service';
import { RepositoryRevPanelService } from './repository-rev-panel.service';

@Injectable({
  providedIn: 'root'
})
export class RepositoryService {

  constructor(
    private repositorySettingService: RepositorySettingService,
    private repositoryReservationService: RepositoryReservationService,
    private repositoryRevPanelService: RepositoryRevPanelService

  ) { }

  // Sync up Data from API Server
    syncUpSetting(): void {
      this.repositorySettingService.syncUp();
    }

  // 
    syncUpUserData(): void {
      this.repositoryReservationService.syncUp();

      this.repositoryRevPanelService.syncUp();
    }

  // 
    syncUpAdminData(): void {
    }

  // 
    syncUpMasgData(): void {
    }

  //
    cleanUserData(): void {
      this.repositoryReservationService.clean();
      this.repositoryRevPanelService.clean();

    }

  //
    cleanAdminData(): void {

    }

  //
    cleanMasgData(): void {

    }
}
