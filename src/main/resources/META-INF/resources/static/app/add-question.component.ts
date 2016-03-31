import { Component, Input, OnInit } from 'angular2/core';
import { RouteConfig, Router, RouteParams } from 'angular2/router';

import { Exam } from './exam';
import { Question } from './question';
import { QuestionType } from './questionType';

@Component({
    selector: 'add-question',
    templateUrl: 'app/views/add-question.component.html'
})
export class AddQuestionComponent implements OnInit {

    title = "Add Question";

    @Input() exam: Exam;
    question: Question = {};
    moreQuestionsAllowed: boolean = true;

    constructor(
        private _router: Router,
        private _routeParams: RouteParams
    ){}

    ngOnInit() {
        this.exam = this._routeParams.get('exam');
    }
    
    addQuestion() {
        if (this.exam.questions === undefined) {
            this.exam.questions = [this.question];
        } else {
            this.exam.questions.push(this.question);
        }
        this.question = null;
    }
    
    newQuestion() {
        this.addQuestion();
        let link = ['AddQuestion', { exam: this.exam }];
        this._router.navigate(link);
    }

    addAnswer() {
        this.addQuestion();
        let link = ['AddAnswer', { exam: this.exam }];
        this._router.navigate(link);
    }

    complete() {

    }
}
