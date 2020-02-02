import React from "react";
import { View, ScrollView } from "react-native";
import styled from "styled-components";

// Components
import { QuestionnaireCard } from "../components";

const Container = styled(View)`
  justify-content: center;
  align-items: center;
  padding-vertical: 30px;
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
  return (
    <ScrollView>
      <Container>
        {questions.map((question: Question, index: any) => {
          return <QuestionnaireCard key={index} text={question.text} />;
        })}
      </Container>
    </ScrollView>
  );
}
