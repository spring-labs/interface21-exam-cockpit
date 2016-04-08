import { Injectable } from 'angular2/core';
import { Question } from './question';

@Injectable()
export class QuestionService {

    currentQuestion: Question = new Question;
    questions: Question[];   
}
