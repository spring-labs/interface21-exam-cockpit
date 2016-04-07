import { Component } from 'angular2/core';
import { Router } from 'angular2/router';
import { Exam } from './exam'
import { ExamService } from './exam-service';
import { Question } from './question';

@Component({
    selector: 'create-exam',
    templateUrl: 'app/views/create-exam.component.html'
})
export class CreateExamComponent {

    title = "Exam Details";
    exam: Exam = new Exam;

    constructor(
        private _examService: ExamService,
        private _router: Router
    ) { }

    addQuestion(exam: Exam) {
        this.exam.questions = [new Question];
        this._examService.currentExam = this.exam;
        let link = ['AddQuestion'];
        this._router.navigate(link);
    }
}
