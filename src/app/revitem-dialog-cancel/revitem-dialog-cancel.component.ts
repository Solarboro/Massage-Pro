import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-revitem-dialog-cancel',
  templateUrl: './revitem-dialog-cancel.component.html',
  styleUrls: ['./revitem-dialog-cancel.component.css'],
  host: {
    'class': 'ui revcancel basic modal'
  }
})
export class RevitemDialogCancelComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
