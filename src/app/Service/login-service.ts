import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {
    private username: string;
    private password: string;

    constructor() {
    }

    isLogin(): boolean {
        return this.getUsername() !== null;
    }

    logout(): void {
        localStorage.removeItem('username');
    }

    login(username: string, password: string): boolean {
        this.username = username;
        this.password = password;

        //verification
        
        localStorage.setItem('username', this.username);
        return true;
    }

    getUsername(): string {
        return localStorage.getItem('username');
    }

}
