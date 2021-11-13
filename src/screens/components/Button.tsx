import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

const defaultProps = {
  style: {},
  onPress: () => { },
};

const Button = ({ onPress, children, style }) => {
  const { buttonStyle, textStyle } = styles;

  return (
    <TouchableOpacity onPress={onPress} style={[buttonStyle, style]}>
      <Text style={textStyle}>{children}</Text>
    </TouchableOpacity>
  )

};

const styles = StyleSheet.create({
  textStyle: {
    padding: 12,
    color: "#ffffff",
    fontSize: 24,
    fontWeight: "normal",
    textAlign: "center",
    textShadowColor: "#000000",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 0,
  },
  buttonStyle: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: 60,
    alignSelf: "stretch",
    minHeight: 32,
    margin: 10,
    backgroundColor: "rgba(64, 64, 255, 0.8)",
    borderRadius: 8,
  },
});

Button.defaultProps = defaultProps;

export default Button;