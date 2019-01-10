import { Injectable } from '@angular/core';
import { RepositorySettingService } from './repository-setting.service';
import { RepositoryReservationService } from './repository-reservation.service';
import { RepositoryRevPanelService } from './repository-rev-panel.service';
import { RepositoryMasgReservationService } from './repository-masg-reservation.service';
import { RepositoryMasgUserDetailService } from './repository-masg-user-detail.service';
import { UserService } from '../user.service';

@Injectable({
  providedIn: 'root'
})
export class RepositoryService {

  public masgPDFPara: string;

  public paraMasgUserDetial: string;

  constructor(
    // 
    private userService: UserService,
    // 
    private repositoryMasgUserDetailService: RepositoryMasgUserDetailService,

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

      //
      this.repositoryMasgUserDetailService.para = '/' + this.userService.getUsername();
      this.repositoryMasgUserDetailService.syncUp();
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
