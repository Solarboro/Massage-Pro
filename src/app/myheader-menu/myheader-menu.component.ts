import { Component, OnInit } from '@angular/core';
import { MenuGuard, MenuGuardAdmin } from '../controller/menu-guard';

@Component({
  selector: 'app-myheader-menu',
  templateUrl: './myheader-menu.component.html',
  styleUrls: ['./myheader-menu.component.css']
})
export class MyheaderMenuComponent implements OnInit {

  constructor(private menGurard: MenuGuard,
              private menuGuardAdmin: MenuGuardAdmin
              ) { }

  ngOnInit() {
  }

}
