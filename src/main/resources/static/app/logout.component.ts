import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';

import { SecurityService } from './security-service';

@Component({
    selector: 'view-logout'
})
export class LogoutComponent implements OnInit {

    constructor(
        private _router: Router,
        private _securityService: SecurityService
    ){}

    ngOnInit() {
        console.log("logging out");
        this._securityService.logout();
    }
}
