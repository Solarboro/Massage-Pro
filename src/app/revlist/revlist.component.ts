import { Component, OnInit } from '@angular/core';
import { Reservation } from '../model/reservation';
import { ApiAgentService } from '../Service/api-agent.service';
import { RevStatus } from '../model/setting/rev-status';
import { RevDuration } from '../model/setting/rev-duration';
import { RepositorySettingService } from '../Service/Repository/repository-setting.service';
import { RepositoryReservationService } from '../Service/Repository/repository-reservation.service';
import { timeout } from 'q';

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
    private repositorySettingService: RepositorySettingService,
    private repositoryReservationService: RepositoryReservationService
    ) {

      // 
      this.curPageNo = 1;

      // 
      this.listSize = 4;

      // Mandatory Frist Read from Storage (pre load already)
        // Reservation Records
        this.revList = this.repositoryReservationService.reservationList;

        // Setting - RevStatus
        this.revStatusMap = this.repositorySettingService.revStatusMap;

        // Setting - RevDuration
        this.revDurationMap = this.repositorySettingService.revDurationMap;

      // Sync data from Server to localStorage when component activated.
        this.repositorySettingService.syncUp();
        this.repositoryReservationService.syncUp();

      // Refresh Page
      this.refreshPage();
  }

  ngOnInit() {
    //
    this.SyncUpDataFromLocalStorage();
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

  SyncUpDataFromLocalStorage(): void {

    setTimeout(() => {
      // Reservation Records
      this.revList = this.repositoryReservationService.reservationList;

      // Setting - RevStatus
      this.revStatusMap = this.repositorySettingService.revStatusMap;

      // Setting - RevDuration
      this.revDurationMap = this.repositorySettingService.revDurationMap;

      this.refreshPage();
    }, 3000);

  }
}
