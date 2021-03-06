import { Injectable } from 'angular2/core';
import { Http, Response, Headers, RequestOptions } from 'angular2/http';
import { Observable } from 'rxjs/Observable';
import { Exam } from './exam.ts';

import { ApiGateway } from "./apiGateway.service";

@Injectable()
export class ExamService {

    currentExam: Exam;

    constructor(
        private _http: Http,
        private _apiGateway: ApiGateway
    ) { }

    //    private _examsURL = './exams.js';
    private _examsURL = 'http://localhost:8080/api/exams';

    getExams() {
        var stream = this._apiGateway.get(
            this._examsURL
        )
        .map(res => res.json().data._embedded.exams)
        return stream;
        /*
        let options = new RequestOptions({
            headers: this._appendAuthorizationHeader(new Headers())
        });

        return this._http.get(this._examsURL)
            .map(res => {
                <Exam[]>res.json().data._embedded.exams
            })
            .catch(this._handleError);
            */
    }

    getExam(id: number) {
        let options = new RequestOptions({
            headers: this._appendAuthorizationHeader(new Headers())
        });

        return this._http.get(this._examsURL + '/' + id, options)
            .map(res => <Exam>res.json().data)
            .catch(this._handleError);
    }

    save(exam: Exam): Observable<Exam> {
        let body = JSON.stringify({ name });
        let options = new RequestOptions({
            headers: this._appendAuthorizationHeader(new Headers({ 'Content-Type': 'application/json' }))
        });

        return this._http.post(this._examsURL, body, options)
            .map(res => <Exam>res.json().data)
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
