import React from "react";
import { View, Text, StyleSheet } from "react-native";
import PropTypes from "prop-types";

const Header = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>{props.title}</Text>
    </View>
  );
};

Header.propTypes = {
  title: PropTypes.string
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    elevation: 3,
    flexDirection: "row",
    alignItems: "stretch",
    height: 48
  },
  titleText: {
    color: "#333",
    fontSize: 18,
    fontWeight: "100",
    alignSelf: "center",
    marginLeft: 24
  }
});

export default Header;
