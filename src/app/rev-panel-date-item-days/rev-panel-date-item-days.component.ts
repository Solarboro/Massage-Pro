import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { RevDuration } from '../model/setting/rev-duration';
import { RepositorySettingService } from '../Service/Repository/repository-setting.service';
import { Reservation } from '../model/reservation';

@Component({
  selector: 'app-rev-panel-date-item-days',
  templateUrl: './rev-panel-date-item-days.component.html',
  styleUrls: ['./rev-panel-date-item-days.component.css'],
  outputs: [ 'onRevEvent' ],
  host: {
    'class': 'column'
  }
})
export class RevPanelDateItemDaysComponent implements OnInit {

  // 
  @Input() private revDate: string;
  @Input() private reservationMap: { [key: number]: Reservation };

  private onRevEvent: EventEmitter<Reservation> = new EventEmitter<Reservation>();

  private revDurationMap: { [key: number]: RevDuration};
  private revDurationList: RevDuration[];

  constructor(
    private repositorySettingService: RepositorySettingService
  ) {
    //
    this.revDurationMap = this.repositorySettingService.revDurationMap;
    this.revDurationList = this.repositorySettingService.revDurationList;
   }

  ngOnInit() {
  }

  onDay(reservation: Reservation): void {
    reservation.revDate = this.revDate;
    this.onRevEvent.emit(reservation);

  }

}
