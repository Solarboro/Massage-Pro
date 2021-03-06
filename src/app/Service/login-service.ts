import { Injectable } from '@angular/core';
import { ApiAgentService } from './api-agent.service';
import { MasgUser } from '../model/masg-user';
import { Observable } from 'rxjs';
import { RepositoryService } from './Repository/repository.service';
import { UserService } from './user.service';

@Injectable()
export class LoginService {
    private loginStatus: boolean;
    private searchDate: string;

    constructor(
        private userService: UserService,
        private repositoryService: RepositoryService
    ) {
        // 
        this.calSearchDate();
    }

    public setMasgUser( masgUser: MasgUser): void {
        this.userService.masgUser = masgUser;
    }

    public setLoginStatus( loginStatus: boolean ): void {
        this.loginStatus = loginStatus;
    }

    public isLogin(): boolean {
        return this.loginStatus;
    }

    public login(loginStatus: boolean, masgUser: MasgUser): void {
        // 
        this.loginStatus = loginStatus;
        this.userService.masgUser = masgUser;

        // for Admin
        if ( this.userService.isAdmin() ) {
            this.repositoryService.syncUpAdminData();
        }

        // for Masg
        if ( this.userService.isMasg() ) {
            this.repositoryService.masgPDFPara = '?revMasg='
            + this.userService.getUsername()
            + '&revDate='
            + this.searchDate;
            this.repositoryService.syncUpMasgData();
        }

        // for User
        if ( this.userService.isUser() ) {
            this.repositoryService.syncUpUserData();
        }

    }

    public logout(): void {
        this.loginStatus = false;
        this.userService.masgUser = null;

        // for User
        if ( this.userService.isAdmin() ) {
            this.repositoryService.cleanAdminData();
        }

        // for User
        if ( this.userService.isMasg() ) {
            this.repositoryService.cleanMasgData();
        }

        // for User
        if ( this.userService.isUser() ) {
            this.repositoryService.cleanUserData();
        }
    }

    calSearchDate(): void {
        const toDay: Date = new Date();
        const month: string = ('0' + (toDay.getMonth() + 1)).slice(-2);
        const day: string = ('0' + toDay.getDate()).slice(-2);

        this.searchDate = toDay.getFullYear() + '-' + month + '-' + day;
    }
}
