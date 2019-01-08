import { Injectable } from '@angular/core';
import { ApiAgentService } from './api-agent.service';
import { MasgUser } from '../model/masg-user';
import { Observable } from 'rxjs';
import { RepositoryService } from './Repository/repository.service';

@Injectable()
export class LoginService {
    private masgUser: MasgUser;
    private loginStatus: boolean;

    constructor(
        private apiAgentService: ApiAgentService,
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

    public logout(): void {
        this.loginStatus = false;
        this.masgUser = null;
        this.repositoryService.cleanUserData();
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

}
