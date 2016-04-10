import { Injectable } from 'angular2/core';
import { Http, Response } from 'angular2/http';
import { Observable } from 'rxjs/Observable';
import { Exam } from './exam.ts';

import { EXAMS } from './mock-exams';

@Injectable()
export class ExamService {

    currentExam: Exam;

    constructor(private _http: Http) { }

    private _examsURL = 'api/exams';

    getExams() {
        return this._http.get(this._examsURL)
            .map(res => <Exam[]>res.json().data)
            .catch(this.handleError);
    }
    
    getExam(id: number) {
        return Promise.resolve(EXAMS).then(
            exams => exams.filter(exam => exam.appid === id)[0]
        );
    }

    save(exam: Exam) {
        return Promise.resolve(EXAMS).then(
            exams => exams.filter(e => e.appid === exam.appid)[0] = exam
        );
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
