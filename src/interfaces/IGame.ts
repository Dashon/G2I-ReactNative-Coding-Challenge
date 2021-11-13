import { IQuizQuestion } from ".";

export default interface IGame {
    questions: Array<IQuizQuestion>,
    currentQuestionIndex: number,
    totalScore: number,
    startTime: number,
    endTime: number,
    loading: boolean,
    error: any,
    selectedDifficulty: string,
    numberOfQuestions: number
}