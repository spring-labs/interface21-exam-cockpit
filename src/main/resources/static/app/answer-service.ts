import { Injectable } from 'angular2/core';
import { Answer } from './answer.ts';

@Injectable()
export class AnswerService {
    answers: Answer[];   
}
