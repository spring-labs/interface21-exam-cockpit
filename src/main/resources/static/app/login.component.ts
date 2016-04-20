import { Component, OnInit, Input } from 'angular2/core';
import { RouteParams, Router } from 'angular2/router';

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
        private _routeParams: RouteParams,
        private _securityService: SecurityService
    ){}

    ngOnInit() {
        let logout = this._routeParams.get('logout');
        if (logout) {
            this._securityService.logout();
        }
    }
}
