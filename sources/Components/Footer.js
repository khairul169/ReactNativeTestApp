import React from "react";
import { View, Text, StyleSheet } from "react-native";
import PropTypes from "prop-types";

const Footer = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.text}</Text>
    </View>
  );
};

Footer.propTypes = {
  text: PropTypes.string.isRequired
};

Footer.defaultProps = {
  text: "This is a footer."
};

const styles = StyleSheet.create({
  container: {
    height: 48,
    alignItems: "center",
    justifyContent: "center",
    borderTopColor: "#eee",
    borderTopWidth: 1
  },
  text: {
    color: "#333",
    fontSize: 14
  }
});

export default Footer;
