import { Component, OnInit } from '@angular/core';
import { Reservation } from '../model/reservation';
import { ApiAgentService } from '../Service/api-agent.service';
import { RevStatus } from '../model/setting/rev-status';
import { RevDuration } from '../model/setting/rev-duration';
import { RepositorySettingService } from '../Service/Repository/repository-setting.service';
import { RepositoryReservationService } from '../Service/Repository/repository-reservation.service';

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
    private repositorySettingService: RepositorySettingService,
    private repositoryReservationService: RepositoryReservationService
    ) {

    setTimeout(() => this.refreshPage(), 2000);

    // Default Page No
    this.curPageNo = 1;

    // List Size
    this.listSize = 4;

    // Reservation Records
    this.revList = this.repositoryReservationService.reservationList;

    // Setting - RevStatus
    this.revStatusMap = this.repositorySettingService.revStatusMap;

    // Setting - RevDuration
    this.revDurationMap = this.repositorySettingService.revDurationMap;

   
  }

  ngOnInit() {
    this.refreshPage();
  }

  setPage(pageNo: number): void {
    this.curPageNo = pageNo;
    this.refreshPage();
  }

  refreshPage(): void {
    // Reservation Records
    this.revList = this.repositoryReservationService.reservationList;

    // Setting - RevStatus
    this.revStatusMap = this.repositorySettingService.revStatusMap;

    // Setting - RevDuration
    this.revDurationMap = this.repositorySettingService.revDurationMap;

    //
    this.totPageNo = Math.ceil(this.revList.length / this.listSize);
    this.seqFrom = ( this.curPageNo - 1 ) * this.listSize;
    this.seqTo = this.curPageNo * this.listSize - 1;
  }

}
