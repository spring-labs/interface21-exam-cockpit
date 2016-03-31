import { Answer } from './answer';
import { QuestionType } from './questionType';

export interface Question {
    id: number;
    text: string;
    weight: number;
    dtype: QuestionType;
    answers: Array<Answer>;
}
