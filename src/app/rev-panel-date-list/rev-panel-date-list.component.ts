import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rev-panel-date-list',
  templateUrl: './rev-panel-date-list.component.html',
  styleUrls: ['./rev-panel-date-list.component.css'],
  inputs: ['curDate'],
  host: { class: 'column'}
})
export class RevPanelDateListComponent implements OnInit {
  curDate: Date;
  dataRate: number;

  WeekDate: Array<string> = [
    'Sun',
    'Mon',
    'Tue',
    'Wed',
    'Thu',
    'Fri',
    'Sat'
  ];

  constructor() { }

  ngOnInit() {
    this.dataRate  = 5;

  }

}


