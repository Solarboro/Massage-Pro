import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-listcontoller',
  templateUrl: './listcontoller.component.html',
  styleUrls: ['./listcontoller.component.css'],
  inputs: ['curPageNo', 'totPageNo'],
  outputs: ['onChangePageNo']
})
export class ListcontollerComponent implements OnInit {
  curPageNo: number;
  totPageNo: number;

  onChangePageNo: EventEmitter<number>;

  constructor() {
    this.onChangePageNo = new EventEmitter();
   }

  ngOnInit() {
  }

  onSetPageNo(pageNo: number): void {
    //
    pageNo = pageNo < 1 ? 1 : pageNo;

    //
    pageNo = pageNo > this.totPageNo ? this.totPageNo : pageNo;

    this.onChangePageNo.emit(pageNo);
  }

}
