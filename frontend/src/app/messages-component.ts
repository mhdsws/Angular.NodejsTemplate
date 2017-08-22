import { Component } from "@angular/core"
import  { WebService } from './web.service';
import { ActivatedRoute } from '@angular/router';
@Component ({
    selector: "messages",
    template: `
        <md-card *ngFor="let message of webService.messages | async">
            <md-card-title [routerLink]="['/messages', message.owner]">{{message.owner}}</md-card-title>
            <md-card-content>{{message.text}}</md-card-content>
        </md-card>
    `
})
export class MessagesComponent {
    constructor(private webService: WebService, private route: ActivatedRoute) {}
    ngOnInit() {
        var owner = this.route.snapshot.params.name;
        this.webService.getMessages(owner);
    }  
}