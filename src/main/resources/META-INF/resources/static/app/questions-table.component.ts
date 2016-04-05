import { Component, Input } from 'angular2/core';
import { Router } from 'angular2/router';
import { Question } from './question';
import { QuestionDetailComponent } from './question-detail.component';

@Component({
    selector: 'i21-questions-table',
    templateUrl: 'app/views/questions-table.component.html',
    directives: [QuestionDetailComponent]
})
export class QuestionsTableComponent {

    @Input() questions: Question[];
    
    constructor(
        private _router: Router
    ){}

    click(question: Question) {
        console.log("clicked: "+question.id);
        let link = ['QuestionDetail', { id: question.id }];
        this._router.navigate(link);
    }
}
