import { Component, OnInit } from '@angular/core';
import { LoginService } from '../Service/login-service';
import { UserService } from '../Service/user.service';


@Component({
  selector: 'app-myheader-menu-ucp',
  templateUrl: './myheader-menu-ucp.component.html',
  styleUrls: ['./myheader-menu-ucp.component.css']
})
export class MyheaderMenuUcpComponent implements OnInit {

  constructor(
    public loginService: LoginService,
    public userService: UserService
  ) {

  }

  ngOnInit() {
    $('.ui.dropdown').dropdown();
  }

}
