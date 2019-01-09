import { Component, OnInit } from '@angular/core';
import { LoginService } from '../Service/login-service';
import { UserService } from '../Service/user.service';

@Component({
  selector: 'app-rev-panel',
  templateUrl: './rev-panel.component.html',
  styleUrls: ['./rev-panel.component.css'],
  host: {
    class: 'ui basic segment'
  }
})
export class RevPanelComponent implements OnInit {

  private username: string;
  constructor(
    private userService: UserService
  ) {
    this.username = this.userService.getUsername();
   }

  ngOnInit() {
  }

}
