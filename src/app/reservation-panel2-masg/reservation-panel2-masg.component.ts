import { Component, OnInit } from '@angular/core';
import { Reservation } from '../model/reservation';
import { RevStatus } from '../model/setting/rev-status';
import { RevDuration } from '../model/setting/rev-duration';
import { RepositorySettingService } from '../Service/Repository/repository-setting.service';
import { RepositoryReservationService } from '../Service/Repository/repository-reservation.service';
import { Subscription } from 'rxjs';
import { RepositoryMasgReservationService } from '../Service/Repository/repository-masg-reservation.service';
import { LoginService } from '../Service/login-service';
import { UserService } from '../Service/user.service';


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
 private revList: Reservation[] = [];

 private subscriptionRevList: Subscription;

 //
 private revStatusMap: { [key: number]: RevStatus};
 private revDurationMap: { [key: number]: RevDuration};

 private subscriptionRevStatusMap: Subscription;
 private subscriptionRevDurationMap: Subscription;

 // TimeStamp
 private ltsTimeStamp: Date;

 constructor(
   private userService: UserService,
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
    '?revMasg=' + this.userService.getUsername() + '&revDate=' + searchDate;

  // 
    this.repositoryMasgReservationService.syncUp();
 }

}
