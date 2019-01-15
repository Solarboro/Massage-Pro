import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MasgUserService } from './masg-user.service';

@Injectable({
  providedIn: 'root'
})
export class ApiAgentService {

  // Request Header
  private requestHeader: { [key: string]: string } = {};

  // URL Mapping
  private urlMap: { [key: string]: string };

  private hostname: string;
  private protocol: string;
  private origin: string;
  constructor(
    private httpClient: HttpClient,
    private masgUserService: MasgUserService
  ) {

    // Subject
    this.masgUserService.latestJwt.subscribe(
      jwt => {
        if ( jwt ) {
          this.requestHeader['Authorization'] = 'Bearer ' + this.masgUserService.getJwt();
        }
      }
    );
    // Init Reqest Header
      // Token / APIKey
      // this.requestHeader['Token'] = 'TBC';

      // Accept Type & Content Type
      this.requestHeader['Accept'] = 'application/json;charset=UTF-8';
      this.requestHeader['Content-Type'] = 'application/json;charset=UTF-8';

      // Set Origin
      // Individual mode
      this.origin = 'https://localhost';

      // Intergration Mode
      // this.origin = location.protocol + '//' + location.hostname;

    // Url Mapping
      this.urlMap = {};

      // Login
      this.urlMap['login'] = this.origin + '/login';
      // UserDetial
      this.urlMap['userDetial'] = this.origin + '/masguser/detail/specify/';
      // Reservation
      this.urlMap['revList'] = this.origin + '/rev/find';
      this.urlMap['revSave'] = this.origin + '/rev/save';
      this.urlMap['revChangeToCommented'] = this.origin + '/rev/change/5';
      this.urlMap['revChangeToCancelled'] = this.origin + '/rev/change/4';
      this.urlMap['revChangeToNoShow'] = this.origin + '/rev/change/3';
      this.urlMap['revChangeToFinished'] = this.origin + '/rev/change/2';

      // Masg Reservation
      this.urlMap['revList2Masg'] = this.origin + '/rev/2masg';

      // Rev Panel
      this.urlMap['revPanel'] = this.origin + '/rev/revpanel';

      // Setting - RevStatus
      this.urlMap['settingRSMap'] = this.origin + '/setting/map/revstatus';
      this.urlMap['settingRSList'] = this.origin + '/setting/revstatus/find';
      this.urlMap['settingRSSave'] = this.origin + '/setting/revstatus/save';

      // Setting - RevDuration
      this.urlMap['settingRDMap'] = this.origin + '/setting/map/revduration';
      this.urlMap['settingRDList'] = this.origin + '/setting/revduration/find';
      this.urlMap['settingRDSave'] = this.origin + '/setting/revduration/save';


      // Test URL
      this.urlMap['getOne'] = this.origin + '/test/getone';
      this.urlMap['dateSave'] = this.origin + '/test/saveone';
    }

  // URL Mapping
    public getUrl(urlCode: string): string {
      return this.urlMap[urlCode];
    }

  // Common HTTP Get Request
    public aGet<T>(urlCode: string): Observable<T> {

      return this.httpClient.get<T>(this.getUrl(urlCode), {headers: this.requestHeader});
    }

  // Common HTTP Post Request
    public aPost<T>(urlCode: string, requestBody: T): Observable<T> {

      return this.httpClient.post<T>(this.getUrl(urlCode), requestBody, {headers: this.requestHeader});
    }

  // Common HTTP Get Request
    public aGetWP<T>(urlCode: string, para: string): Observable<T> {

      return this.httpClient.get<T>(this.getUrl(urlCode) + para, {headers: this.requestHeader});
    }

}
