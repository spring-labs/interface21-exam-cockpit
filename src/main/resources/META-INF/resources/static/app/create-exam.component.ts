import {Component, OnInit} from 'angular2/core';
import {Router} from 'angular2/Router';

@Component({
    selector: 'create-exam',
    templateUrl: 'app/create-exam.component.html',
    styleUrls:['app/create-exam.component.css']
})
export class CreateExamComponent implements OnInit {


    constructor(
        private _router: Router,
        private _heroService: HeroService
    ){}

    ngOnInit() {
        this.getHeroes();
    }
    
    gotoDetail() {
        this._router.navigate(['HeroDetail', { id: this.selectedHero.id }]);
    }

    getHeroes() {
        this._heroService.getHeroes().then(heroes => this.heroes = heroes);
    }

    onSelect(hero: Hero) { this.selectedHero = hero; }
}
