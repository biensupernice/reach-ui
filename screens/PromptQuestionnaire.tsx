import React from "react";
import { View, ScrollView, Button } from "react-native";
import styled from "styled-components";

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
  color: red;
`;

type Question = {
  text: string;
};

export function PromptQuestionnaire() {
  const questions: Question[] = [
    {
      text: "Tell me about a time you felt a little gay."
    },
    {
      text: "example question"
    },
    {
      text: "example question"
    }
  ];

  function handleOnPress() {
    console.log("Submitted questionnaire");
  }
  return (
    <ScrollView>
      <Container>
        {questions.map((question: Question, index: any) => {
          return <QuestionnaireCard key={index} text={question.text} />;
        })}
      </Container>
      <SubmitButton title="Grade" onPress={handleOnPress} />
    </ScrollView>
  );
}
