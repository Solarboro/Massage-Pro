import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {
    private username: string;
    constructor() {
        // test
        this.username = 'Frank';
    }

    isLogin(): boolean {
        return this.getUsername() !== null;
    }

    logout(): void {
        localStorage.removeItem('username');
    }

    login(): boolean {
        localStorage.setItem('username', this.username);
        return false;
    }

    getUsername(): string {
        return localStorage.getItem('username');
    }

}
