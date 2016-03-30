export interface Question {
    id: number;
    text: string;
    weight: string;
    questionType: string;
    answers: Array<Answer>;
}
