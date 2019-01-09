import { Component, OnInit } from '@angular/core';
import { RevDuration } from '../model/setting/rev-duration';
import { RepositorySettingService } from '../Service/Repository/repository-setting.service';

@Component({
  selector: 'app-rev-panel-date-item-days',
  templateUrl: './rev-panel-date-item-days.component.html',
  styleUrls: ['./rev-panel-date-item-days.component.css'],
  host: {
    'class': 'column'
  }
})
export class RevPanelDateItemDaysComponent implements OnInit {

  private revDurationMap: { [key: number]: RevDuration};
  private revDurationList: RevDuration[];

  constructor(
    private repositorySettingService: RepositorySettingService
  ) {

    // 
    this.revDurationMap = this.repositorySettingService.revDurationMap;
    this.revDurationList = this.repositorySettingService.revDurationList;
   }

  ngOnInit() {
  }

  onDurationRevEvent(revDuration: RevDuration): void {
    console.log('User Choose ' + revDuration.revTimeDesc);
  }

}
