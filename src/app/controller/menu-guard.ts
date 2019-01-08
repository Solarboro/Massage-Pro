import { Injectable } from '@angular/core';
import { LoginService } from '../Service/login-service';
import { CanActivate } from '@angular/router';

@Injectable()
export class MenuGuard implements CanActivate {
    constructor(private loginServiceImpl: LoginService) {

    }

    //
    canActivate(): boolean {
        return this.loginServiceImpl.isLogin();
    }
}

@Injectable()
export class MenuGuardAdmin implements CanActivate {
    constructor(private loginServiceImpl: LoginService) {

    }

    //
    canActivate(): boolean {
        return this.loginServiceImpl.isAdmin();
    }
}

@Injectable()
export class MenuGuardMasg implements CanActivate {
    constructor(private loginServiceImpl: LoginService) {

    }

    //
    canActivate(): boolean {
        return this.loginServiceImpl.isMasg();
    }
}

