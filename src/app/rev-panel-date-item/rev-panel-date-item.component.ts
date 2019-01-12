import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { RevPanelItem } from '../model/rev-panel-item';
import { Reservation } from '../model/reservation';

@Component({
  selector: 'app-rev-panel-date-item',
  templateUrl: './rev-panel-date-item.component.html',
  styleUrls: ['./rev-panel-date-item.component.css'],
  outputs: [ 'onRevEvent' ]
})
export class RevPanelDateItemComponent implements OnInit {

  // 
  @Input() public revPanelItem: RevPanelItem;
  @Input() private disableAll: boolean;
  private onRevEvent: EventEmitter<Reservation> = new EventEmitter<Reservation>();

  constructor() {
    // this.revPanelItem.revMasg
    // this.revPanelItem.revDateList
    // this.revPanelItem.revDateDetailMap[]

  }

  ngOnInit() {
  }

  onMasg(reservation: Reservation): void {
    reservation.revMasg = this.revPanelItem.revMasg;
    this.onRevEvent.emit(reservation);
  }
}
