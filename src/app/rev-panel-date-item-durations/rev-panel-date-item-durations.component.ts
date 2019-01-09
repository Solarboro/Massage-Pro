import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { RevDuration } from '../model/setting/rev-duration';
import { Reservation } from '../model/reservation';

@Component({
  selector: 'app-rev-panel-date-item-durations',
  templateUrl: './rev-panel-date-item-durations.component.html',
  styleUrls: ['./rev-panel-date-item-durations.component.css'],
  outputs: [ 'onRevEvent' ],
  host: {
    'class': 'item'
  }
})
export class RevPanelDateItemDurationsComponent implements OnInit {

  @Input() private revDuration: RevDuration;
  @Input() private seqNo: number;
  @Input() private reservation: Reservation;

  // 
  private onRevEvent: EventEmitter<Reservation> = new EventEmitter<Reservation>();
  constructor() {
   }

  ngOnInit() {
  }

  onDuration(): void {
    const reservation: Reservation = new Reservation();
    reservation.revTime = this.seqNo;

    reservation.revFloor = '28ROOM8';
    reservation.revBuilding = 'Xin Yuan';
    reservation.revComment = false;
    reservation.revStatus = 1;

    this.onRevEvent.emit(reservation);
  }

  isDisalbe() {
    return this.reservation != null;
  }

}
