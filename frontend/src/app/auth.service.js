"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var http_1 = require("@angular/http");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var AuthService = (function () {
    function AuthService(http, router) {
        this.http = http;
        this.router = router;
        this.BASE_URL = 'http://localhost:56343/auth';
        this.NAME_KEY = 'name';
        this.TOKEN_KEY = 'token';
    }
    Object.defineProperty(AuthService.prototype, "name", {
        get: function () {
            return localStorage.getItem(this.NAME_KEY);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "isAuthenticated", {
        get: function () {
            return !!localStorage.getItem(this.TOKEN_KEY);
        },
        enumerable: true,
        configurable: true
    });
    AuthService.prototype.login = function (loginData) {
        var _this = this;
        this.http.post(this.BASE_URL + '/login', loginData).subscribe(function (res) {
            _this.authenticate(res);
        });
    };
    AuthService.prototype.register = function (user) {
        var _this = this;
        delete user.confirm_password;
        this.http.post(this.BASE_URL + '/register', user).subscribe(function (res) {
            _this.authenticate(res);
        });
    };
    AuthService.prototype.logout = function () {
        localStorage.removeItem(this.NAME_KEY);
        localStorage.removeItem(this.TOKEN_KEY);
        this.router.navigate(['/login']);
    };
    AuthService.prototype.authenticate = function (res) {
        localStorage.setItem(this.NAME_KEY, res.json().firstName);
        localStorage.setItem(this.TOKEN_KEY, res.json().token);
        this.router.navigate(['/']);
    };
    return AuthService;
}());
AuthService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http, router_1.Router])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map