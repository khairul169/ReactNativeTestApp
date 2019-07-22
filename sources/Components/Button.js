import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import PropTypes from "prop-types";

const Button = props => {
  return (
    <View
      style={[styles.container, props.full && styles.fullButton, props.style]}
    >
      <TouchableOpacity style={styles.button} onPress={props.onPress}>
        <Text style={[styles.text, props.titleStyle]}>{props.title}</Text>
      </TouchableOpacity>
    </View>
  );
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
  full: PropTypes.bool,
  style: PropTypes.object,
  titleStyle: PropTypes.object,
  onPress: PropTypes.func
};

Button.defaultProp = {
  full: false
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    elevation: 3,
    alignSelf: "center",
    marginVertical: 12
  },
  fullButton: {
    alignSelf: "stretch"
  },
  button: {
    paddingHorizontal: 32,
    paddingVertical: 8,
    alignSelf: "stretch",
    alignItems: "center"
  },
  text: {
    fontSize: 16,
    color: "#333",
    fontWeight: "100"
  }
});

export default Button;
