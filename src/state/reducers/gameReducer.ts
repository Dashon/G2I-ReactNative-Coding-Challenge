import { ActionType } from '../actions';

import IGame from "../../interfaces/IGame";

const INITIAL_STATE: IGame = {
  questions: [],
  currentQuestionIndex: 0,
  totalScore: 0,
  startTime: 0,
  endTime: 0,
  loading: true,
  error: true,
  selectedDifficulty: "easy",
  numberOfQuestions: 10
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionType.MAIN_MENU:
      return INITIAL_STATE;
    case ActionType.SHOW_GAME_SETTINGS:
      return { ...INITIAL_STATE, loading: false };
    case ActionType.START_GAME:
      return {
        ...state,
        selectedDifficulty: (action.payload.difficulty) ? action.payload.difficulty : state.selectedDifficulty,
        numberOfQuestions: (action.payload.numberOfQuestions) ? action.payload.numberOfQuestions : state.numberOfQuestions,
        currentQuestionIndex: 0,
        totalScore: 0,
        loading: true,
      };
    case ActionType.QUESTION_FETCH_SUCCESS:
      return {
        ...state,
        questions: action.payload,
        startTime: (new Date).getTime(),
        loading: false,
        error: "",
      };
    case ActionType.QUESTION_FETCH_ERROR:
      return {
        ...state,
        startTime: (new Date).getTime(),
        loading: false,
        error: true,
      };
    case ActionType.USER_CORRECT:
      const questions = state.questions;
      questions[action.payload.currentQuestionIndex].user_correct = true;
      return {
        ...state,
        questions
      };
    case ActionType.NEXT_QUESTION:
      return {
        ...state,
        currentQuestionIndex: action.payload.currentQuestionIndex,
        totalScore: action.payload.totalScore,
      };
    case ActionType.GAME_OVER:
      return {
        ...state,
        totalScore: action.payload,
        endTime: (new Date).getTime(),
      };
    default:
      return state;
  }
};