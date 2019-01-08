import { Injectable } from '@angular/core';
import { ApiAgentService } from '../api-agent.service';
import { RevStatus } from 'src/app/model/setting/rev-status';
import { RevDuration } from 'src/app/model/setting/rev-duration';

@Injectable({
  providedIn: 'root'
})
export class RepositorySettingService {

  public revStatusMap: { [key: number]: RevStatus};
  public revDurationMap: { [key: number]: RevDuration};

  constructor(
    private apiAgentService: ApiAgentService
  ) {

    
   }

  dataSyncupFromAPIServer(): void {
    // Setting - RevStatus
    this.apiAgentService.aGet<{ [key: number]: RevStatus}>('settingRSMap')
    .subscribe(
      data => {
        this.revStatusMap = data;
      }
    );

    // Setting - RevDuration
    this.apiAgentService.aGet<{ [key: number]: RevDuration}>('settingRDMap')
    .subscribe(
      data => {
        this.revDurationMap = data;
      }
    );
  }
}
