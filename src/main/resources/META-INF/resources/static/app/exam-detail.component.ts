import { Component, Input, OnInit } from 'angular2/core';
import { RouteParams } from 'angular2/router';
import { ExamService } from './exam-service';
import { Exam } from './exam';
import { QuestionDetailComponent } from './question-detail.component';

@Component({
    selector: 'i21-exam-detail',
    templateUrl: 'app/views/exam-detail.component.html',
    directives: [QuestionDetailComponent]
})
export class ExamDetailComponent implements OnInit {

    @Input() exam: Exam;
    title: string;

    constructor(
        private _examService: ExamService,
        private _routeParams: RouteParams) {
    }

    ngOnInit() {
        let id = +this._routeParams.get('id');
        this._examService.getExam(id)
            .then(e => {
                this.exam = e;
                this.title = e.examIdentifier;
            });
    }

    goBack() {
        this._examService.getExam(this.exam.id)
            .then(e => {
                this.exam = e;
                this.title = e.examIdentifier;
                window.history.back();
            });
    }

    save() {
        this._examService.save(this.exam)
            .then(e => {
                this.exam = e;
                this.goBack();
            });
    }
}
