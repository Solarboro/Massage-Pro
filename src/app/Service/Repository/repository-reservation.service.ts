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

  // Sync up Data from API Server
  Sync(): void {
    // Direct read data from API
    this.apiAgentService.aGet<Reservation[]>('revList')
    .subscribe( data => {
      this.reservationList = data;
    });
  }
}
