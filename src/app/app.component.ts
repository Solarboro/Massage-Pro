import { Component } from '@angular/core';
import { RepositorySettingService } from './Service/Repository/repository-setting.service';
import { RepositoryReservationService } from './Service/Repository/repository-reservation.service';
import { RepositoryService } from './Service/Repository/repository.service';

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
    private repositoryService: RepositoryService
  ) {
  }

}
