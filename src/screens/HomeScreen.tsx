import React from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Button } from "./components";
import { useActions } from "../hooks";

const BACKGROUND_IMAGE = require("../../assets/images/zoom_out.jpeg");

const HomeScreen = () => {
  const { showGameSettings } = useActions();
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.imageBackground}
        source={BACKGROUND_IMAGE}
        resizeMode="cover"
      >
        {<View style={styles.gameNameContainer}>
          <Text style={styles.gameName}> G2i Trivia Game</Text>
        </View>
        }
        <Button style={styles.goButton} onPress={showGameSettings}>
          Go Play!
          </Button>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
  },
  gameNameContainer: {
    flex: 1,
    marginTop: 60,
    alignSelf: "center",
    justifyContent: "flex-start",
  },
  gameName: {
    color: "white",
    fontSize: 50,
    fontWeight: "bold",
    opacity: .8
  },
  goButton: {
    marginBottom: 10,
    backgroundColor: "green"
  },
  imageBackground: {
    flex: 1,
    height: "100%",
    width: "100%",
    justifyContent: "flex-end",
  },
});

export default HomeScreen;