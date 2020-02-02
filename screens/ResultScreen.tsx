import React from "react";
import { View, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

export function ResultScreen(props) {
  //   const test = props.navigation.getParam("test");
  const overallScore = "69";

  return (
    <ScrollView>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: 50
        }}
      >
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 30
          }}
        >
          Overall Score
        </Text>
        <View
          style={{
            marginTop: 20,
            backgroundColor: "#632CFF",
            borderRadius: 100,
            padding: 25,
            shadowOpacity: 0.4,
            shadowRadius: 6,
            shadowColor: "rgba(0,0,0,0.15)",
            shadowOffset: { height: 5, width: 0 }
          }}
        >
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 70,
              color: "#fff"
            }}
          >
            {overallScore}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}
