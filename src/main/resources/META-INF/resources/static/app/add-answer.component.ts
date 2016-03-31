import { Component, Input, OnInit } from 'angular2/core';
import { RouteConfig, Router, RouteParams } from 'angular2/router';

import { Exam } from './exam';
import { Question } from './question';

@Component({
    selector: 'add-answer',
    templateUrl: 'app/views/add-answer.component.html'
})
export class AddAnswerComponent implements OnInit {

    title = "Add Answer";

    @Input() question: Question;

    constructor(
        private _router: Router,
        private _routeParams: RouteParams
    ){}

    ngOnInit() {
        this.question = this._routeParams.get('question');
    }

    complete() {

    }
}
