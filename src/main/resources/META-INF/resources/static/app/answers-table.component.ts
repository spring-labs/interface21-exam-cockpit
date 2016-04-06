import { Component, Input, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';
import { Answer } from './answer';
import { AnswerDetailComponent } from './answer-detail.component';

@Component({
    selector: 'i21-answers-table',
    templateUrl: 'app/views/answers-table.component.html',
    directives: [AnswerDetailComponent]
})
export class AnswersTableComponent implements OnInit {

    @Input() answers: Answer[];

    constructor(
        private _router: Router//,
        //private _questionService: QuestionService
    ) { }

    // populate model
    ngOnInit() {
        //this._questionService.questions = this.answers;
    }

    click(answer: Answer) {
        let link = ['AnswerDetail', { id: answer.id }];
        this._router.navigate(link);
    }
}
