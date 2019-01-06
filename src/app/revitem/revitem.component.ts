import { Component, OnInit, Input } from '@angular/core';
import { Reservation } from '../model/reservation';

@Component({
  selector: 'app-revitem',
  templateUrl: './revitem.component.html',
  styleUrls: ['./revitem.component.css']
})
export class RevitemComponent implements OnInit {
  @Input() revItem: Reservation;
  @Input() seqNo: number;

  @Input() seqFrom: number;
  @Input() seqTo: number;

  private statusColor: string;
  private statusDesc: string;

  private btnCommentRule: boolean[];
  private btnCancelRule: boolean[];

  constructor() { }

  ngOnInit() {
    this.statusColor = StatusColor[this.revItem.revStatus];
    this.statusDesc = StatusDesc[this.revItem.revStatus];

    this.btnCommentRule = [ false, false, true, false, false ];
    this.btnCancelRule = [ false, true, false, false, false ];
   }

  disableComment(): boolean {
    return !this.btnCommentRule[this.revItem.revStatus] || this.revItem.revComment;
  }

  disableCancel(): boolean {
    return !this.btnCancelRule[this.revItem.revStatus];
  }

  revCancel(): void {
    $('.ui.revcancel.basic.modal').modal('show');
  }

  revComment(): void {
    $('.ui.revcomment.modal').modal('show');
  }

}

enum StatusColor {
  orange = 1,
  green = 2,
  red = 3,
  grey = 4 }

enum StatusDesc {
  Accepted = 1,
  Finished = 2,
  'No Show' = 3,
  Cancelled = 4 }



