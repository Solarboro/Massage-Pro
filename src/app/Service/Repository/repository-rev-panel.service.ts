import { Injectable } from '@angular/core';
import { RevPanel } from 'src/app/model/rev-panel';
import { ApiAgentService } from '../api-agent.service';

@Injectable({
  providedIn: 'root'
})
export class RepositoryRevPanelService {
  // Local Data
  public revPanel: RevPanel;

  constructor(
    private apiAgentService: ApiAgentService
  ) {
    // 
    this.revPanel = null;
   }

  //  Clean Data
  clean(): void {
    this.revPanel = null;
  }

  // Sync up Data from API Server
  syncUp(): void {
    // Direct read data from API
    this.apiAgentService.aGet<RevPanel>('revPanel')
    .subscribe( data => {
      this.revPanel = data;
    });
  }
}
