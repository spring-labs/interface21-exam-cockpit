import { Component, Input, OnInit } from 'angular2/core';
import { RouteParams } from 'angular2/router';
import { ExamService } from './exam-service';
import { Exam } from './exam';
import { QuestionsTableComponent } from './questions-table.component';

@Component({
    selector: 'i21-exam-detail',
    templateUrl: 'app/views/exam-detail.component.html',
    directives: [QuestionsTableComponent]
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
        if (id !== undefined) {
            this._examService.getExam(id)
                .subscribe(e => {
                    this.exam = e; this.title = e.examIdentifier;
                },
                error => {
                    this.exam = this._examService.currentExam.appid === id ? this._examService.currentExam : undefined;
                });
        }
    }

    goBack() {
        this._examService.getExam(this.exam.appid)
            .subscribe(e => {
                this.exam = e;this.title = e.examIdentifier;
                window.history.back();
            });
    }

    save() {
        this._examService.save(this.exam)
            .subscribe(exam => {
                this.exam = exam; this.goBack();});
    }
}
