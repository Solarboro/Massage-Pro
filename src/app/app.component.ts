import { Component } from '@angular/core';
import { RepositorySettingService } from './Service/Repository/repository-setting.service';
import { RepositoryReservationService } from './Service/Repository/repository-reservation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myApp';
  redFlag: boolean;
  myvalue: number;

  constructor(
    private repositorySettingService: RepositorySettingService,
    private repositoryReservationService: RepositoryReservationService
  ) {
    // Sync up Setting.
    this.repositorySettingService.Sync();

    // Sync up Reservation Records;
    this.repositoryReservationService.Sync();
  }

}
