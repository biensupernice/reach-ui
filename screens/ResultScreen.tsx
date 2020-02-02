import React from "react";
import { View, Text } from "react-native";

export function ResultScreen(props) {
  const test = props.navigation.getParam("test");

  return (
    <View>
      <Text>test</Text>
    </View>
  );
}
