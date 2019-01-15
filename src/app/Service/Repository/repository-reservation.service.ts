import { Injectable } from '@angular/core';
import { ApiAgentService } from '../api-agent.service';
import { Reservation } from 'src/app/model/reservation';
import { Subject, BehaviorSubject } from 'rxjs';
import { MasgUserService } from '../masg-user.service';

@Injectable({
  providedIn: 'root'
})
export class RepositoryReservationService {

  // Local Data
  public reservationList: Reservation[];


  // Subject
  public latestRevList: Subject<Reservation[]> = new BehaviorSubject<Reservation[]>(null);

  constructor(
    private apiAgentService: ApiAgentService,
    private masgUserService: MasgUserService
  ) {
    //
    this.reservationList = null;

    // ob
    this.masgUserService.latestMagUser.subscribe(
      masgUser => {
        if ( masgUser ) {
          console.log(masgUser);
          this.syncUp();
        } else {
          this.clean();
        }
      }
    );

   }
  //  Clean Data
  clean(): void {
    this.reservationList = null;
  }

  // Sync up Data from API Server
  syncUp(): void {
    // Direct read data from API
    this.apiAgentService.aGetWP<Reservation[]>('revList', '/' + this.masgUserService.getMasgUser().username)
    .subscribe( data => {

      // 
      this.reservationList = data;

      // Push subject
      this.latestRevList.next(data);
    });
  }

  aSave(reservation: Reservation): void {
    //
    this.apiAgentService.aPost<Reservation>('revSave', reservation)
    .subscribe( data => {
      this.syncUp();
    });
  }

  aComment(reservation: Reservation): void {
    //
    console.log('start post');
    this.apiAgentService.aPost<Reservation>('revChangeToCommented', reservation)
    .subscribe( data => {
      console.log('b s post');
      this.syncUp();
      console.log('a s post');
    });
  }

  aCancelled(reservation: Reservation): void {
    //
    this.apiAgentService.aPost<Reservation>('revChangeToCancelled', reservation)
    .subscribe( data => {
      this.syncUp();
    });
  }

  aNoShow(reservation: Reservation): void {
    //
    this.apiAgentService.aPost<Reservation>('revChangeToNoShow', reservation)
    .subscribe( data => {
      this.syncUp();
    });
  }

  aFinished(reservation: Reservation): void {
    //
    this.apiAgentService.aPost<Reservation>('revChangeToFinished', reservation)
    .subscribe( data => {
      this.syncUp();
    });
  }
}
