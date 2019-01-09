import { Injectable } from '@angular/core';
import { ApiAgentService } from '../api-agent.service';
import { RevStatus } from 'src/app/model/setting/rev-status';
import { RevDuration } from 'src/app/model/setting/rev-duration';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RepositorySettingService {

  public revStatusMap: { [key: number]: RevStatus};
  public revDurationMap: { [key: number]: RevDuration};
  public revDurationList: RevDuration[];

  // Subject
  public latestRevStatusMap: Subject<{ [key: number]: RevStatus}>
  = new BehaviorSubject<{ [key: number]: RevStatus}>(null);

  public latestRevDurationMap: Subject<{ [key: number]: RevDuration}>
  = new BehaviorSubject<{ [key: number]: RevDuration}>(null);

  public latestRevDurationList: Subject<RevDuration[]>
  = new BehaviorSubject<RevDuration[]>(null);

  constructor(
    private apiAgentService: ApiAgentService
  ) {
    // 
    this.revDurationMap = {};

    // 
    this.revDurationList = [];

    // 
    this.revStatusMap = {};
   }

  //  Clean Data
  clean(): void {
    // 
    this.revDurationMap = {};

    // 
    this.revDurationList = [];

    // 
    this.revStatusMap = {};
  }

  // Sync up Data from API Server
  syncUp(): void {
    // Setting - RevStatus
    this.apiAgentService.aGet<{ [key: number]: RevStatus}>('settingRSMap')
    .subscribe(
      data => {
        this.revStatusMap = data;
        this.latestRevStatusMap.next(data);
      }
    );

    // Setting - RevDurationMap
    this.apiAgentService.aGet<{ [key: number]: RevDuration}>('settingRDMap')
    .subscribe(
      data => {
        this.revDurationMap = data;
        this.latestRevDurationMap.next(data);
      }
    );

    // Setting - RevDurationList
    this.apiAgentService.aGet<RevDuration[]>('settingRDList')
    .subscribe(
      data => {
        this.revDurationList = data;
        this.latestRevDurationList.next(data);
      }
    );
  }
}
