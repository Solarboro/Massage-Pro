import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-revitem-dialog-comment',
  templateUrl: './revitem-dialog-comment.component.html',
  styleUrls: ['./revitem-dialog-comment.component.css'],
  host: {
    'class': 'ui revcomment modal'
  }
})
export class RevitemDialogCommentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
