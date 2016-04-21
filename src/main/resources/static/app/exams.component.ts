import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';

import { Exam } from './exam';
import { ExamService } from './exam-service';

@Component({
    selector: 'view-exams',
    templateUrl: 'app/views/exams.component.html',
    styleUrls: ['app/views/css/exams.component.css']
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
                       exams => this.exams = <any>exams);
    }

    gotoDetail(exam: Exam) {
        let link = ['ExamDetail', { id: exam.appid }];
        this._router.navigate(link);
    }
}
