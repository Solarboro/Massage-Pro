import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-rev-panel-date-item-masg-panel',
  templateUrl: './rev-panel-date-item-masg-panel.component.html',
  styleUrls: ['./rev-panel-date-item-masg-panel.component.css']
})
export class RevPanelDateItemMasgPanelComponent implements OnInit {

  @Input() private revMasg: string;
  constructor() { }

  ngOnInit() {
  }

}
