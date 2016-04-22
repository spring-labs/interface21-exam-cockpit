import { Injectable } from 'angular2/core';
import { Http, Response, Headers, RequestOptions } from 'angular2/http';
import { Observable } from 'rxjs/Observable';
import { ExRequestOptions } from './exRequestOptions';
import 'rxjs/Rx';

@Injectable()
export class SecurityService {

    constructor(private _http: Http) { }

    private _loginUrl = 'http://localhost:8080/login';
    private _logoutUrl = 'http://localhost:8080/sec/logout';
    _authHeader: Headers;

    logout() {
        let options = new RequestOptions({
            headers: this._authHeader
        });
        console.log("Logging out");
        return this._http
            .post(this._logoutUrl, null, options)
            .catch(this._handleError)
            .subscribe(r => console.log(r))
    }

    login(username: string, password: string) {
        this._authHeader = this._buildAuthHeader(username, password);
        let body = JSON.stringify({ username, password });
        let options = new RequestOptions({ headers: this._authHeader });
        this.addXsrfToken(this._authHeader);
        console.log("Logging in..." + options.headers.get("X-CSRFToken"))
        return this._http.post(this._loginUrl, body, options)
            .catch(this._handleError)
            .subscribe(r => console.log(r))
    }


    private _buildAuthHeader(user: string, password: string): Headers {
        let h = new Headers(new Headers());
        h.append('Authorization', 'Basic ' + btoa(user + ":" + password));
        // With this header Spring Security will not send a "WWW-Authenticate" header in a 401 response
        // to avoid browsers login form 
        h.append('X-Requested-With', 'XMLHttpRequest');
        return this.addXsrfToken(h);
    }

    private _handleError(error: Response) {
        //console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

    private addXsrfToken(headers: Headers) {
        var xsrfToken = this.getXsrfCookie();
        if (xsrfToken) {
            headers.append('X-XSRF-TOKEN', xsrfToken);
        }
        return (headers);
    }

    private getXsrfCookie() {
        var matches = document.cookie.match(/\bXSRF-TOKEN=([^\s;]+)/);
        try {
            return (matches && decodeURIComponent(matches[1]));
        } catch (decodeError) {
            return ("");
        }
    }
}
