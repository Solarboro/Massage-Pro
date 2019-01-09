import { Injectable } from '@angular/core';
import { ApiAgentService } from '../api-agent.service';
import { Reservation } from 'src/app/model/reservation';
import { LoginService } from '../login-service';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RepositoryReservationService {

  // Local Data
  public reservationList: Reservation[];

  // Subject
  public latestRevList: Subject<Reservation[]> = new BehaviorSubject<Reservation[]>(null);

  constructor(
    private apiAgentService: ApiAgentService
  ) {
    // 
    this.reservationList = [];

   }
  //  Clean Data
  clean(): void {
    this.reservationList = [];
  }

  // Sync up Data from API Server
  syncUp(): void {
    // Direct read data from API
    this.apiAgentService.aGet<Reservation[]>('revList')
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
}
