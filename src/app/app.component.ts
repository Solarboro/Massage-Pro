import { Component } from '@angular/core';
import { RepositorySettingService } from './Service/Repository/repository-setting.service';

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
    private repositorySettingService: RepositorySettingService
  ) {
    // Sync up Setting.
    this.repositorySettingService.dataSyncupFromAPIServer();
  }

}
