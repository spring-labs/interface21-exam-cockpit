import { Question } from './question';

export class Exam {
    id: number; // make private when binding to backend
    appid: number;
    examIdentifier: string;
    title: string;
    maxScorePoints: number;
    duration: number = 45;
    version: string;
    active: boolean;
    questions: Array<Question>;

    constructor(){
        this.appid = Math.floor(Math.random() * 1000);
    }
}
