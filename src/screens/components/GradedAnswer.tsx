import React from "react";
import {
  View,
  Text,
  StyleSheet,
} from "react-native";

interface Props {
  question: String
  isCorrect: boolean
}
const GradedAnswer: React.FC<Props> = (props) => {
  const { question, isCorrect } = props;

  let bgColor = "#FF2020";
  if (isCorrect)
    bgColor = "#14AB00";

  return (
    <View>
      <View style={[styles.gradedAnswer, { backgroundColor: bgColor }]}>
        <Text style={styles.questionText}>{question}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  gradedAnswer: {
    flex: 1,
    alignSelf: "stretch",
    minHeight: 32,
    marginTop: 4,
    marginBottom: 4,
    borderRadius: 8,
  },
  questionText: {
    flex: 1,
    padding: 12,
    color: "#ffffff",
    fontSize: 24,
    fontWeight: "normal",
    textAlign: "center",
    textShadowColor: "#000000",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 0,
  },
});

export default GradedAnswer;