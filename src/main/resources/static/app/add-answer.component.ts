import { Component, Input, OnInit } from 'angular2/core';
import { RouteConfig, Router, RouteParams } from 'angular2/router';

import { Answer } from './answer';
import { Exam } from './exam';
import { Question } from './question';

@Component({
    selector: 'add-answer',
    templateUrl: 'app/views/add-answer.component.html'
})
export class AddAnswerComponent implements OnInit {

    title = "Answer";

    @Input() question: Question;
    answer: Answer;

    constructor(
        private _router: Router,
        private _routeParams: RouteParams
    ) { }

    ngOnInit() {
        //this.question = this._routeParams.get('question');
        this.answer = new Answer;
    }

    add() {
        if (this.question.answers === undefined) {
            this.question.answers = [this.answer];
        } else {
            this.question.answers.push(this.answer);
        }
        window.history.back();
    }

    remove() {
        window.history.back();
    }
}
