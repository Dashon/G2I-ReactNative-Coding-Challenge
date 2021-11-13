import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
} from "react-native";
import Answer from "./Answer";

const defaultProps = {
  onItemSelected: Function,
};

interface Props {
  question: String
  onItemSelected,
  options: any
}

const Question: React.FC<Props> = (props) => {
  const { onItemSelected, options, question } = props
  return (
    <View style={styles.questionContainer}>

      <View style={styles.questionData}>
        <Text style={styles.questionDescription}>{question}</Text>
      </View>

      <FlatList
        style={styles.questionAnswers}
        data={options}
        contentContainerStyle={styles.questionAnswersContainer}
        renderItem={({ item }) => (
          <Answer
            description={item}
            onPressItem={onItemSelected}
          />
        )}
        keyExtractor={(item, index) => `${index}-${item}`}
        scrollEnabled={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  questionContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 16,
    marginRight: 16,
  },

  questionData: {
    padding: 16,
    marginTop: 32,
    marginBottom: 32,
    alignSelf: "stretch",
    maxHeight: 280,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: "#ffffff",
    justifyContent: "center",
    backgroundColor: "rgba(255, 255, 255, 0.9)",
  },

  questionDescription: {
    color: "#000",
    fontSize: 20,
    textAlign: "center",
  },

  questionAnswers: {
    width: "100%",
  },
  questionAnswersContainer: {
    marginTop: 0,
  }
});

Question.defaultProps = defaultProps;
export default Question;