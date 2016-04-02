import { Injectable } from 'angular2/core';
import { Exam } from './exam.ts';

@Injectable()
export class ExamService {

    _exam: Exam;
    
    getExams() {
        return Promise.resolve("test");
    }
    
    setCurrentExam(exam: Exam) {
        this.exam = exam;
    }

    getCurrentExam() {
        return this.exam;
    }
}
