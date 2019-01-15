import { Component, OnInit } from '@angular/core';
import { MasgUserService } from '../Service/masg-user.service';


@Component({
  selector: 'app-myheader-menu-ucp',
  templateUrl: './myheader-menu-ucp.component.html',
  styleUrls: ['./myheader-menu-ucp.component.css']
})
export class MyheaderMenuUcpComponent implements OnInit {

  constructor(
    public masgUserService: MasgUserService
  ) {
  }

  ngOnInit() {
    $('.ui.dropdown').dropdown();
  }

}
