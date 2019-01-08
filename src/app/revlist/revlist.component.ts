import { Component, OnInit } from '@angular/core';
import { Reservation } from '../model/reservation';
import { ApiAgentService } from '../Service/api-agent.service';

@Component({
  selector: 'app-revlist',
  templateUrl: './revlist.component.html',
  styleUrls: ['./revlist.component.css'],
  host: {
    class: 'ui basic segment'
  }
})
export class RevlistComponent implements OnInit {
  // Rev Records
  private revList: Reservation[] = [];

  // List Size
  private listSize: number;

  //
  private curPageNo: number;
  private totPageNo: number;

  //
  private seqFrom: number;
  private seqTo: number;

  constructor(private apiAgentService: ApiAgentService) {
    // Default Page No
    this.curPageNo = 1;

    // List Size
    this.listSize = 4;

    // Direct read data from API
    apiAgentService.aGet<Reservation[]>('revList')
    .subscribe( data => {
      this.revList = data;
      this.refreshPage();
     });
  }

  ngOnInit() {
  }

  setPage(pageNo: number): void {
    this.curPageNo = pageNo;
    this.refreshPage();
  }

  refreshPage(): void {
    //
    this.totPageNo = Math.ceil(this.revList.length / this.listSize);
    this.seqFrom = ( this.curPageNo - 1 ) * this.listSize;
    this.seqTo = this.curPageNo * this.listSize - 1;
  }

}
