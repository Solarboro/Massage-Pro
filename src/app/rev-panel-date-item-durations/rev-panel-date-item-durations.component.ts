import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { RevDuration } from '../model/setting/rev-duration';

@Component({
  selector: 'app-rev-panel-date-item-durations',
  templateUrl: './rev-panel-date-item-durations.component.html',
  styleUrls: ['./rev-panel-date-item-durations.component.css'],
  outputs: [ 'onRevEvent' ],
  host: {
    'class': 'item'
  }
})
export class RevPanelDateItemDurationsComponent implements OnInit {

  @Input() private revDuration: RevDuration;
  @Input() private seqNo: number;

  // 
  private onRevEvent: EventEmitter<RevDuration>;
  
  constructor() {
    this.onRevEvent = new EventEmitter<RevDuration>();
   }

  ngOnInit() {
  }

  onRevClick(): void {
    this.onRevEvent.emit(this.revDuration);
  }

  isDisalbe() {
    return this.seqNo == 2;
  }

}
