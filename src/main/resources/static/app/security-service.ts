import { Injectable } from 'angular2/core';
import { Http, Response, Headers, RequestOptions } from 'angular2/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SecurityService {

    constructor(private _http: Http) { }

    private _logoutUrl = 'http://localhost:8080/sec/logout';

    logout() {
        console.log("logout");
        let options = new RequestOptions({
            headers: this._appendAuthorizationHeader(new Headers())
        });

        return this._http.post(this._logoutUrl, null, options)
            .catch(this._handleError)
    }

    private _appendAuthorizationHeader(headers: Headers): Headers {
        let h = new Headers(headers);
        h.append('Authorization', 'Basic ' + btoa("user:test"));
        // With this header Spring Security will not send a "WWW-Authenticate" header in a 401 response
        // to avoid browsers login form 
        h.append('X-Requested-With', 'XMLHttpRequest');
        return h;
    }

    private _handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
