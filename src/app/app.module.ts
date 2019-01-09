import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData, LocationStrategy, HashLocationStrategy } from '@angular/common';
import en from '@angular/common/locales/en';
import { MyheaderComponent } from './myheader/myheader.component';
import { MyheaderMenuComponent } from './myheader-menu/myheader-menu.component';
import { MyheaderGetstartedComponent } from './myheader-getstarted/myheader-getstarted.component';
import { MybodyComponent } from './mybody/mybody.component';
import { MyfooterComponent } from './myfooter/myfooter.component';
import { RevlistComponent } from './revlist/revlist.component';
import { RevitemComponent } from './revitem/revitem.component';
import { ListcontollerComponent } from './listcontoller/listcontoller.component';
import { ListfilterComponent } from './listfilter/listfilter.component';
import { RevPanelComponent } from './rev-panel/rev-panel.component';
import { RevPanelDateListComponent } from './rev-panel-date-list/rev-panel-date-list.component';
import { RouterModule, Routes } from '@angular/router';
import { MyhomeComponent } from './myhome/myhome.component';
import { LoginService } from './Service/login-service';
import { MenuGuard, MenuGuardAdmin, MenuGuardMasg } from './controller/menu-guard';
import { NgSemanticModule } from 'ng-semantic';
import { MyheaderMenuUcpComponent } from './myheader-menu-ucp/myheader-menu-ucp.component';
import { RevitemDialogCancelComponent } from './revitem-dialog-cancel/revitem-dialog-cancel.component';
import { RevitemDialogCommentComponent } from './revitem-dialog-comment/revitem-dialog-comment.component';
import { RevitemMsgOntimeComponent } from './revitem-msg-ontime/revitem-msg-ontime.component';
import { RevitemMsgCommentComponent } from './revitem-msg-comment/revitem-msg-comment.component';
import { MyheaderSigninPanelComponent } from './myheader-signin-panel/myheader-signin-panel.component';
import { RevPanelDateItemComponent } from './rev-panel-date-item/rev-panel-date-item.component';
import { RevPanelDateItemDaysComponent } from './rev-panel-date-item-days/rev-panel-date-item-days.component';
import { RevPanelDateItemDurationsComponent } from './rev-panel-date-item-durations/rev-panel-date-item-durations.component';
import { RevPanelDateItemMasgPanelComponent } from './rev-panel-date-item-masg-panel/rev-panel-date-item-masg-panel.component';
import { ReservationPanel2MasgComponent } from './reservation-panel2-masg/reservation-panel2-masg.component';
import { ReservationPanel2MasgListComponent } from './reservation-panel2-masg-list/reservation-panel2-masg-list.component';
import { ReservationPanel2MasgListItemComponent } from './reservation-panel2-masg-list-item/reservation-panel2-masg-list-item.component';

registerLocaleData(en);


// Routes
const myRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'logout', redirectTo: 'home' },
  { path: 'home', component: MyhomeComponent },
  { path: 'newRev', component: RevPanelComponent, canActivate: [MenuGuard]},
  { path: 'revList', component: RevlistComponent, canActivate: [MenuGuard]},

  { path: 'revList2Masg', component: ReservationPanel2MasgComponent, canActivate: [MenuGuardMasg]}
];

@NgModule({
  declarations: [
    AppComponent,
    MyheaderComponent,
    MyheaderMenuComponent,
    MyheaderGetstartedComponent,
    MybodyComponent,
    MyfooterComponent,
    RevlistComponent,
    RevitemComponent,
    ListcontollerComponent,
    ListfilterComponent,
    RevPanelComponent,
    RevPanelDateListComponent,
    MyhomeComponent,
    MyheaderMenuUcpComponent,
    RevitemDialogCancelComponent,
    RevitemDialogCommentComponent,
    RevitemMsgOntimeComponent,
    RevitemMsgCommentComponent,
    MyheaderSigninPanelComponent,
    RevPanelDateItemComponent,
    RevPanelDateItemDaysComponent,
    RevPanelDateItemDurationsComponent,
    RevPanelDateItemMasgPanelComponent,
    ReservationPanel2MasgComponent,
    ReservationPanel2MasgListComponent,
    ReservationPanel2MasgListItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NoopAnimationsModule,
    RouterModule.forRoot(myRoutes),
    NgSemanticModule
  ],
  providers: [
    LoginService,
    MenuGuard,
    MenuGuardAdmin,
    MenuGuardMasg,
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
