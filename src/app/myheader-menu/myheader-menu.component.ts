import { Component, OnInit } from '@angular/core';
import { MenuGuard, MenuGuardAdmin, MenuGuardMasg } from '../controller/menu-guard';
import { LoginService } from '../Service/login-service';

@Component({
  selector: 'app-myheader-menu',
  templateUrl: './myheader-menu.component.html',
  styleUrls: ['./myheader-menu.component.css']
})
export class MyheaderMenuComponent implements OnInit {

  constructor(private menGurard: MenuGuard,
              private menuGuardMasg: MenuGuardMasg,
              private menuGuardAdmin: MenuGuardAdmin,
              private loginService: LoginService
              ) { }

  ngOnInit() {

  }

  showLoginPanel(): void {
    $('.ui.sidebar')
    .sidebar('toggle')
  ;
  }

}
