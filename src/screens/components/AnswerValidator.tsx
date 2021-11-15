import React from "react";
import {
  View,
  Text,
  StyleSheet,
} from "react-native";
import LottieView from "lottie-react-native";
import INCORRECT_GRAPHIC from "../../../assets/animations/33620-wrong-notif.json"
import CORRECT_GRAPHIC from "../../../assets/animations/33621-notif-correct.json"

/**
* component to display validated answer results
*/
interface Props {
  isCorrect: boolean
}
const AnswerValidator: React.FC<Props> = (props) => {
  let animation;
  let statusMessages: Array<string>;
  let statusStyle;

  if (props.isCorrect) {
    animation = CORRECT_GRAPHIC;
    statusMessages = ["Que Bueno!", "Oh Yeah!", "You da monkey!", "Yes!!!!"];
    statusStyle = styles.correctText;
  }
  else {
    animation = INCORRECT_GRAPHIC;
    statusMessages = ["No, Bueno!", "Well That Sucks!", "Bad Monkey", "Do Better!"];
    statusStyle = styles.errorText;
  }

  const randomStatusMessage = statusMessages.sort(function () { return 0.5 - Math.random() })[0];

  return (<View style={styles.statusContainer}>
    <Text style={[styles.statusText, statusStyle]}> {randomStatusMessage} </Text>
    <LottieView style={styles.statusAnimation}
      source={animation}
      autoPlay={true}
      loop={false}
    />
  </View>
  )
}

const styles = StyleSheet.create({
  statusContainer: {
    flex: 1,
    height: "100%",
    width: "100%",
    paddingTop: 0,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: "#ffffff",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: "rgba(255, 255, 255, 1)",
  },
  statusAnimation: {
    width: 300,
    height: 300
  },
  statusText: {
    fontSize: 40,
    textShadowRadius: 10,
    marginTop: -60,
    marginBottom: 30
  },
  correctText: {
    color: "#00C871"
  },
  errorText: {
    color: "#FF1122"
  },
  timeoutText: {
    color: "#FFAA38"
  },
});
export default AnswerValidator;