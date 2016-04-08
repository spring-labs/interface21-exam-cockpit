import { Injectable } from 'angular2/core';
import { Exam } from './exam.ts';

import { EXAMS } from './mock-exams';

@Injectable()
export class ExamService {

    currentExam: Exam;
    
    getExams() {
        return Promise.resolve(EXAMS);
    }

    getExam(id: number) {
        return Promise.resolve(EXAMS).then(
            exams => exams.filter(exam => exam.appid === id)[0]
        );
    }
    
    save(exam: Exam) {
        return Promise.resolve(EXAMS).then(
            exams => exams.filter(e => e.appid === exam.appid)[0] = exam
        );
    }
}
