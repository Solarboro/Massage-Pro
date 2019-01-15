import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { MasgUserService } from '../Service/masg-user.service';

@Injectable()
export class MenuGuard implements CanActivate {
    constructor(private masgUserService: MasgUserService) {

    }

    //
    canActivate(): boolean {
        return this.masgUserService.getMasgUser() && this.masgUserService.getMasgUser().role === 'USER';
    }
}

@Injectable()
export class MenuGuardAdmin implements CanActivate {
    constructor(private masgUserService: MasgUserService) {

    }

    //
    canActivate(): boolean {
        return this.masgUserService.getMasgUser() && this.masgUserService.getMasgUser().role === 'ADMIN';
    }
}

@Injectable()
export class MenuGuardMasg implements CanActivate {
    constructor(private masgUserService: MasgUserService) {

    }

    //
    canActivate(): boolean {
        return this.masgUserService.getMasgUser() && this.masgUserService.getMasgUser().role === 'MASG';
    }
}

