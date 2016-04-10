import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';
import { HTTP_PROVIDERS, Http, Response } from 'angular2/http';

import { Exam } from './exam';
import { ExamService } from './exam-service';

@Component({
    selector: 'view-exams',
    templateUrl: 'app/views/exams.component.html',
    styleUrls: ['app/views/css/exams.component.css'],
    providers: [HTTP_PROVIDERS]
})
export class ExamsComponent implements OnInit {

    exams: Exam[] = [];

    constructor(
        private _router: Router,
        private _examService: ExamService
    ){}

    ngOnInit() {
        this._examService.getExams()
                     .subscribe(
                       exams => this.exams = exams);
    }

    gotoDetail(exam: Exam) {
        let link = ['ExamDetail', { id: exam.appid }];
        this._router.navigate(link);
    }
}
