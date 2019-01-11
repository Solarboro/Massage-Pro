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
      this.urlMap['login'] = 'https://128.236.224.108/login';
      // UserDetial
      this.urlMap['userDetial'] = 'https://128.236.224.108/masguser/detail/specify/';
      // Reservation
      this.urlMap['revList'] = 'https://128.236.224.108/rev/find';
      this.urlMap['revSave'] = 'https://128.236.224.108/rev/save';
      this.urlMap['revChangeToCommented'] = 'https://128.236.224.108/rev/change/5';
      this.urlMap['revChangeToCancelled'] = 'https://128.236.224.108/rev/change/4';
      this.urlMap['revChangeToNoShow'] = 'https://128.236.224.108/rev/change/3';
      this.urlMap['revChangeToFinished'] = 'https://128.236.224.108/rev/change/2';

      // Masg Reservation
      this.urlMap['revList2Masg'] = 'https://128.236.224.108/rev/2masg';

      // Rev Panel
      this.urlMap['revPanel'] = 'https://128.236.224.108/rev/revpanel';

      // Setting - RevStatus
      this.urlMap['settingRSMap'] = 'https://128.236.224.108/setting/map/revstatus';
      this.urlMap['settingRSList'] = 'https://128.236.224.108/setting/revstatus/find';
      this.urlMap['settingRSSave'] = 'https://128.236.224.108/setting/revstatus/save';

      // Setting - RevDuration
      this.urlMap['settingRDMap'] = 'https://128.236.224.108/setting/map/revduration';
      this.urlMap['settingRDList'] = 'https://128.236.224.108/setting/revduration/find';
      this.urlMap['settingRDSave'] = 'https://128.236.224.108/setting/revduration/save';


      // Test URL
      this.urlMap['getOne'] = 'https://128.236.224.108/test/getone';
      this.urlMap['dateSave'] = 'https://128.236.224.108/test/saveone';
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
