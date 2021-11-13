import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

interface Props {
  description: string,
  onPressItem: Function
}

const Answer: React.FC<Props> = (props) => {
  const { description, onPressItem } = props;

  const onPress = () => {
    onPressItem(description);
  };

  return (
    <TouchableOpacity
      onPress={onPress}
    >
      <View style={styles.answer}>
        <Text style={styles.answerText}>{description}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  answer: {
    flex: 1,
    alignSelf: "stretch",
    minHeight: 32,
    marginTop: 4,
    marginBottom: 4,
    opacity:.8,
    backgroundColor: "green",
    borderRadius: 8,
  },

  answerText: {
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

export default Answer;