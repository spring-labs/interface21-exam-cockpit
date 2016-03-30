export interface Question {
    id: number;
    text: string;
    weight: number;
    questionType: string;
    answers: Array<Answer>;
}
