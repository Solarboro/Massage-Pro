import { Injectable } from '@angular/core';
import { MasgUser } from '../model/masg-user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public masgUser: MasgUser = null;

  constructor() { }

  public getUsername(): string {
      // 
      if ( this.masgUser == null) {
        return 'User No Ready';
      }
    //
      return this.masgUser.username;
  }

  public isAdmin(): boolean {
    // 
      if ( this.masgUser == null) {
        return false;
      }
    // 
      return this.masgUser.role === 'admin';
  }

  public isMasg(): boolean {
    // 
      if ( this.masgUser == null) {
        return false;
      }
    // 
      return this.masgUser.role === 'masg';
  }

  public isUser(): boolean {
    // 
      if ( this.masgUser == null) {
        return false;
      }
    // 
      return this.masgUser.role === 'user';
  }
}
