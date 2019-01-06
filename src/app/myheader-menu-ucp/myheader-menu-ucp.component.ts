import { Component, OnInit } from '@angular/core';
import { LoginService } from '../Service/login-service';


@Component({
  selector: 'app-myheader-menu-ucp',
  templateUrl: './myheader-menu-ucp.component.html',
  styleUrls: ['./myheader-menu-ucp.component.css']
})
export class MyheaderMenuUcpComponent implements OnInit {

  constructor(
    private loginService: LoginService
  ) {

  }

  ngOnInit() {
    $('.ui.dropdown').dropdown();
  }

}
