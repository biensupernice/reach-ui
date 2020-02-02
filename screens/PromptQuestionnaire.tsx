import React from "react";
import { View, ScrollView, Button } from "react-native";
import styled from "styled-components";
import { LinearGradient } from "expo-linear-gradient";

// Components
import { QuestionnaireCard } from "../components";

const Container = styled(View)`
  justify-content: center;
  align-items: center;
  padding-vertical: 30px;
`;
const SubmitButton = styled(Button)`
  background-color: #000;
  width: 100px;
  height: 20px;
  color: white;
  font-weight: bold;
`;

type Question = {
  text: string;
};

export function PromptQuestionnaire(props: any) {
  const questions = props.navigation.getParam("questions");

  const primaryColor = props.navigation.getParam("primaryColor");
  const secondaryColor = props.navigation.getParam("secondaryColor");

  function handleOnPress() {
    props.navigation.navigate("ResultScreen", {
      results: {
        test: "1"
      }
    });
  }
  return (
    <LinearGradient colors={[primaryColor, secondaryColor]} style={{ flex: 1 }}>
      <ScrollView>
        <Container>
          {questions.map((question: Question, index: any) => {
            return <QuestionnaireCard key={index} text={question.text} />;
          })}
        </Container>
        <SubmitButton
          title="Grade"
          onPress={handleOnPress}
          color="#fff"
          style={{ fontWeight: "bold" }}
        />
      </ScrollView>
    </LinearGradient>
  );
}
