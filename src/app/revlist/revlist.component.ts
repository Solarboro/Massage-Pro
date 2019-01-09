import { Component, OnInit } from '@angular/core';
import { Reservation } from '../model/reservation';
import { ApiAgentService } from '../Service/api-agent.service';
import { RevStatus } from '../model/setting/rev-status';
import { RevDuration } from '../model/setting/rev-duration';
import { RepositorySettingService } from '../Service/Repository/repository-setting.service';
import { RepositoryReservationService } from '../Service/Repository/repository-reservation.service';
import { timeout } from 'q';
import { Subscription } from 'rxjs';

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

  private subscriptionRevList: Subscription;

  //
  private revStatusMap: { [key: number]: RevStatus};
  private revDurationMap: { [key: number]: RevDuration};

  private subscriptionRevStatusMap: Subscription;
  private subscriptionRevDurationMap: Subscription;

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

      // 
      this.subscriptionRevList =
        this
        .repositoryReservationService
        .latestRevList
        .subscribe(
          data => this.revList = data
        );

      // 
      this.subscriptionRevStatusMap =
          this
          .repositorySettingService
          .latestRevStatusMap
          .subscribe(
            data => this.revStatusMap = data
          );

      // 
      this.subscriptionRevDurationMap =
            this
            .repositorySettingService
            .latestRevDurationMap
            .subscribe(
              data => this.revDurationMap = data
            );

      // Sync data from Server to localStorage when component activated.
        this.repositorySettingService.syncUp();
        this.repositoryReservationService.syncUp();
  }

  ngOnInit() {
    // Refresh Page
    this.refreshPage();
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

  ngOnDestroy(): void {

    //
    this.subscriptionRevList.unsubscribe();

    // 
    this.subscriptionRevStatusMap.unsubscribe();

    // 
    this.subscriptionRevDurationMap.unsubscribe();
  }

  processCancelEvent(reservation: Reservation): void {
    this.repositoryReservationService.aCancel(reservation);

  }
}
