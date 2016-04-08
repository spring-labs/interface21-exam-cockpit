import { Component, Input, OnInit } from 'angular2/core';
import { RouteConfig, Router, RouteParams } from 'angular2/router';

import { Answer } from './answer';
import { Exam } from './exam';
import { Question } from './question';

import { AnswerService } from './answer-service';
import { QuestionService } from './question-service';

@Component({
    selector: 'add-answer',
    templateUrl: 'app/views/add-answer.component.html'
})
export class AddAnswerComponent implements OnInit {

    title = "Answer";

    @Input() question: Question;
    answer: Answer;

    constructor(
        private _router: Router,
        private _answerService: AnswerService,
        private _questionService: QuestionService,
        private _routeParams: RouteParams
    ) { }

    ngOnInit() {
        this.question = this._questionService.currentQuestion;
        this.answer = this._answerService.currentAnswer;
    }

    add() {
        if (this.question.answers === undefined) {
            this.question.answers = [this.answer];
        } else {
            this.answer.order=this.question.answers.length+1;
            this.question.answers.push(this.answer);
        }
        this._questionService.currentQuestion = this.question;
        this.gotoAddQuestion();
    }

    remove() {
        this.gotoAddQuestion();
    }
    
    private gotoAddQuestion() {
        let link = ['AddQuestion'];
        this._router.navigate(link);
    }
}
