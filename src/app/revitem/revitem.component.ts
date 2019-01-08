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

  private StatusColorMap: { [key: number]: string} = {};
  private StatusDescmap: { [key: number]: string} = {};

  private btnCommentRuleMap: { [key: number]: boolean} = {};
  private btnCancelRuleMap: { [key: number]: boolean} = {};

  private statusColor: string;
  private statusDesc: string;

  private btnCommentRule: boolean[];
  private btnCancelRule: boolean[];

  constructor() {
    //
    this.StatusColorMap[1] = 'orange';
    this.StatusColorMap[2] = 'green';
    this.StatusColorMap[3] = 'red';
    this.StatusColorMap[4] = 'grey';

    //
    this.StatusDescmap[1] = 'Accepted';
    this.StatusDescmap[2] = 'Finished';
    this.StatusDescmap[3] = 'No Show';
    this.StatusDescmap[4] = 'Cancelled';

    //
    this.btnCommentRuleMap[1] = false;
    this.btnCommentRuleMap[2] = true;
    this.btnCommentRuleMap[3] = false;
    this.btnCommentRuleMap[4] = false;

    //
    this.btnCancelRuleMap[1] = true;
    this.btnCancelRuleMap[2] = false;
    this.btnCancelRuleMap[3] = false;
    this.btnCancelRuleMap[4] = false;

  }

  ngOnInit() {
    //
    this.statusColor = this.StatusColorMap[this.revItem.revStatus];
    this.statusDesc = this.StatusDescmap[this.revItem.revStatus];

   }

  disableComment(): boolean {
    return !this.btnCommentRuleMap[this.revItem.revStatus] || this.revItem.revComment;
  }

  disableCancel(): boolean {
    return !this.btnCancelRuleMap[this.revItem.revStatus];
  }

  revCancel(): void {
    $('.ui.revcancel.basic.modal').modal('show');
  }

  revComment(): void {
    $('.ui.revcomment.modal').modal('show');
  }

}