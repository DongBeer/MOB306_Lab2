import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import MyProps from "./MyProps";
import React from "react";

class App extends React.Component {
  state = {
    myState: "Đây là trạng thái State 1",

    myText: "Đây là Propss",
  };

  deleteText = () => {
    this.setState({ myText: "" });
  };

  updateText = () => {
    if (this.state.myState == "Đây là trạng thái State 1") {
      this.setState({ myState: "Đây là trạng thái State 2" });
    } else {
      this.setState({ myState: "Đây là trạng thái State 1" });
    }
    console.log(this.state.myState);
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.subTitle}>{this.state.myState}</Text>
        <Button onPress={this.updateText} title="Click me"></Button>

        <MyProps myText={this.state.myText} deleteText={this.deleteText} />

        <View style={styles.boxStyle}>
          <View style={styles.redbox}></View>
          <View style={styles.bluebox}></View>
          <View style={styles.blackbox}></View>
        </View>
        <StatusBar style="auto" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    // flex: 1,
    backgroundColor: "#30cfcf",
    alignItems: "center",
    justifyContent: "center",
  },
  subTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  redbox: {
    margin: 10,
    flex: 1,
    height: 100,
    backgroundColor: "red",
  },
  bluebox: {
    margin: 10,
    flex: 1,
    height: 100,
    backgroundColor: "blue",
  },
  blackbox: {
    margin: 10,
    flex: 1,
    height: 100,
    backgroundColor: "black",
  },
  boxStyle: {
    marginTop: 30,
    flexDirection: "row",
  },
});

export default App;
