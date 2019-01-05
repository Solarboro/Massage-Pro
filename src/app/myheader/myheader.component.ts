import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-myheader',
  templateUrl: './myheader.component.html',
  styleUrls: ['./myheader.component.css']
})
export class MyheaderComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
  }
}
