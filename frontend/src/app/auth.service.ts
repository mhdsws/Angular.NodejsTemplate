import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
@Injectable()
export class AuthService {
    BASE_URL = 'http://localhost:56343/auth';
    NAME_KEY = 'name';
    TOKEN_KEY = 'token';
    constructor(private http:Http, private router: Router) {}

    get name() {
        return localStorage.getItem(this.NAME_KEY);
    }
    get isAuthenticated() {
        return !!localStorage.getItem(this.TOKEN_KEY);
    }
    login(loginData) {
        this.http.post(this.BASE_URL + '/login', loginData).subscribe(res => {
            this.authenticate(res);
        });
    }
    register(user: any) {
            delete user.confirm_password;
            this.http.post(this.BASE_URL + '/register', user).subscribe(res => {
                this.authenticate(res);
            });             
    }
    logout() {
        localStorage.removeItem(this.NAME_KEY);
        localStorage.removeItem(this.TOKEN_KEY);
        this.router.navigate(['/login']);
    }
    authenticate(res) {
            localStorage.setItem(this.NAME_KEY, res.json().firstName);
            localStorage.setItem(this.TOKEN_KEY, res.json().token);
            this.router.navigate(['/']);
    }
}