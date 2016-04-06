import { Answer } from './answer';
import { QuestionType } from './questionType';

export interface Question {
    id: number;
    text: string;
    order: number;
    weight: number;
    dtype: string;
    answers: Array<Answer>;
}
