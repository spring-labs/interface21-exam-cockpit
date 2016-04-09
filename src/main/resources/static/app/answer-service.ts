import { Injectable } from 'angular2/core';
import { Answer } from './answer.ts';

@Injectable()
export class AnswerService {
    currentAnswer: Answer;
    answers: Answer[];   
    
    // whether the selected answer can be removed or not
    removable:boolean;
}
