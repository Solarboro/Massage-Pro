import { Injectable } from '@angular/core';
import { RevPanel } from 'src/app/model/rev-panel';
import { ApiAgentService } from '../api-agent.service';
import { Subject, BehaviorSubject } from 'rxjs';
import { MasgUserService } from '../masg-user.service';

@Injectable({
  providedIn: 'root'
})
export class RepositoryRevPanelService {

  // Subject on Data
  public latestRevPanel: Subject<RevPanel> = new BehaviorSubject<RevPanel>(null);
  // Local Data
  public revPanel: RevPanel;

  constructor(
    private apiAgentService: ApiAgentService,
    private masgUserService: MasgUserService
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
      this.latestRevPanel.next(data);
    });
  }
}
