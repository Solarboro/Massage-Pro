import { Injectable } from '@angular/core';
import { ApiAgentService } from '../api-agent.service';
import { Reservation } from 'src/app/model/reservation';

@Injectable({
  providedIn: 'root'
})
export class RepositoryReservationService {

  // Local Data
  public reservationList: Reservation[];

  constructor(
    private apiAgentService: ApiAgentService
  ) {

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
      this.reservationList = data;
    });
  }
}
