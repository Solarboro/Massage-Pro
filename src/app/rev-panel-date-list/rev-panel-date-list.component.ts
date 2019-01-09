import { Component, OnInit, Input } from '@angular/core';
import { RevPanel } from '../model/rev-panel';
import { RepositoryRevPanelService } from '../Service/Repository/repository-rev-panel.service';
import { Reservation } from '../model/reservation';
import { RepositoryReservationService } from '../Service/Repository/repository-reservation.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-rev-panel-date-list',
  templateUrl: './rev-panel-date-list.component.html',
  styleUrls: ['./rev-panel-date-list.component.css']
})
export class RevPanelDateListComponent implements OnInit {

  @Input() private username: string;

  private revPanel: RevPanel;
  private syncFlag: boolean;

  private subscription: Subscription;


  constructor(
    private repositoryRevPanelService: RepositoryRevPanelService,
    private repositoryReservationService: RepositoryReservationService
  ) {

    // Subscripe
    this.subscription = this.repositoryRevPanelService
                        .latestRevPanel
                        .subscribe(
                          data => {
                            this.revPanel = data;
                          }
                        );

    // Sync data from Server to localStorage when component activated.
    this.repositoryRevPanelService.syncUp();
   }

  ngOnInit() {
  }

  onNewRev(reservation: Reservation): void {
    reservation.uid = this.username;
    this.repositoryReservationService.aSave(reservation);
    this.repositoryRevPanelService.syncUp();
  }

  ngOnDestroy(): void {

    // 
    this.subscription.unsubscribe();
  }

}


