import { Component, Input, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';
import { Question } from './question';
import { QuestionDetailComponent } from './question-detail.component';
import { QuestionService } from './question-service';

@Component({
    selector: 'i21-questions-table',
    templateUrl: 'app/views/questions-table.component.html',
    directives: [QuestionDetailComponent]
})
export class QuestionsTableComponent implements OnInit {

    @Input() questions: Question[];

    constructor(
        private _router: Router,
        private _questionService: QuestionService
    ) { }

    // populate model
    ngOnInit() {
        this._questionService.questions = this.questions;
    }

    click(question: Question) {
        let link = ['QuestionDetail', { id: question.appid }];
        this._router.navigate(link);
    }
}
