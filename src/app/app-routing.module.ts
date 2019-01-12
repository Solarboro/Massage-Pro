import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyhomeComponent } from './myhome/myhome.component';
import { RevPanelComponent } from './rev-panel/rev-panel.component';
import { RevlistComponent } from './revlist/revlist.component';
import { ReservationPanel2MasgComponent } from './reservation-panel2-masg/reservation-panel2-masg.component';
import { MenuGuard, MenuGuardMasg } from './controller/menu-guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'logout', redirectTo: 'home' },
  { path: 'home', component: MyhomeComponent },
  { path: 'newRev', component: RevPanelComponent, canActivate: [MenuGuard]},
  { path: 'revList', component: RevlistComponent, canActivate: [MenuGuard]},

  { path: 'revList2Masg', component: ReservationPanel2MasgComponent, canActivate: [MenuGuardMasg]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
