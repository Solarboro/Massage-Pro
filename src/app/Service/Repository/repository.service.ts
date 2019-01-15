import { Injectable } from '@angular/core';
import { RepositorySettingService } from './repository-setting.service';
import { RepositoryReservationService } from './repository-reservation.service';
import { RepositoryRevPanelService } from './repository-rev-panel.service';
import { RepositoryMasgReservationService } from './repository-masg-reservation.service';
import { RepositoryMasgUserDetailService } from './repository-masg-user-detail.service';
import { MasgUserService } from '../masg-user.service';

@Injectable({
  providedIn: 'root'
})
export class RepositoryService {

  constructor(
    private masgUserService: MasgUserService,

    private repositoryMasgUserDetailService: RepositoryMasgUserDetailService,

    // User
    private repositorySettingService: RepositorySettingService,
    private repositoryReservationService: RepositoryReservationService,
    private repositoryRevPanelService: RepositoryRevPanelService,

    // Masg
    private repositoryMasgReservationService: RepositoryMasgReservationService

  ) {
    //
    this.masgUserService
    .latestMagUser
    .subscribe(
      masgUser => {
        // Pre Load
        if ( masgUser ) {
          this.syncUpSetting();

          // Sync User Data
          if ( masgUser.role === 'USER') {
            this.syncUpUserData();
          }

          // Sync Masg Data
          if ( masgUser.role === 'MASG') {
            this.syncUpMasgData();
          }

          // Sync Admin Data
          if ( masgUser.role === 'ADMIN') {
            this.syncUpAdminData();
          }
        } else {
          this.cleanAdminData();
          this.cleanMasgData();
          this.cleanUserData();
        }

      }
    );
  }

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
      this.repositoryMasgReservationService.para = '?revMasg='
      + this.masgUserService.getMasgUser().username
      + '&revDate='
      + this.calSearchDate();
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

    calSearchDate(): string {
      const toDay: Date = new Date();
      const month: string = ('0' + (toDay.getMonth() + 1)).slice(-2);
      const day: string = ('0' + toDay.getDate()).slice(-2);

      return toDay.getFullYear() + '-' + month + '-' + day;
  }
}
