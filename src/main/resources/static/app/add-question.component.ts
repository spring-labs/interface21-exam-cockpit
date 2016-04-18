import { Component, Input, OnInit } from 'angular2/core';
import { RouteConfig, Router, RouteParams } from 'angular2/router';

import { Exam } from './exam';
import { Question } from './question';
import { Answer } from './answer';
import { QuestionType } from './questionType';

import { QuestionService } from './question-service';
import { ExamService } from './exam-service';
import { AnswerService } from './answer-service';

import { AnswersTableComponent } from './answers-table.component';

@Component({
    selector: 'add-question',
    templateUrl: 'app/views/add-question.component.html',
    directives: [AnswersTableComponent]
})
export class AddQuestionComponent implements OnInit {

    title = "Question";

    exam: Exam;
    question: Question;
    noAnswersSet: boolean = true;

    constructor(
        private _examService: ExamService,
        private _questionService: QuestionService,
        private _answerService: AnswerService,
        private _router: Router,
        private _routeParams: RouteParams
    ){
        // initialize for data binding
        this.question = new Question;
    }

    // initialize from model 
    ngOnInit() {
        this.exam = this._examService.currentExam;
        this.question = this._questionService.currentQuestion;
        this.noAnswersSet = this.question.answers === undefined || this.question.answers.length === 0;
    }
    
    addQuestion() {
        if (this.exam.questions === undefined) {
            this.exam.questions = [this.question];
        } else {
            this.exam.questions.push(this.question);
        }
    }

    addAnswer() {
        this.addQuestion()
        this._answerService.currentAnswer = this.question.dtype == 'TEXTUAL' ? new Answer('TEXTUAL') : new Answer('CHECKABLE');
        this._questionService.currentQuestion = this.question;
        let link = ['AddAnswer'];
        this._router.navigate(link);
    }

    save() {
        this._examService.currentExam = this.exam
        this._examService.currentExam.questions.push(this.question)
        this.gotoHome()
    }

    private gotoHome() {
        let link = ['ExamDetail', { id: this._examService.currentExam.appid }];
        this._router.navigate(link);
    }
}
