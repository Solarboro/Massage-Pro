import { Component, OnInit } from '@angular/core';
import { MasgUserService } from '../Service/masg-user.service';

@Component({
  selector: 'app-rev-panel',
  templateUrl: './rev-panel.component.html',
  styleUrls: ['./rev-panel.component.css'],
  host: {
    class: 'ui basic segment'
  }
})
export class RevPanelComponent implements OnInit {

  public username: string;
  constructor(
    private masgUserService: MasgUserService
  ) {
    this.username = this.masgUserService.getMasgUser().username;
   }

  ngOnInit() {
    $('.revpanel')
    .transition('scale in', '500ms');
  }

}
