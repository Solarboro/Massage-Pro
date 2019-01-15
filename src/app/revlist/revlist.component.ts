import { Component, OnInit } from '@angular/core';
import { Reservation } from '../model/reservation';
import { RevStatus } from '../model/setting/rev-status';
import { RevDuration } from '../model/setting/rev-duration';
import { RepositorySettingService } from '../Service/Repository/repository-setting.service';
import { RepositoryReservationService } from '../Service/Repository/repository-reservation.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

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
  public revList: Reservation[];

  private subscriptionRevList: Subscription;

  //
  public revStatusMap: { [key: number]: RevStatus};
  public revDurationMap: { [key: number]: RevDuration};

  private subscriptionRevStatusMap: Subscription;
  private subscriptionRevDurationMap: Subscription;

  // Timer to Auto Refresh
  private timer;

  // List Size
  private listSize: number;

  //
  private curPageNo: number;
  private totPageNo: number;

  //
  private seqFrom: number;
  private seqTo: number;

  // TimeStamp
  public ltsTimeStamp: Date;

  constructor(
    private router: Router,
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
          data => {
            if ( data ) {
              //
              this.revList = data;

              this.refreshPage();

              this.ltsTimeStamp = new Date();
            }
          }
        );

      //
      this.subscriptionRevStatusMap =
          this
          .repositorySettingService
          .latestRevStatusMap
          .subscribe(
            data => {
              if ( data ) {
                this.revStatusMap = data;
              }
            }
          );

      //
      this.subscriptionRevDurationMap =
            this
            .repositorySettingService
            .latestRevDurationMap
            .subscribe(
              data => {
                if ( data ) {
                  this.revDurationMap = data;
                }
              }
            );

      // Timer to Auto Refresh
      this.timer = setInterval(
        () => {
          this.repositorySettingService.syncUp();
          this.repositoryReservationService.syncUp();
        }, 3000
      );

      // Sync data from Server to localStorage when component activated.
        this.repositorySettingService.syncUp();
        this.repositoryReservationService.syncUp();
  }

  ngOnInit() {
    //
    $('.revlist')
    .transition('scale in', '500ms');
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

    // 
    clearInterval(this.timer);
  }

  manuallyUpdate(): void {
    // 
    this.repositorySettingService.syncUp();

    // 
    this.repositoryReservationService.syncUp();
  }

  processCommentEvent(reservation: Reservation): void {
    this.repositoryReservationService.aComment(reservation);

  }
  processCancelEvent(reservation: Reservation): void {
    this.repositoryReservationService.aCancelled(reservation);

  }

  forwardToNewRev(): void {
    this.router.navigateByUrl('newRev');
  }
}
