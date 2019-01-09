import { Component, OnInit, Input } from '@angular/core';
import { RevPanel } from '../model/rev-panel';
import { RepositoryRevPanelService } from '../Service/Repository/repository-rev-panel.service';
import { Reservation } from '../model/reservation';
import { RepositoryReservationService } from '../Service/Repository/repository-reservation.service';

@Component({
  selector: 'app-rev-panel-date-list',
  templateUrl: './rev-panel-date-list.component.html',
  styleUrls: ['./rev-panel-date-list.component.css']
})
export class RevPanelDateListComponent implements OnInit {

  @Input() private username: string;

  private revPanel: RevPanel;


  constructor(
    private repositoryRevPanelService: RepositoryRevPanelService,
    private repositoryReservationService: RepositoryReservationService
  ) {
    // Mandatory Frist Read from Storage (pre load already)
      this.revPanel = this.repositoryRevPanelService.revPanel;

    // Sync data from Server to localStorage when component activated.
      this.repositoryRevPanelService.syncUp();

    // Refresh Page with localStorage Data
      this.SyncUpDataFromLocalStorage();
   }

  SyncUpDataFromLocalStorage(): void {
    //
    setTimeout(() => {
        this.revPanel = this.repositoryRevPanelService.revPanel;
    }, 3000);
  }
  ngOnInit() {
      this.SyncUpDataFromLocalStorage();
  }

  onNewRev(reservation: Reservation): void {
    reservation.uid = this.username;
    this.repositoryReservationService.aSave(reservation);
    this.SyncUpDataFromLocalStorage();
  }

}


