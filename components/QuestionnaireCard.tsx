import React from "react";
import styled from "styled-components";
import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const Card = styled(View)`
  width: 350px;
  height: 150px;
  flex-direction: row;
  background-color: #fff;
  border-radius: 10px;
  margin-vertical: 10px;
  justify-content: center;
  align-items: center;
`;

const CardQuestion = styled(Text)`
  font-size: 20px;
`;

type QuestionCardProps = {
  text: string;
};

export function QuestionnaireCard(props: QuestionCardProps) {
  function handleOnPress() {
    console.log("Question pressed");
  }
  return (
    <TouchableOpacity onPress={handleOnPress}>
      <Card
        style={{
          shadowOpacity: 0.4,
          shadowRadius: 6,
          shadowColor: "rgba(0,0,0,0.15)",
          shadowOffset: { height: 5, width: 0 },
          background: "linear-gradient(#e66465, #9198e5);"
        }}
      >
        <CardQuestion>{props.text}</CardQuestion>
      </Card>
    </TouchableOpacity>
  );
}
