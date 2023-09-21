import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const MyProps = (props) => {
  return (
    <View>
      <Text style={styles.propss}>{props.myText}</Text>
      <Button onPress={props.deleteText} title="Delete" />
    </View>
  );
};

const styles = StyleSheet.create({
  propss: {
    fontSize: 25,
    fontWeight: "bold",
    color: "green",
    marginTop: 20,
    marginBottom: 20,
  },
});

export default MyProps;
