import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import Header from "./sources/Components/Header";
import Button from "./sources/Components/Button";
import Footer from "./sources/Components/Footer";

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header title="Test" />
        <View style={styles.content}>
          <Text>App</Text>
          <Button full title="Test" />
        </View>
        <Footer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  content: {
    padding: 16,
    flex: 1
  }
});
