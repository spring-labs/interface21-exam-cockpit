import { Component, Input } from 'angular2/core';
import { Question } from './question';
import { QuestionDetailComponent } from './question-detail.component';

@Component({
    selector: 'i21-questions-table',
    templateUrl: 'app/views/questions-table.component.html',
    directives: [QuestionDetailComponent]
})
export class QuestionsTableComponent {

    @Input() questions: Question[];
}
