import { Component, OnInit } from '@angular/core';
import { Reservation } from '../model/reservation';
import { RevStatus } from '../model/setting/rev-status';
import { RevDuration } from '../model/setting/rev-duration';
import { RepositorySettingService } from '../Service/Repository/repository-setting.service';
import { Subscription } from 'rxjs';
import { RepositoryMasgReservationService } from '../Service/Repository/repository-masg-reservation.service';
import { MasgUserService } from '../Service/masg-user.service';


@Component({
  selector: 'app-reservation-panel2-masg',
  templateUrl: './reservation-panel2-masg.component.html',
  styleUrls: ['./reservation-panel2-masg.component.css'],
  host: {
    class: 'ui basic segment'
  }
})
export class ReservationPanel2MasgComponent implements OnInit {
 // Rev Records
 public revList: Reservation[] = [];

 private subscriptionRevList: Subscription;

 //
 private revStatusMap: { [key: number]: RevStatus};
 private revDurationMap: { [key: number]: RevDuration};

 private subscriptionRevStatusMap: Subscription;
 private subscriptionRevDurationMap: Subscription;

 // TimeStamp
 public ltsTimeStamp: Date;

 // Timer
 private timer;

 constructor(
   private masgUserService: MasgUserService,
   private repositorySettingService: RepositorySettingService,
   private repositoryMasgReservationService: RepositoryMasgReservationService
   ) {

     //
     this.subscriptionRevList =
       this
       .repositoryMasgReservationService
       .latestRevList
       .subscribe(
         data => {
           this.revList = data;
           this.ltsTimeStamp = new Date();
         }
       );

     // 
     this.subscriptionRevStatusMap =
         this
         .repositorySettingService
         .latestRevStatusMap
         .subscribe(
           data => this.revStatusMap = data
         );

     // 
     this.subscriptionRevDurationMap =
           this
           .repositorySettingService
           .latestRevDurationMap
           .subscribe(
             data => this.revDurationMap = data
           );

     //  
       this.timer = setInterval(
         () => {
            this.repositorySettingService.syncUp();
            this.repositoryMasgReservationService.syncUp();
         }, 3000
       );
     // Sync data from Server to localStorage when component activated.
       this.repositorySettingService.syncUp();
       this.repositoryMasgReservationService.syncUp();
 }

 ngOnInit() {
 }


 ngOnDestroy(): void {

   //
   this.subscriptionRevList.unsubscribe();

   // 
   this.subscriptionRevStatusMap.unsubscribe();

   // 
   this.subscriptionRevDurationMap.unsubscribe();

   //  
   clearInterval(this.timer);
   
 }

 manuallyUpdate(): void {
   // 
   this.repositorySettingService.syncUp();

   // 
   this.repositoryMasgReservationService.syncUp();
 }

 processNoShowEvent(reservation: Reservation): void {
   this.repositoryMasgReservationService.aNoShow(reservation);

 }
 processFinishEvent(reservation: Reservation): void {
   this.repositoryMasgReservationService.aFinished(reservation);

 }

 processSearchEvent(searchDate: string): void {
  //
    this.repositoryMasgReservationService.para =
    '?revMasg=' + this.masgUserService.getMasgUser().username + '&revDate=' + searchDate;

  //
    this.repositoryMasgReservationService.syncUp();
 }

}
