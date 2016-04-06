import { Component, Input, OnInit } from 'angular2/core';
import { RouteParams } from 'angular2/router';
import { ExamService } from './exam-service';
import { Answer } from './answer';
import { QuestionService } from './question-service';

@Component({
    selector: 'i21-answer-detail',
    templateUrl: 'app/views/answer-detail.component.html'
})
export class AnswerDetailComponent implements OnInit {

    answer: Answer;
    @Input() answers: Answer[];
    @Input() id: string;

    constructor(
        private _routeParams: RouteParams,
        private _questionService: QuestionService) {
    }

    ngOnInit() {
        let id = +this._routeParams.get('id');
        //this.question = this._questionService.questions.filter(q => q.id == id)[0];
    }

    goBack() {
        window.history.back();
    }
}
