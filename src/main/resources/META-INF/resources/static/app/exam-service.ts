import { Injectable } from 'angular2/core';
import { Exam } from './exam.ts';

import { EXAMS } from './mock-exams';

@Injectable()
export class ExamService {

    currentExam: Exam;
    
    getExams() {
        return Promise.resolve(EXAMS);
    }
}
