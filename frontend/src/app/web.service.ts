import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { Subject } from 'rxjs/subject';
import { MdSnackBar } from '@angular/material';
@Injectable()
export class WebService {
    BASE_URL = 'http://localhost:56343/api';
    private messageStore = [{}];
    private messageSubject = new Subject();
    messages = this.messageSubject.asObservable();
    constructor(private http:Http, private sb:MdSnackBar) {
        this.getMessages();
    }
    
    async getMessages(user: any) {
            user = (user) ? '/' + user : '';
            this.http.get(this.BASE_URL + '/messages' + user).subscribe(response => {
                    this.messageStore = response.json();
                    this.messageSubject.next(this.messageStore);
            }, error => {
                    this.handleErrors("Unable to get messages");
            });             
    }

    async postMessage(message:any) {
        try {
            var response = await this.http.post(this.BASE_URL + '/messages', message).toPromise();
            this.messageStore.push(response.json());
            this.messageSubject.next(this.messageStore);
        } catch (error) {
            this.handleErrors("Unable to post messages");
        }      
    }
    private handleErrors(error:any) {
            this.sb.open(error, 'close', {duration: 2000});
    }
}