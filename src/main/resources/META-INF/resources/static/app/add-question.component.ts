import { Component } from 'angular2/core';
import { Router } from 'angular2/router';
import { Exam } from './exam'

@Component({
    selector: 'add-question',
    templateUrl: 'app/add-question.component.html'
})
export class AddQuestionComponent {

    title = "Add Question";
    exam: Exam = {};

    constructor(
        private _router: Router
    ){}

    addQuestion(exam: Exam) {
        let link = ['AddQuestion', { exam: exam }];
        this._router.navigate(link);
    }

    addAnswer(exam: Exam) {

    }
}
