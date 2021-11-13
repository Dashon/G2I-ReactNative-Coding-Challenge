import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet
} from "react-native";
import SegmentedControlTab from "react-native-segmented-control-tab";
import {Button} from "./components";
import { useActions } from "../hooks";

const DIFFICULTIES = ["easy", "medium", "hard"];
const QUESTION_COUNTS = [10, 20, 30];

const SettingsScreen = () => {
  const [questionDifficulty, setQuestionDifficulty] = useState(0);
  const [questionCount, setQuestionCount] = useState(0);
  const { startGame } = useActions();

  const handleStartGame = () => {
    startGame(
      "boolean",
      DIFFICULTIES[questionDifficulty],
      QUESTION_COUNTS[questionCount]
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <View style={styles.container}>
          <Text style={styles.gameTitle}>Settings</Text>
        </View>
        <View style={styles.separator} />
        <Text style={styles.headerText}>Difficulty</Text>
        <SegmentedControlTab
          selectedIndex={questionDifficulty}
          values={DIFFICULTIES}
          tabStyle={styles.tabStyle}
          activeTabStyle={styles.activeTabStyle}
          onTabPress={setQuestionDifficulty}
        />
        <View style={styles.separator} />
        <Text style={styles.headerText}>Select Question Count</Text>
        <SegmentedControlTab
          selectedIndex={questionCount}
          tabStyle={styles.tabStyle_2}
          activeTabStyle={styles.activeTabStyle_2}
          values={QUESTION_COUNTS}
          onTabPress={setQuestionCount}
        />
        <View style={styles.separator} />
        <Button style={styles.goButton} onPress={handleStartGame}>
          Start Quiz
            </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  gameTitle: {
    color: "#000000",
    fontSize: 60
  },
  gameTitleContainer: {
    textAlign: "center"
  },
  goButton: {
    marginBottom: 10,
    backgroundColor: "green"
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    backgroundColor: "#FFFFFFDD",
    width: "100%",
    height: "100%"
  },
  parentContainer: {
    flex: 1,
    width: "100%",
    height: "100%"
  },
  tabViewText: {
    color: "#444444",
    fontWeight: "bold",
    marginTop: 50,
    fontSize: 18,
  },
  titleText: {
    color: "#444444",
    padding: 20,
    fontSize: 14,
    fontWeight: "500",
  },
  headerText: {
    padding: 8,
    fontSize: 24,
    color: "#444444",
  },
  tabContent: {
    color: "#444444",
    fontSize: 18,
    margin: 24,
  },
  separator: {
    marginHorizontal: -10,
    alignSelf: "stretch",
    borderTopWidth: 1,
    borderTopColor: "#888888",
    marginTop: 24,
  },
  tabStyle: {
    borderColor: "green",
    paddingHorizontal: 10,
  },
  activeTabStyle: {
    backgroundColor: "green",
  },
  tabStyle_2: {
    borderColor: "blue",
    paddingHorizontal: 10,
  },
  activeTabStyle_2: {
    backgroundColor: "blue",
  },
  tabTextStyle: {
    color: "#D52C43",
  },
});

export default SettingsScreen;