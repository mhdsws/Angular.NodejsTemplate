import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from './auth.service';

@Component({
  moduleId: module.id,
  selector: 'register',
  templateUrl: 'register.component.html',
  styles: [`
    .error {
        background-color: #fff0f0;
    }
  `]
})
export class RegisterComponent  {
    form;

    constructor(private fb: FormBuilder, private auth: AuthService) {
        this.form = fb.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            email: ['', Validators.required],
            password: ['', Validators.required],
            confirm_password: ['', Validators.required],
        });
    }
    onSubmit() {
        this.auth.register(this.form.value);
    }
    isValid(control) {
        return this.form.controls[control].invalid && this.form.controls[control].touched; 
    }
}
