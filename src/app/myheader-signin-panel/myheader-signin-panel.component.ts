import { Component, OnInit } from '@angular/core';
import { LoginService } from '../Service/login-service';

@Component({
  selector: 'app-myheader-signin-panel',
  templateUrl: './myheader-signin-panel.component.html',
  styleUrls: ['./myheader-signin-panel.component.css']
})
export class MyheaderSigninPanelComponent implements OnInit {

  private username: string;
  private password: string;

  constructor(private loginService: LoginService) {
   }

  ngOnInit() {
  }

  mylogin(username: string, password: string): void {

    this.username = username ? username : 'Dummy User';
    if ( password === 'abcd1234') {
      this.loginService.login(this.username, this.password);
      $('.ui.sidebar').sidebar('toggle');
    } else {
      console.log('Password Error');
    }
  }
}
