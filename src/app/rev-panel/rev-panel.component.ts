import { Component, OnInit } from '@angular/core';
import { LoginService } from '../Service/login-service';

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
    private loginService: LoginService
  ) {
    this.username = this.loginService.getUsername();
   }

  ngOnInit() {
  }

}
