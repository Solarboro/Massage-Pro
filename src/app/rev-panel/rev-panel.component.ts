import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rev-panel',
  templateUrl: './rev-panel.component.html',
  styleUrls: ['./rev-panel.component.css'],
  host: {
    class: 'ui basic segment'
  }
})
export class RevPanelComponent implements OnInit {
  today: Date;
  revDateList: Date[];
  revDaysMax: number;

  constructor() {
   }

  ngOnInit() {
    //
    this.revDaysMax = 5;

    //
    this.today = new Date();

    //
    this.revDateList = [
      new Date(this.today.getTime() + 86400000 * 1),
      new Date(this.today.getTime() + 86400000 * 2),
      new Date(this.today.getTime() + 86400000 * 3),
      new Date(this.today.getTime() + 86400000 * 4),
      new Date(this.today.getTime() + 86400000 * 5)

    ];

    this.today.getDate();
    this.today.getDay();
    this.today.getMonth();
    this.today.getFullYear();
    this.today.getUTCDate();
    this.today.getUTCDay();

  }

}
