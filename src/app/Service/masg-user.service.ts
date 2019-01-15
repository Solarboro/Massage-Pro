import { Injectable } from '@angular/core';
import { MasgUser } from '../model/masg-user';
import { HttpClient } from '@angular/common/http';
import { Subject, BehaviorSubject } from 'rxjs';
import { Buffer } from 'buffer';

@Injectable({
  providedIn: 'root'
})
export class MasgUserService {

  private masgUser: MasgUser;

  private status: boolean;

  private rememberFlag: boolean;

  private jwt: string;

  // Subject
  public latestMagUser: Subject<MasgUser>;

  public latestJwt: Subject<string>;

  constructor(
    private httpClient: HttpClient

  ) {
    //
    this.latestMagUser = new BehaviorSubject<MasgUser>(null);
    this.latestJwt = new BehaviorSubject<string>(null);

    //
    this.readToken();

    // User Exist
    if ( this.getJwt() ) {
      //
      this.setMasgUser(this.jwtResolve(this.getJwt()));

      //
      this.setStatus(true);

      //
      this.setRememberFlag(true);
    }

   }


  // Getter Setter
    public setMasgUser(masgUser: MasgUser): void {
      //
      this.masgUser = masgUser;
      //
      this.latestMagUser.next(masgUser);
    }

    public getMasgUser(): MasgUser {
      return this.masgUser;
    }

    public setStatus(status: boolean): void {
      this.status = status;
    }

    public getStatus(): boolean {
      return this.status;
    }

    public setRememberFlag(rememberFlag: boolean): void {
      this.rememberFlag = rememberFlag;
    }

    public getRememberFlag(): boolean {
      return this.rememberFlag;
    }

    public setJwt(jwt: string): void {
      this.jwt = jwt;
      this.latestJwt.next(jwt);
    }

    public getJwt(): string {
      return this.jwt;
    }

  // Login & Logout
    public login(
      username: string,
      password: string,
      rememberFlag: boolean
    ): boolean {


      // HTTP Request
      this.httpClient.post(
        'https://localhost/login',
        JSON.stringify(
          {
            'username': username,
            'password': password
          }
        ),
        {
          observe: 'response'
        }
        ).subscribe(
          res => {
            //
            this.setJwt(res.headers.get('Authorization').replace('Bearer ', ''));

            //
            this.setMasgUser(this.jwtResolve(this.getJwt()));

            //
            this.setStatus(true);

            //
            this.setRememberFlag(rememberFlag);

            //
            this.saveToken(this.getRememberFlag());

            //
            $('.ui.sidebar')
            .sidebar('toggle');

          },
          err => {
            console.log(err);
          }
        );

        // nothing
        return this.getStatus();
     }

  public logout(): void {

    this.setMasgUser(null);
    this.setStatus(false);
    this.setJwt(null);
    this.deleteToken(this.getRememberFlag());
  }

  //
  private saveToken(rememberFlag: boolean): void {
    //
    localStorage.removeItem('MasgToken');
    //
    if ( rememberFlag ) {
        localStorage.setItem('MasgToken', this.jwt);
    }
  }

  private deleteToken(rememberFlag: boolean): void {
    //
    if ( rememberFlag ) {
      localStorage.removeItem('MasgToken');
    }
  }

  private readToken(): void {
    this.setJwt(localStorage.getItem('MasgToken'));
  }

  private jwtResolve(token: string): MasgUser {
    const masgUser: MasgUser = new MasgUser();

    const playload: object = JSON.parse(new Buffer(token.substring(token.indexOf('.') + 1, token.lastIndexOf('.')), 'base64').toString());

    masgUser.username = playload['username'];
    masgUser.role = playload['role'];

    return masgUser;
  }
}
