import { Injectable } from '@angular/core';
import { ApiAgentService } from './api-agent.service';
import { MasgUser } from '../model/masg-user';
import { Observable } from 'rxjs';
import { RepositoryService } from './Repository/repository.service';

@Injectable()
export class LoginService {
    private masgUser: MasgUser = {};
    private loginStatus: boolean;

    constructor(
        private repositoryService: RepositoryService
    ) {

    }

    public setMasgUser( masgUser: MasgUser): void {
        this.masgUser = masgUser;
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
        this.masgUser = masgUser;

        // for User
        if ( this.isAdmin() ) {
            this.repositoryService.syncUpAdminData();
        }

        // for User
        if ( this.isMasg() ) {
            this.repositoryService.syncUpMasgData();
        }

        // for User
        if ( this.isUser() ) {
            this.repositoryService.syncUpUserData();
        }

    }

    public logout(): void {
        this.loginStatus = false;
        this.masgUser = {};

        // for User
        if ( this.isAdmin() ) {
            this.repositoryService.cleanAdminData();
        }

        // for User
        if ( this.isMasg() ) {
            this.repositoryService.cleanMasgData();
        }

        // for User
        if ( this.isUser() ) {
            this.repositoryService.cleanUserData();
        }
    }

    public getUsername(): string {
        return this.masgUser.username;
    }

    public isAdmin(): boolean {
        return this.masgUser.role === 'admin';
    }

    public isMasg(): boolean {
        return this.masgUser.role === 'masg';
    }

    public isUser(): boolean {
        return this.masgUser.role === 'user';
    }

}
