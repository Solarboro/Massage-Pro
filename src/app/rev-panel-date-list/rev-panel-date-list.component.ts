import { Component, OnInit, Input } from '@angular/core';
import { RevPanel } from '../model/rev-panel';
import { RepositoryRevPanelService } from '../Service/Repository/repository-rev-panel.service';
import { Reservation } from '../model/reservation';
import { RepositoryReservationService } from '../Service/Repository/repository-reservation.service';
import { Subscription } from 'rxjs';
import { RepositoryMasgUserDetailService } from '../Service/Repository/repository-masg-user-detail.service';
import { MasgUserDetail } from '../model/masg-user-detail';

@Component({
  selector: 'app-rev-panel-date-list',
  templateUrl: './rev-panel-date-list.component.html',
  styleUrls: ['./rev-panel-date-list.component.css']
})
export class RevPanelDateListComponent implements OnInit {

  @Input() private username: string;

  public revPanel: RevPanel;
  private syncFlag: boolean;

  private subscription: Subscription;

  private masgUserDetail: MasgUserDetail;

  private smasgUserDetail: Subscription;

  public revFlag: boolean;
  public revBlkFlag: boolean;

  private timer;

  // TimeStamp
  public ltsTimeStamp: Date;


  constructor(
    private repositoryRevPanelService: RepositoryRevPanelService,
    private repositoryReservationService: RepositoryReservationService,
    private repositoryMasgUserDetailService: RepositoryMasgUserDetailService
  ) {
    // Subscrible
    this.smasgUserDetail = this.repositoryMasgUserDetailService
            .latestMasgUserDetail
            .subscribe(
              data => {
                if ( data ) {
                  this.masgUserDetail = data;

                  this.revFlag = this.masgUserDetail.curMthRevTimes >= 2 ? false : true;
                  this.revBlkFlag = this.masgUserDetail.revBlocked;
                }
              }
            );

    // Subscripe
    this.subscription = this.repositoryRevPanelService
                        .latestRevPanel
                        .subscribe(
                          data => {
                            if ( data ) {
                              //
                              this.revPanel = data;
                              this.ltsTimeStamp = new Date();
                            }
                          }
                        );



    // Timer Auto Refresh
    this.timer = setInterval(
      () => {
        this.repositoryRevPanelService.syncUp();
        this.repositoryMasgUserDetailService.syncUp();
      },
      3000
    );

    // Sync data from Server to localStorage when component activated.
    this.repositoryRevPanelService.syncUp();
    this.repositoryMasgUserDetailService.syncUp();
   }

  ngOnInit() {
  }

  onNewRev(reservation: Reservation): void {
    reservation.uid = this.username;
    //  this.repositoryReservationService.aSave(reservation);
    //  this.repositoryRevPanelService.syncUp();

    $('.ui.basic.test.modal')
    .modal({
      closable  : false,
      onDeny    : function() {

      },
      onApprove : () => {
        this.repositoryReservationService.aSave(reservation);
        this.repositoryRevPanelService.syncUp();
        return true;
      }
    })
    .modal('show');
  }

  ngOnDestroy(): void {

    // 
    this.subscription.unsubscribe();

    //
    this.smasgUserDetail.unsubscribe();

    // 
    clearInterval(this.timer);
  }

  manuallyUpdate(): void {
    this.repositoryRevPanelService.syncUp();
    this.repositoryMasgUserDetailService.syncUp();
  }
}


