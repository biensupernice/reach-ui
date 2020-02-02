import React from "react";
import styled from "styled-components";
import { View, Text } from "react-native";

const Card = styled(View)`
  width: 350px;
  height: 150px;
  flex-direction: row;
  background-color: #fff;
  border-radius: 10px;
  margin-vertical: 10px;
`;

const CardQuestion = styled(Text)``;

type QuestionCardProps = {
  text: string;
};

export function QuestionnaireCard(props: QuestionCardProps) {
  return (
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
  );
}
