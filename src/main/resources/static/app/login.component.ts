import { Component, OnInit, Input } from 'angular2/core';
import { RouteParams, Router } from 'angular2/router';

import { SecurityService } from './security-service';

@Component({
    selector: 'view-login',
    templateUrl: 'app/views/login.component.html',
})
export class LoginComponent implements OnInit {
    
    @Input() error: boolean;
    credentials: Credentials = new Credentials();

    constructor(
        private _router: Router,
        private _routeParams: RouteParams,
        private _securityService: SecurityService
    ){}

    ngOnInit() {
        if (this._routeParams.get('logout')) {
            console.log("Logout...");
            this._securityService.logout();
        }
    }
    
    login() {
        console.log("Login...");
        this._securityService.login(this.credentials.username, this.credentials.password);
    }
    
}

class Credentials{ username:string;password:string}
