import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myheader-getstarted',
  templateUrl: './myheader-getstarted.component.html',
  styleUrls: ['./myheader-getstarted.component.css']
})
export class MyheaderGetstartedComponent implements OnInit {

  constructor() {
   }

  ngOnInit() {
  }

  getStart(): void {
    alert('start');
  }
}
