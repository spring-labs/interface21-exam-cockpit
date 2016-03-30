import { Component } from 'angular2/core';
import { Router } from 'angular2/router';
import { Exam } from './exam';
import { Question } from './question';

@Component({
    selector: 'add-question',
    templateUrl: 'app/add-question.component.html'
})
export class AddQuestionComponent {

    title = "Add Question";
    question: Question = {};

    constructor(
        private _router: Router
    ){}

    addQuestion() {
        let link = ['AddQuestion', { exam: this.exam }];
        this._router.navigate(link);
    }

    addAnswer() {

    }

    complete() {

    }
}
