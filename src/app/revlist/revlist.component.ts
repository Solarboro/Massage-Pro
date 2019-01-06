import { Component, OnInit } from '@angular/core';
import { Reservation } from '../model/reservation';

@Component({
  selector: 'app-revlist',
  templateUrl: './revlist.component.html',
  styleUrls: ['./revlist.component.css']
})
export class RevlistComponent implements OnInit {
  revList: Reservation[];

  revItem1: Reservation;
  revItem2: Reservation;
  revItem3: Reservation;
  revItem4: Reservation;
  revItem5: Reservation;
  revItem6: Reservation;
  revItem7: Reservation;
  revItem8: Reservation;
  revItem9: Reservation;
  revItema: Reservation;
  revItemb: Reservation;
  revItemc: Reservation;

  //
  curPageNo: number;
  totPageNo: number;
  listSize: number;

  //
  seqFrom: number;
  seqTo: number;

  constructor() {
    this.listSize = 4;
  }

  ngOnInit() {
    //
    this.revItem1 = new Reservation();
    this.revItem2 = new Reservation();
    this.revItem3 = new Reservation();
    this.revItem4 = new Reservation();
    this.revItem5 = new Reservation();
    this.revItem6 = new Reservation();
    this.revItem7 = new Reservation();
    this.revItem8 = new Reservation();
    this.revItem9 = new Reservation();
    this.revItema = new Reservation();
    this.revItemb = new Reservation();
    this.revItemc = new Reservation();

    //
    this.revItem1.revBuilding = 'XY';
    this.revItem1.revComment = false;
    this.revItem1.revDate = '2018.12.12';
    this.revItem1.revFloor = '13';
    this.revItem1.revMasg = 'One';
    this.revItem1.revStatus = 1;
    this.revItem1.revTime = '9:00 - 9:30';

    this.revItem2.revBuilding = 'XY';
    this.revItem2.revComment = true;
    this.revItem2.revDate = '2018.11.12';
    this.revItem2.revFloor = '13';
    this.revItem2.revMasg = 'Two';
    this.revItem2.revStatus = 2;
    this.revItem2.revTime = '9:00 - 9:30';

    this.revItem3.revBuilding = 'XY';
    this.revItem3.revComment = false;
    this.revItem3.revDate = '2018.10.12';
    this.revItem3.revFloor = '13';
    this.revItem3.revMasg = 'Three';
    this.revItem3.revStatus = 3;
    this.revItem3.revTime = '9:00 - 9:30';

    //
    this.revItem4.revBuilding = 'XY';
    this.revItem4.revComment = false;
    this.revItem4.revDate = '2018.12.12';
    this.revItem4.revFloor = '13';
    this.revItem4.revMasg = 'Four';
    this.revItem4.revStatus = 4;
    this.revItem4.revTime = '9:00 - 9:30';

    this.revItem5.revBuilding = 'XY';
    this.revItem5.revComment = true;
    this.revItem5.revDate = '2018.11.12';
    this.revItem5.revFloor = '13';
    this.revItem5.revMasg = 'Five';
    this.revItem5.revStatus = 1;
    this.revItem5.revTime = '9:00 - 9:30';

    this.revItem6.revBuilding = 'XY';
    this.revItem6.revComment = false;
    this.revItem6.revDate = '2018.10.12';
    this.revItem6.revFloor = '13';
    this.revItem6.revMasg = 'Six';
    this.revItem6.revStatus = 1;
    this.revItem6.revTime = '9:00 - 9:30';
    //
    this.revItem7.revBuilding = 'XY';
    this.revItem7.revComment = false;
    this.revItem7.revDate = '2018.12.12';
    this.revItem7.revFloor = '13';
    this.revItem7.revMasg = 'Seven';
    this.revItem7.revStatus = 2;
    this.revItem7.revTime = '9:00 - 9:30';

    this.revItem8.revBuilding = 'XY';
    this.revItem8.revComment = true;
    this.revItem8.revDate = '2018.11.12';
    this.revItem8.revFloor = '13';
    this.revItem8.revMasg = 'Eight';
    this.revItem8.revStatus = 2;
    this.revItem8.revTime = '9:00 - 9:30';

    this.revItem9.revBuilding = 'XY';
    this.revItem9.revComment = false;
    this.revItem9.revDate = '2018.10.12';
    this.revItem9.revFloor = '13';
    this.revItem9.revMasg = 'Nine';
    this.revItem9.revStatus = 2;
    this.revItem9.revTime = '9:00 - 9:30';

    //
    this.revItema.revBuilding = 'XY';
    this.revItema.revComment = false;
    this.revItema.revDate = '2018.12.12';
    this.revItema.revFloor = '13';
    this.revItema.revMasg = 'AAAA';
    this.revItema.revStatus = 2;
    this.revItema.revTime = '9:00 - 9:30';

    this.revItemb.revBuilding = 'XY';
    this.revItemb.revComment = true;
    this.revItemb.revDate = '2018.11.12';
    this.revItemb.revFloor = '13';
    this.revItemb.revMasg = 'BBBB';
    this.revItemb.revStatus = 2;
    this.revItemb.revTime = '9:00 - 9:30';

    this.revItemc.revBuilding = 'XY';
    this.revItemc.revComment = false;
    this.revItemc.revDate = '2018.10.12';
    this.revItemc.revFloor = '13';
    this.revItemc.revMasg = 'CCCC';
    this.revItemc.revStatus = 2;
    this.revItemc.revTime = '9:00 - 9:30';

    //
    this.revList = [
      this.revItem1,
      this.revItem2,
      this.revItem3,
      this.revItem4,
      this.revItem5,
      this.revItem6,
      this.revItem7,
      this.revItem8,
      this.revItem9,
      this.revItema,
      this.revItemb
      // this.revItemc
    ];

    // business
    this.curPageNo = 1;
    //
    this.refreshPage();
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
