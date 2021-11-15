import { Actions } from "react-native-router-flux";
import { AllHtmlEntities as entities } from "html-entities";
import { ActionType } from './';
import * as OpentDbAPI from "../../services/OpentDbAPI";
import { IQuizQuestion } from "../../interfaces/IQuizQuestion";


/**
* action to fetch trivia data
*/
export const fetchTriviaQuestions = (gameType:string, difficulty:string, questionCount:number) => {
  return (dispatch) => {
    OpentDbAPI.getTriviaQuestions(questionCount, gameType, difficulty).then((questions) => {
      const formatedQuestions: Array<IQuizQuestion> = questions.map(
        question => {
          let options = question.incorrect_answers;
          options.push(question.correct_answer);

          return {
            options: options.map(option => entities.decode(option)),
            difficulty: question.difficulty,
            type: question.type,
            correct_answer: entities.decode(question.correct_answer),
            question: entities.decode(question.question),
            user_correct: false
          }
        }
      );
      dispatch({ type: ActionType.QUESTION_FETCH_SUCCESS, payload: formatedQuestions });
    }).catch(function () {
      dispatch({ type:ActionType.QUESTION_FETCH_ERROR });
    });
  }
};

export const nextQuestion = (userAnswer: string, currentQuestionIndex: number, questions: Array<IQuizQuestion>, totalScore: number) => {

  return (dispatch) => {
    const nextIndex = currentQuestionIndex + 1;
    let totalQuestionsSize = questions.length;

    if (userAnswer === questions[currentQuestionIndex].correct_answer) {
      totalScore += 1;
      dispatch({ type: ActionType.USER_CORRECT, payload: { currentQuestionIndex } });
    }

    if (nextIndex < totalQuestionsSize) {
      dispatch({ type: ActionType.NEXT_QUESTION, payload: { currentQuestionIndex: nextIndex, totalScore } });
    }
    else {
      dispatch({ type: ActionType.GAME_OVER, payload: totalScore });
      Actions.gameOver({ type: "reset" });
    }
  }
};

export const startGame = (type = "boolean", difficulty = "hard", numberOfQuestions = 10) => {
  return (dispatch) => {
    dispatch({ type: ActionType.START_GAME, payload: { type, difficulty, numberOfQuestions } });
    Actions.gamePlay({ type: "reset" });
  }
};

export const showGameSettings = () => {
  return (dispatch) => {
    dispatch({ type: ActionType.SHOW_GAME_SETTINGS });
    Actions.gameSettings({ type: "reset" });
  }
};

export const goToHome = () => {

  return (dispatch) => {
    dispatch({ type: ActionType.MAIN_MENU });
    Actions.home({ type: "reset" });
  }
};