"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
var material_1 = require("@angular/material");
var messages_component_1 = require("./messages-component");
var nav_component_1 = require("./nav.component");
var new_message_component_1 = require("./new-message-component");
var app_component_1 = require("./app.component");
var home_component_1 = require("./home-component");
var register_component_1 = require("./register.component");
var web_service_1 = require("./web.service");
var auth_service_1 = require("./auth.service");
var forms_1 = require("@angular/forms");
var login_component_1 = require("./login.component");
var routes = [{
        path: '',
        component: home_component_1.HomeComponent
    },
    {
        path: 'messages',
        component: messages_component_1.MessagesComponent
    },
    {
        path: 'messages/:name',
        component: messages_component_1.MessagesComponent
    },
    {
        path: 'register',
        component: register_component_1.RegisterComponent
    },
    {
        path: 'login',
        component: login_component_1.LoginComponent
    }];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, material_1.MaterialModule, forms_1.FormsModule, forms_1.ReactiveFormsModule, router_1.RouterModule.forRoot(routes)],
        declarations: [app_component_1.AppComponent, messages_component_1.MessagesComponent, new_message_component_1.NewMessageComponent, nav_component_1.NavComponent, home_component_1.HomeComponent, register_component_1.RegisterComponent, login_component_1.LoginComponent],
        bootstrap: [app_component_1.AppComponent],
        providers: [web_service_1.WebService, auth_service_1.AuthService]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map