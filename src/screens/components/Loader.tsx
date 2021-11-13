import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
} from "react-native";
import LottieView from "lottie-react-native";
import Button from "./Button";
import LOADING_GRAPHIC from "../../../assets/animations/78259-loading.json"
import ERROR_GRAPHIC from "../../../assets/animations/38463-error.json"

const BACKGROUND_IMAGE = require("../../../assets/images/zoom_out.jpeg");
const BACKGROUND_IMAGE_ACTIVE = require("../../../assets/images/zoom_in.jpeg");

const defaultProps = {
  error: false,
  loading: false,
  loadingText: "",
  onRetryPressed:Function
};

interface Props {
  loading: boolean,
  error: boolean,
  loadingText: string,
  onRetryTouched: Function
}
const Loader: React.FC<Props> = (props) => {

  const { loading, error, loadingText, onRetryTouched } = props;
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.imageBackground}
        source={(loading || error) ? BACKGROUND_IMAGE : BACKGROUND_IMAGE_ACTIVE}
        resizeMode="cover"
      >
        {(loading || error) ? (
          (loading) ? (
            <View style={styles.loaderContainer}>
              <LottieView
                style={styles.loaderAnimation}
                source={LOADING_GRAPHIC}
                autoPlay
                loop
              />
              <Text style={styles.loaderText}>{loadingText}</Text>
            </View>
          ) : (
            <View style={styles.loaderContainer}>
              <LottieView
                style={styles.errorAnimation}
                source={ERROR_GRAPHIC}
                autoPlay
                loop
              />
              <Text style={styles.errorText}>Network Error</Text>
              <Button onPress={onRetryTouched}>
                Try Again
                </Button>
            </View>
          )
        ) : (
          props.children
        )}
      </ImageBackground>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 0,
  },
  loaderContainer: {
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
    backgroundColor: "rgba(255, 255, 255, 0.9)",
  },
  loaderAnimation: {
    width: 200,
    height: 200
  },
  errorAnimation: {
    width: 100,
    height: 100
  },
  loaderText: {
    fontSize: 30,
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
    color: "#00AA38"
  },
  errorText: {
    fontSize: 30,
    color: "#FF4423",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
    marginBottom: 10,
  },
  imageBackground: {
    flex: 1,
    height: "100%",
    width: "100%",
    flexDirection: "column",
    justifyContent: "space-between",
  },
});

Loader.defaultProps = defaultProps;
export default Loader;