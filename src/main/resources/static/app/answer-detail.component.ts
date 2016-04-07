import { Component, Input, OnInit } from 'angular2/core';
import { RouteParams } from 'angular2/router';
import { ExamService } from './exam-service';
import { Answer } from './answer';
import { AnswerService } from './answer-service';

@Component({
    selector: 'i21-answer-detail',
    templateUrl: 'app/views/answer-detail.component.html'
})
export class AnswerDetailComponent implements OnInit {

    answer: Answer;
    id: string;

    constructor(
        private _routeParams: RouteParams,
        private _answerService: AnswerService) {
    }

    ngOnInit() {
        let id = +this._routeParams.get('id');
        this.answer = this._answerService.answers.filter(a => a.id == id)[0];
    }

    goBack() {
        window.history.back();
    }
}
