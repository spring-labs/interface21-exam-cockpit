import { Component } from 'angular2/core';
import { Router } from 'angular2/router';
import { Exam } from './exam'

@Component({
    selector: 'create-exam',
    templateUrl: 'app/views/create-exam.component.html'
})
export class CreateExamComponent {

    title = "Exam Details";
    exam: Exam = {};

    constructor(
        private _router: Router
    ){}

    addQuestion(exam: Exam) {
        let link = ['AddQuestion', { exam: this.exam }];
        this._router.navigate(link);
    }

}
