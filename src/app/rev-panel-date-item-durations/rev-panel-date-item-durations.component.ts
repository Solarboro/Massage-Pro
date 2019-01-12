import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { RevDuration } from '../model/setting/rev-duration';
import { Reservation } from '../model/reservation';
import { disableBindings } from '@angular/core/src/render3';

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

  @Input() public revDuration: RevDuration;
  @Input() public seqNo: number;
  @Input() private reservation: Reservation;
  @Input() private disableAll: boolean;

  private btnColor: string;

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

  iRed(): boolean {
    return this.reservation != null;
  }
  isDisalbe(): boolean {
    return this.disableAll || this.reservation != null;
  }

  isDisableAll(): boolean {
    return this.disableAll;
  }

}
