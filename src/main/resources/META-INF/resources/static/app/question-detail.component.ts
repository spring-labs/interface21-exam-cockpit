import { Component, Input, OnInit } from 'angular2/core';
import { RouteParams } from 'angular2/router';
import { ExamService } from './exam-service';
import { Question } from './question';

@Component({
    selector: 'i21-question-detail',
    templateUrl: 'app/views/question-detail.component.html'
})
export class QuestionDetailComponent implements OnInit {

    @Input() question: Question;

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
        window.history.back();
    }
}
