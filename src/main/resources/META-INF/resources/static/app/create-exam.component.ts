import {Component, OnInit} from 'angular2/core';
import {Router} from 'angular2/router';

@Component({
    selector: 'create-exam',
    templateUrl: 'app/create-exam.component.html',
    styleUrls:['app/create-exam.component.css']
})
export class CreateExamComponent implements OnInit {

    title = "Exam Details";

    constructor(
        private _router: Router
    ){}

    ngOnInit() {
    }
    
    gotoDetail() {
    }

}
