import { Component, Input, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';
import { Answer } from './answer';
import { AnswerDetailComponent } from './answer-detail.component';
import { AnswerService } from './answer-service';

@Component({
    selector: 'i21-answers-table',
    templateUrl: 'app/views/answers-table.component.html',
    directives: [AnswerDetailComponent]
})
export class AnswersTableComponent implements OnInit {

    @Input() answers: Answer[];
    @Input() removable: boolean;

    constructor(
        private _router: Router,
        private _answerService: AnswerService
    ) { }

    // populate model
    ngOnInit() {
        this._answerService.answers = this.answers;
    }

    click(answer: Answer) {
        this._answerService.removable = this.removable;
        this._answerService.answers = this.answers;
        let link = ['AnswerDetail', { id: answer.appid }];
        this._router.navigate(link);
    }
}
