import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-myheader-getstarted',
  templateUrl: './myheader-getstarted.component.html',
  styleUrls: ['./myheader-getstarted.component.css']
})
export class MyheaderGetstartedComponent implements OnInit {

  constructor(private myhttp: HttpClient) {
   }

  ngOnInit() {
  }

  getStart(): void {
    console.log('start to get request.');
    this.myhttp.get('http://localhost:8080/')
      .subscribe(
        data => {console.log(data)} ,
        err => {console.log(err)},
        () => {console.log('done')}
      );
  }
}
