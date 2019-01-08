import { Component, OnInit } from '@angular/core';
import { Reservation } from '../model/reservation';
import { ApiAgentService } from '../Service/api-agent.service';
import { RevStatus } from '../model/setting/rev-status';
import { RevDuration } from '../model/setting/rev-duration';
import { RepositorySettingService } from '../Service/Repository/repository-setting.service';

@Component({
  selector: 'app-revlist',
  templateUrl: './revlist.component.html',
  styleUrls: ['./revlist.component.css'],
  host: {
    class: 'ui basic segment'
  }
})
export class RevlistComponent implements OnInit {
  // Rev Records
  private revList: Reservation[] = [];

  //
  private revStatusMap: { [key: number]: RevStatus};
  private revDurationMap: { [key: number]: RevDuration};


  // List Size
  private listSize: number;

  //
  private curPageNo: number;
  private totPageNo: number;

  //
  private seqFrom: number;
  private seqTo: number;

  constructor(
    private apiAgentService: ApiAgentService,
    private repositorySettingService: RepositorySettingService
    ) {
    // Default Page No
    this.curPageNo = 1;

    // List Size
    this.listSize = 4;

    // Direct read data from API
    apiAgentService.aGet<Reservation[]>('revList')
    .subscribe( data => {
      this.revList = data;
      this.refreshPage();
     });

     // Setting - RevStatus
     this.revStatusMap = this.repositorySettingService.revStatusMap;
    // apiAgentService.aGet<{ [key: number]: RevStatus}>('settingRSMap')
    // .subscribe(
    //   data => {
    //     this.revStatusMap = data;
    //     this.refreshPage();
    //   }
    // );

    // Setting - RevDuration
    this.revDurationMap = this.repositorySettingService.revDurationMap;
    // apiAgentService.aGet<{ [key: number]: RevDuration}>('settingRDMap')
    // .subscribe(
    //   data => {
    //     this.revDurationMap = data;
    //     this.refreshPage();
    //   }
    // );
  }

  ngOnInit() {
  }

  setPage(pageNo: number): void {
    this.curPageNo = pageNo;
    this.refreshPage();
  }

  refreshPage(): void {
    //
    this.totPageNo = Math.ceil(this.revList.length / this.listSize);
    this.seqFrom = ( this.curPageNo - 1 ) * this.listSize;
    this.seqTo = this.curPageNo * this.listSize - 1;
  }

}
