import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
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

registerLocaleData(en);


// Routes
const myRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: MyhomeComponent },
  { path: 'newRev', component: RevPanelComponent },
  { path: 'revList', component: RevlistComponent }
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
    MyhomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    NoopAnimationsModule,
    RouterModule.forRoot(myRoutes)
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US },
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
