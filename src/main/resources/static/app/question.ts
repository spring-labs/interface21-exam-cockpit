import { Answer } from './answer';
import { QuestionType } from './questionType';

export class Question {
    id: number; // make private when binding to backend
    appid: number;
    text: string;
    order: number;
    scorePoints: number;
    dtype: string = "MULTIPLE"; // use enum instead!!
    answers: Array<Answer>;
    
    constructor(){
        this.appid = Math.floor(Math.random() * 1000);
    }
}
