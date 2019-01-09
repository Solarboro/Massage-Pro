import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { UserService } from '../Service/user.service';

@Injectable()
export class MenuGuard implements CanActivate {
    constructor(private userService: UserService) {

    }

    //
    canActivate(): boolean {
        return this.userService.isUser();
    }
}

@Injectable()
export class MenuGuardAdmin implements CanActivate {
    constructor(private userService: UserService) {

    }

    //
    canActivate(): boolean {
        return this.userService.isAdmin();
    }
}

@Injectable()
export class MenuGuardMasg implements CanActivate {
    constructor(private userService: UserService) {

    }

    //
    canActivate(): boolean {
        return this.userService.isMasg();
    }
}

