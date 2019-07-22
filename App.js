import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import Header from "./sources/Components/Header";
import Button from "./sources/Components/Button";

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header title="Test" />
        <View style={styles.container}>
          <Text>App</Text>
          <Button full title="Test" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  content: {
    padding: 16
  }
});
