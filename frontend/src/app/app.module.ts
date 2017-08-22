import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@angular/material';
import { MessagesComponent } from './messages-component';
import { NavComponent } from './nav.component';
import { NewMessageComponent } from './new-message-component';
import { AppComponent }  from './app.component';
import { HomeComponent }  from './home-component';
import { RegisterComponent }  from './register.component';
import { WebService } from './web.service';
import { AuthService } from './auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';
var routes = [{
  path: '',
  component: HomeComponent
},
{
  path: 'messages',
  component: MessagesComponent
},
{
  path: 'messages/:name',
  component: MessagesComponent
},
{
  path: 'register',
  component: RegisterComponent
},
{
  path: 'login',
  component: LoginComponent
}];

@NgModule({
  imports:      [ BrowserModule, MaterialModule, FormsModule, ReactiveFormsModule, RouterModule.forRoot(routes) ],
  declarations: [ AppComponent, MessagesComponent, NewMessageComponent, NavComponent, HomeComponent, RegisterComponent, LoginComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ WebService, AuthService ]
})
export class AppModule { }
