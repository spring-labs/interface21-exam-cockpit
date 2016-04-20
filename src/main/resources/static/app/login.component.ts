import { Component, OnInit, Input } from 'angular2/core';
import { Router } from 'angular2/router';

import { SecurityService } from './security-service';

@Component({
    selector: 'view-login',
    templateUrl: 'app/views/login.component.html',
})
export class LoginComponent implements OnInit {
    
    @Input() error: boolean;
    credentials: Object = {};

    constructor(
        private _router: Router,
        private _securityService: SecurityService
    ){}

    ngOnInit() {
        this._securityService.logout();
    }
}
