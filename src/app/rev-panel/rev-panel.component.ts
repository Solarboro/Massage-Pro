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

  constructor() {
   }

  ngOnInit() {
  }

}
