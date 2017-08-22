import { Component } from "@angular/core"
import { AuthService } from './auth.service';
@Component ({
    selector: "login",
    template: `
        <md-card>
            
                <md-input-container>
                    <input mdInput [(ngModel)]="loginData.email"  style="width: 350px;" type="email" placeholder="Email">
                </md-input-container>
                <md-input-container>
                    <input mdInput [(ngModel)]="loginData.password" style="width: 350px;" type="password" placeholder="Password">
                </md-input-container>
                <br>
                <button md-raised-button color="primary" (click)="login()">Login</button>
            
        </md-card>
    `
})
export class LoginComponent {
    constructor(private auth: AuthService) {}
    loginData = {
        email: '',
        password: ''
    }
    login() {
        this.auth.login(this.loginData);
    }
}