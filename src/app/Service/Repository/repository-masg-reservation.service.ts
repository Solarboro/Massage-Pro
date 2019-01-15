import { Injectable } from '@angular/core';
import { ApiAgentService } from '../api-agent.service';
import { Reservation } from 'src/app/model/reservation';
import { Subject, BehaviorSubject } from 'rxjs';
import { MasgUserService } from '../masg-user.service';

@Injectable({
  providedIn: 'root'
})
export class RepositoryMasgReservationService {

  // Local Data
  public reservationList: Reservation[];

  // Subject
  public latestRevList: Subject<Reservation[]> = new BehaviorSubject<Reservation[]>(null);

  public para: string;

  constructor(
    private apiAgentService: ApiAgentService,
    private masgUserService: MasgUserService
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
    this.apiAgentService.aGetWP<Reservation[]>('revList2Masg', this.para)
    .subscribe( data => {

      //
      this.reservationList = data;

      // Push subject
      this.latestRevList.next(data);
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
