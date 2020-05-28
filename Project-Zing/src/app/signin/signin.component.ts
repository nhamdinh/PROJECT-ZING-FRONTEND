import {Component, OnInit} from '@angular/core';
import {UserLogin} from '@app/JWT-ROLE/_models/userLogin';
import {first} from 'rxjs/operators';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthenticationService} from '@app/JWT-ROLE/_services';

@Component({
    selector: 'app-signin',
    templateUrl: './signin.component.html',
    styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

    loginForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;
    error = '';

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService
    ) {
        // redirect to home if already logged in
        if (this.authenticationService.currentUserValue) {
            this.router.navigate(['/']);
        }
    }

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    // convenience getter for easy access to form fields
    get f() {
        return this.loginForm.controls;
    }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }

        this.loading = true;
        const userLogin: UserLogin = this.loginForm.value;

        this.authenticationService.login(this.f.username.value, this.f.password.value)
            .pipe(first())
            .subscribe(
                user => {
                    switch (user.role) {
                        case 'ROLE_USER': {
                            this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
                            break;
                        }
                        case 'ROLE_ADMIN': {
                            this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/admin';
                            break;
                        }
                        default: {
                            this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
                            break;
                        }
                    }
                    this.router.navigate([this.returnUrl]);
                },
                error => {
                    if (error !== 'Username OR Pass incorrect!') {
                        this.error = 'Username OR Pass incorrect!';
                    }
                    // this.error = error;
                    this.loading = false;
                });
    }
}
