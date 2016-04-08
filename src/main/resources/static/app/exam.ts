import { Question } from './question';

export class Exam {
    id: number;
    examIdentifier: string;
    title: string;
    maxScorePoints: number;
    duration: number = 45;
    version: string;
    active: boolean;
    questions: Array<Question>;
}
