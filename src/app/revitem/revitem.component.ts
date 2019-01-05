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

  constructor() { }

  ngOnInit() {
  }

  isCommentalbe(): boolean {

    return !this.revItem.revComment;
  }

  isCancelalbe(): boolean {

    return true;
  }
}
