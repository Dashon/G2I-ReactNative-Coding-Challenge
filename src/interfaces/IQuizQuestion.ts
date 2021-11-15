/**
* interface for quiz questions
*/
export interface IQuizQuestion {
    type: String,
    difficulty: String,
    question: String,
    correct_answer: String,
    options: Array<String>,
    incorrect_answers: Array<String>,
    user_correct: boolean
}