import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Reservation } from '../model/reservation';
import { ApiAgentService } from '../Service/api-agent.service';

@Component({
  selector: 'app-myheader-getstarted',
  templateUrl: './myheader-getstarted.component.html',
  styleUrls: ['./myheader-getstarted.component.css']
})
export class MyheaderGetstartedComponent implements OnInit {

  constructor(private myhttp: HttpClient,
              private apiAgentService: ApiAgentService) {
   }

  ngOnInit() {
  }

  getStart(): void {
    // console.log('start to get request.');
    // this.myhttp.get('http://localhost:8080/rev/find')
    //   .subscribe(
    //     data => {console.log(data)} ,
    //     err => {console.log(err)},
    //     () => {console.log('done')}
    //   );

    // get
    // this.testOnApiAgent(1);

    // post
    // this.testOnApiAgent(2);
  }

  postRev(): void {
    let myRev: Reservation;
    let myheader: HttpHeaders;


    myRev = new Reservation();
    myheader = new HttpHeaders().set('Content-Type', 'application/json;charset=UTF-8');



    myRev.revBuilding = 'XY';
    myRev.revComment = false;
    myRev.revDate = '2019.01.01';
    myRev.revFloor = '12';
    myRev.revMasg = 'Carrie';
    myRev.revStatus = 1;
    myRev.revTime = 1;
    myRev.uid = 'Frank Pengqiang li';

    this.myhttp.post('http://localhost:8080/rev/save', JSON.stringify(myRev), {headers : myheader})
      .subscribe(
        data => console.log(data)
      );

  }

  testOnApiAgent(mode: number): void {
    if ( mode === 1 ) {
      this.apiAgentService.aGet<Reservation[]>('revList')
      .subscribe( data => console.log(data) );
    }

    if ( mode === 2 ) {
      const myRev: Reservation = new Reservation();

      myRev.revBuilding = 'Xin Yuan';
      myRev.revComment = false;
      myRev.revDate = '2019.02.01';
      myRev.revFloor = '13';
      myRev.revMasg = 'Carrie';
      myRev.revStatus = 2;
      myRev.revTime = 1;
      myRev.uid = 'Frank Pengqiang li';

      this.apiAgentService.aPost<Reservation>('revSave', myRev)
      .subscribe( data => console.log(data) );
    }
  }

}
