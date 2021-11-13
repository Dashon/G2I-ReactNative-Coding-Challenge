import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  FlatList,
} from "react-native";
import { Button, GradedAnswer } from "./components";
import { useActions, useSelector } from "../hooks";

const BACKGROUND_IMAGE = require("../../assets/images/zoom_out.jpeg");

const ResultsScreen = () => {
  const { showGameSettings, goToHome } = useActions();
  const { totalScore, questions } = useSelector((state) => state.game);

  const totalQuestionsNumber = questions.length;
  const scorePercent = totalScore / totalQuestionsNumber;

  let scoreColor;
  if (scorePercent >= 0.8) {
    scoreColor = "#14AB00";
  } else if (scorePercent > 0.5) {
    scoreColor = "#8f61f9";
  } else {
    scoreColor = "#FF2020";
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.imageBackground}
        source={BACKGROUND_IMAGE}
        resizeMode="cover"
      >
        {(
          <View style={styles.gameOverData}>
            <View style={styles.gameOverTop}>
              <Text style={styles.gameOverTitle}>You Scored</Text>
              <Text style={[styles.gameScoreText, { color: scoreColor }]}>
                {totalScore} / {totalQuestionsNumber}
              </Text>
              <View style={styles.separator} />
            </View>
            <FlatList
              style={styles.questionOptions}
              data={questions}
              contentContainerStyle={styles.questionOptionsContainer}
              renderItem={({ item }) => (
                <GradedAnswer
                  question={item.question}
                  isCorrect={item.user_correct}
                />
              )}
              keyExtractor={(item, index) => `${index}-${item}`}
              scrollEnabled={true}
            />
            <View style={styles.gameOverBottom}>
              <View style={styles.separator} />

              <Button onPress={showGameSettings}>Play Again</Button>
              <Button style={styles.HomeButton} onPress={goToHome}>
                Back to Main Menu
                  </Button>
            </View>
          </View>
        )}
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  questionOptionsContainer: {
    marginTop: 0,
  },
  questionOptions: {
    width: "100%",
    marginTop: 10,
    marginBottom: 10
  },
  imageBackground: {
    flex: 1,
    height: 0,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgb(255, 255, 255)",
  },
  separator: {
    marginHorizontal: -10,
    alignSelf: "stretch",
    borderTopWidth: 1,
    borderTopColor: "#888888",
    marginTop: 5,
  },
  gameOverData: {
    padding: 16,
    marginTop: 32,
    marginBottom: 32,
    alignSelf: "stretch",
    alignItems: "center",
    borderWidth: 2,
    borderRadius: 8,
    borderColor: "#ffffff",
    justifyContent: "center",
    backgroundColor: "rgba(255, 255, 255, 0.9)",
  },
  gameOverTop: {
    marginTop: 100,
    alignSelf: "stretch",
    alignItems: "center",
    justifyContent: "center",
  },
  gameOverBottom: {
    alignSelf: "stretch",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 50
  },
  gameOverTitle: {
    color: "#000000",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
    fontSize: 50,
    marginBottom: -40,
    zIndex: 9999,
  },
  gameScoreText: {
    fontWeight: "900",
    fontSize: 32,
    marginTop: 30,
    marginBottom: 5,
  },
  HomeButton: {
    marginBottom: 50,
    backgroundColor: "#DC143C",
  },
});

export default ResultsScreen;