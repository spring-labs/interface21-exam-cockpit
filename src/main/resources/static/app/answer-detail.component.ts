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
    removable: boolean;

    constructor(
        private _routeParams: RouteParams,
        private _answerService: AnswerService) {
    }

    ngOnInit() {
        this.removable = this._answerService.removable;
        let id = +this._routeParams.get('id');
        this.answer = this._answerService.answers.filter(a => a.appid == id)[0];
    }

    goBack() {
        window.history.back();
    }
    
    remove() {
        // todo remove from question...not nice here
    }
}
