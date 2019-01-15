import { Component, OnInit } from '@angular/core';
import { MenuGuard, MenuGuardAdmin, MenuGuardMasg } from '../controller/menu-guard';
import { MasgUserService } from '../Service/masg-user.service';

@Component({
  selector: 'app-myheader-menu',
  templateUrl: './myheader-menu.component.html',
  styleUrls: ['./myheader-menu.component.css']
})
export class MyheaderMenuComponent implements OnInit {

  constructor(
    public menGurard: MenuGuard,
    public menuGuardMasg: MenuGuardMasg,
    public menuGuardAdmin: MenuGuardAdmin,
    public masgUserService: MasgUserService
              ) { }

  ngOnInit() {
    // fix main menu to page on passing
    $('.main.menu').visibility({
      type: 'fixed'
    });
  }

  showLoginPanel(): void {
    $('.ui.sidebar')
    .sidebar('toggle')
  ;
  }

}
