import {Component} from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import { HeroService }     from './hero.service';
import { ExamsComponent } from './exams.component';
import { CreateExamComponent } from './create-exam.component';
import { AddQuestionComponent } from './add-question.component';

@Component({
    selector: 'my-app',
    template: `
        <nav>
            <a [routerLink]="['Exams']">View Exams</a>
            <a [routerLink]="['CreateExam']">Create Exam</a>
        </nav>
        <router-outlet></router-outlet>
    `,
    styleUrls: ['app/app.component.css'],
    directives: [ROUTER_DIRECTIVES],
    providers: [
        ROUTER_PROVIDERS,
        HeroService
    ]
})
@RouteConfig([
    {
        path: '/exams',
        name: 'Exams',
        component: ExamsComponent,
        useAsDefault: true
    },
    {
        path: '/create-exam',
        name: 'CreateExam',
        component: CreateExamComponent
    },
    {
        path: '/add-question',
        name: 'AddQuestion',
        component: AddQuestionComponent
    }
])
export class AppComponent {
}