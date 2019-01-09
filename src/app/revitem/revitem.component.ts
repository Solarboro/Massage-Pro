import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { Reservation } from '../model/reservation';
import { RevStatus } from '../model/setting/rev-status';
import { ApiAgentService } from '../Service/api-agent.service';
import { RevDuration } from '../model/setting/rev-duration';

@Component({
  selector: 'app-revitem',
  templateUrl: './revitem.component.html',
  styleUrls: ['./revitem.component.css'],
  outputs: [ 'onCommentEvent', 'onCancelEvent' ]
})
export class RevitemComponent implements OnInit {
  @Input() revItem: Reservation;
  @Input() seqNo: number;

  @Input() seqFrom: number;
  @Input() seqTo: number;

  @Input() private revStatusMap: { [key: number]: RevStatus};
  @Input() private revDurationMap: { [key: number]: RevDuration};

  private statusColor: string;
  private statusDesc: string;
  private revTimeDesc: string;

  // 
  private onCommentEvent: EventEmitter<Reservation> = new EventEmitter<Reservation>();
  private onCancelEvent: EventEmitter<Reservation> = new EventEmitter<Reservation>();
  

  constructor(private apiAgentService: ApiAgentService) {
  }

  ngOnInit() {
    this.statusColor = this.revStatusMap[this.revItem.revStatus].revStatusCol;
    this.statusDesc = this.revStatusMap[this.revItem.revStatus].revStatusDesc;
    this.revTimeDesc = this.revDurationMap[this.revItem.revTime].revTimeDesc;

   }

  disableComment(): boolean {
    return !this.revStatusMap[this.revItem.revStatus].btnCommentRule || this.revItem.revComment;
  }

  disableCancel(): boolean {
    return !this.revStatusMap[this.revItem.revStatus].btnCancelRule;
  }


  revComment(): void {
    this.onCommentEvent.emit(this.revItem);
  }
  revCancel(): void {
    this.onCancelEvent.emit(this.revItem);
  }
}