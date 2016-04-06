import { Component, Input, OnInit } from 'angular2/core';
import { RouteParams } from 'angular2/router';
import { ExamService } from './exam-service';
import { Question } from './question';
import { QuestionType } from './questionType';
import { QuestionService } from './question-service';
import { AnswersTableComponent } from './answers-table.component';

@Component({
    selector: 'i21-question-detail',
    templateUrl: 'app/views/question-detail.component.html',
    directives: [AnswersTableComponent]
})
export class QuestionDetailComponent implements OnInit {

    question: Question;
    @Input() questions: Question[];
    @Input() id: string;

    constructor(
        private _routeParams: RouteParams,
        private _questionService: QuestionService) {
    }

    ngOnInit() {
        let id = +this._routeParams.get('id');
        this.question = this._questionService.questions.filter(q => q.id == id)[0];
    }
    
    showTypeCombo() : boolean {
        return this.question.dtype === QuestionType.MULTIPLE || this.question.dtype === QuestionType.SINGLE;
    }

    goBack() {
        window.history.back();
    }
}
