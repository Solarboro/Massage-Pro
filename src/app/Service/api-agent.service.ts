import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginService } from './login-service';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class ApiAgentService {

  // Request Header
  private requestHeader: { [key: string]: string } = {};

  // URL Mapping
  private urlMap: { [key: string]: string };

  constructor(
    private httpClient: HttpClient,
    private userService: UserService
  ) {
    // Init Reqest Header
      // Token / APIKey
      // this.requestHeader['Token'] = 'TBC';

      // Accept Type & Content Type
      this.requestHeader['Accept'] = 'application/json;charset=UTF-8';
      this.requestHeader['Content-Type'] = 'application/json;charset=UTF-8';

    // Url Mapping
      this.urlMap = {};

      // Login
      this.urlMap['login'] = 'http://localhost:8080/login';
      // UserDetial
      this.urlMap['userDetial'] = 'http://localhost:8080/masguser/detail/specify/';
      // Reservation
      this.urlMap['revList'] = 'http://localhost:8080/rev/find';
      this.urlMap['revSave'] = 'http://localhost:8080/rev/save';
      this.urlMap['revChangeToCommented'] = 'http://localhost:8080/rev/change/5';
      this.urlMap['revChangeToCancelled'] = 'http://localhost:8080/rev/change/4';
      this.urlMap['revChangeToNoShow'] = 'http://localhost:8080/rev/change/3';
      this.urlMap['revChangeToFinished'] = 'http://localhost:8080/rev/change/2';

      // Masg Reservation
      this.urlMap['revList2Masg'] = 'http://localhost:8080/rev/2masg';

      // Rev Panel
      this.urlMap['revPanel'] = 'http://localhost:8080/rev/revpanel';

      // Setting - RevStatus
      this.urlMap['settingRSMap'] = 'http://localhost:8080/setting/map/revstatus';
      this.urlMap['settingRSList'] = 'http://localhost:8080/setting/revstatus/find';
      this.urlMap['settingRSSave'] = 'http://localhost:8080/setting/revstatus/save';

      // Setting - RevDuration
      this.urlMap['settingRDMap'] = 'http://localhost:8080/setting/map/revduration';
      this.urlMap['settingRDList'] = 'http://localhost:8080/setting/revduration/find';
      this.urlMap['settingRDSave'] = 'http://localhost:8080/setting/revduration/save';


      // Test URL
      this.urlMap['getOne'] = 'http://localhost:8080/test/getone';
      this.urlMap['dateSave'] = 'http://localhost:8080/test/saveone';
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
