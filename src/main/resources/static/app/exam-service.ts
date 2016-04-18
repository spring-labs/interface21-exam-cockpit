import { Injectable } from 'angular2/core';
import { Http, Response, Headers, RequestOptions } from 'angular2/http';
import { Observable } from 'rxjs/Observable';
import { Exam } from './exam.ts';

//import { EXAMS } from './mock-exams';

@Injectable()
export class ExamService {

    currentExam: Exam;

    constructor(private _http: Http) { }

    //    private _examsURL = './exams.js';
    private _examsURL = 'http://localhost:8080/api/exams';

    getExams() {
        let options = new RequestOptions({
            headers: this._appendAuthorizationHeader(new Headers())
        });

        return this._http.get(this._examsURL)
            .map(res => {
                <Exam[]>res.json().data._embedded.exams
            })
            .catch(this._handleError);
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
        return h;
    }

    private _handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
