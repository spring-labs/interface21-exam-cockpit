import { Component, Input, OnInit } from 'angular2/core';
import { Router, RouteParams } from 'angular2/router';

import { Exam } from './exam';
import { Question } from './question';
import {OnInit} from "../node_modules/angular2/src/core/linker/interfaces";

@Component({
    selector: 'add-question',
    templateUrl: 'app/add-question.component.html'
})
export class AddQuestionComponent implements OnInit {

    title = "Add Question";

    @Input() exam: Exam;
    question: Question;

    constructor(
        private _router: Router,
        private _routeParams: RouteParams
    ){}

    ngOnInit() {
        this.exam = this._routeParams.get('exam');
        this.question = {};
        console.log(this.exam);
    }

    addQuestion() {
        console.dir(this.exam);
        if (this.exam.questions === undefined) {
            this.exam.questions = [this.question];
        } else {
            this.exam.questions.push(this.question);
        }
        let link = ['AddQuestion', { exam: this.exam }];
        this._router.navigate(link);
    }

    addAnswer() {

    }

    complete() {

    }
}
