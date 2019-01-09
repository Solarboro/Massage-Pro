import { Injectable } from '@angular/core';
import { RepositorySettingService } from './repository-setting.service';
import { RepositoryReservationService } from './repository-reservation.service';
import { RepositoryRevPanelService } from './repository-rev-panel.service';
import { RepositoryMasgReservationService } from './repository-masg-reservation.service';

@Injectable({
  providedIn: 'root'
})
export class RepositoryService {

  public masgPDFPara: string;

  constructor(
    // User
    private repositorySettingService: RepositorySettingService,
    private repositoryReservationService: RepositoryReservationService,
    private repositoryRevPanelService: RepositoryRevPanelService,

    // Masg
    private repositoryMasgReservationService: RepositoryMasgReservationService

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
      this.repositoryMasgReservationService.para = this.masgPDFPara;
      this.repositoryMasgReservationService.syncUp();
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
      this.repositoryMasgReservationService.clean();
    }
}
