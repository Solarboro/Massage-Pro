import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { Reservation } from '../model/reservation';
import { RevStatus } from '../model/setting/rev-status';
import { ApiAgentService } from '../Service/api-agent.service';
import { RevDuration } from '../model/setting/rev-duration';

@Component({
  selector: 'app-reservation-panel2-masg-list',
  templateUrl: './reservation-panel2-masg-list.component.html',
  styleUrls: ['./reservation-panel2-masg-list.component.css'],
  outputs: [ 'onNoShowEvent', 'onFinishEvent' ]
})
export class ReservationPanel2MasgListComponent implements OnInit {
  @Input() revItem: Reservation;
  @Input() seqNo: number;

  @Input() seqFrom: number;
  @Input() seqTo: number;

  @Input() private revStatusMap: { [key: number]: RevStatus};
  @Input() private revDurationMap: { [key: number]: RevDuration};

  public statusColor: string;
  public statusDesc: string;
  public revTimeDesc: string;

  // 
  private onNoShowEvent: EventEmitter<Reservation> = new EventEmitter<Reservation>();
  private onFinishEvent: EventEmitter<Reservation> = new EventEmitter<Reservation>();
  

  constructor(private apiAgentService: ApiAgentService) {
  }

  ngOnInit() {
    this.statusColor = this.revStatusMap[this.revItem.revStatus].revStatusCol;
    this.statusDesc = this.revStatusMap[this.revItem.revStatus].revStatusDesc;
    this.revTimeDesc = this.revDurationMap[this.revItem.revTime].revTimeDesc;

   }

  revNoShow(): void {
    this.onNoShowEvent.emit(this.revItem);
  }
  revFinish(): void {
    this.onFinishEvent.emit(this.revItem);
  }
}
