import { Injectable } from 'angular2/core';
import { Question } from './question.ts';

@Injectable()
export class QuestionService {

    currentQuestion: Question;
    questions: Question[];    
}
