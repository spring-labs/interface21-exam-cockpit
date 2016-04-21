import { Injectable } from 'angular2/core';
import { Http, Response, Headers, RequestOptions } from 'angular2/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SecurityService {

    constructor(private _http: Http) { }

    private _loginUrl = 'http://localhost:8080/sec/login';
    private _logoutUrl = 'http://localhost:8080/sec/logout';
    _authHeader : Headers;

    logout() {
        let options = new RequestOptions({
            headers: this._authHeader
        });
        console.log("Logging out");
        return this._http.post(this._logoutUrl, null, options)
            .catch(this._handleError)
    }
    
    login(username:string, password:string) {
        this._authHeader = this._buildAuthHeader(username, password)
        let options = new RequestOptions({
            headers: this._authHeader
        });
        let body = JSON.stringify({ username, password });
        console.log("Logging in...")
        return this._http.post(this._loginUrl, body, options)
            .map(res => console.log(res))
            .catch(this._handleError)
    }

    private _buildAuthHeader(user: string, password: string): Headers {
        let h = new Headers(new Headers());
        h.append('Authorization', 'Basic ' + btoa(user+":"+password));
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
