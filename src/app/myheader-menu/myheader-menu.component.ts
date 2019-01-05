import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-myheader-menu',
  templateUrl: './myheader-menu.component.html',
  styleUrls: ['./myheader-menu.component.css']
})
export class MyheaderMenuComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
  }

}
