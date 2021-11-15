import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
} from "react-native";
import { AnswerValidator, Loader, Button, Question } from "./components";
import { useActions, useSelector } from "../hooks";

/**
* screen to display a game in progress
*/
const GamePlay = () => {
  const [answerStatus, setAnswerStatus] = useState(false);
  const [isCorrect, setIsCorrect] = useState(true);
  const { fetchTriviaQuestions, startGame, nextQuestion, showGameSettings } = useActions();
  const { totalScore,
    questions,
    selectedDifficulty,
    numberOfQuestions,
    currentQuestionIndex,
    loading,
    error } = useSelector((state) => state.game);

  const currentQuestion = questions[currentQuestionIndex];
  const currentQuestionNumber = currentQuestionIndex + 1;
  const totalQuestionsSize = questions.length;

  useEffect(() => {
    fetchTriviaQuestions(
      "boolean",
      selectedDifficulty,
      numberOfQuestions
    );
  }, []);


  const handleAnswerSelection = (userAnswer: string) => {
    if (answerStatus) return;

    setAnswerStatus(true);
    setIsCorrect(userAnswer === currentQuestion.correct_answer);

    setTimeout(function () {
      setAnswerStatus(false);
      nextQuestion(
        userAnswer,
        currentQuestionIndex,
        questions,
        totalScore
      );
    },
      2000);
  };

  return (
    <Loader
      loading={loading}
      error={error}
      loadingText="Loading Questions..."
      onRetryTouched={() => startGame()}
    >
      {(answerStatus) &&
        <View style={styles.answerStatus}>
          <AnswerValidator
            isCorrect={isCorrect}
          />
        </View>
      }
      {(questions.length === 0) ? (
        <View style={styles.container}>
          <View style={styles.headerContainer}>
            <Text style={styles.headerTitle}>No Quiz Available</Text>
          </View>
          <Button onPress={showGameSettings}>
            Try Again
            </Button>
        </View>
      ) : (
        <View style={styles.container}>
          <View style={styles.headerContainer}>
            <Text style={styles.headerTitle}>Question {currentQuestionNumber}/{totalQuestionsSize}</Text>
          </View>
          <Question
            question={currentQuestion.question}
            options={currentQuestion.options}
            onItemSelected={handleAnswerSelection}
          />
        </View>
      )}
    </Loader>
  );
}

const styles = StyleSheet.create({
  answerStatus: {
    position: "absolute",
    width: "100%",
    height: "100%",
    zIndex: 9999
  },
  noDataText: {
    fontSize: 20,
    padding: 10,
    textAlign: "justify",
  },
  container: {
    flex: 1,
    paddingTop: 0,
  },
  headerContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingRight: 24,
    paddingLeft: 24,
    paddingTop: 12,
    paddingBottom: 12,
    opacity: .8,
    margin: 8,
    marginTop: 36,
  },
  headerTitle: {
    color: "#ffffff",
    fontSize: 28,
    fontWeight: "900",
  }
});
export default GamePlay;