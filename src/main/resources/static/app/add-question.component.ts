import { Component, Input, OnInit } from 'angular2/core';
import { RouteConfig, Router, RouteParams } from 'angular2/router';

import { Exam } from './exam';
import { Question } from './question';
import { QuestionType } from './questionType';

import { ExamService } from './exam-service';

@Component({
    selector: 'add-question',
    templateUrl: 'app/views/add-question.component.html'
})
export class AddQuestionComponent implements OnInit {

    title = "Question";

    @Input() exam: Exam;
    question: Question;
    moreQuestionsAllowed: boolean = true;
    isNextHidden: boolean = true;

    constructor(
        private _examService: ExamService,
        private _router: Router,
        private _routeParams: RouteParams
    ){
        this.question = new Question;
    }

    ngOnInit() {
        this.exam = this._examService.currentExam;
    }
    
    routerOnActivate(nextInstruction, prevInstruction) {
        if (this.question.answers !== undefined && this.question.answers.length > 0) {
            this.isNextHidden = true;
        }
     }
    
    addQuestion() {
        if (this.exam.questions === undefined) {
            this.exam.questions = [this.question];
        } else {
            this.exam.questions.push(this.question);
        }
    }
    
    newQuestion() {
        this.addQuestion();
        this.question = new Question;
        let link = ['AddQuestion', { exam: this.exam }];
        this._router.navigate(link);
    }

    addAnswer() {
        this.addQuestion();
        let link = ['AddAnswer', { question: this.question }];
        this._router.navigate(link);
    }

    complete() {

    }
}
