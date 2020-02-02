import React from "react";
import { View, ScrollView, Text } from "react-native";
import styled from "styled-components";

// Components
import { PromptCard } from "../components";

const SScrollView = styled(ScrollView)`
  background-color: #fff;
`;

const SView = styled(View)`
  justify-content: center;
  align-items: center;
  padding-bottom: 10px;
`;

const SHeader = styled(View)`
  margin-bottom: 10px;
  margin-top: 30px;
`;
const SHeaderTitle = styled(Text)`
  font-weight: bold;
  font-size: 25px;
  text-align: center;
  color: #121212;
  text-decoration: underline;
`;

type Prompt = {
  company: string;
  title: string;
  companyLogo: string; // url
  primaryColor: string;
  secondaryColor: string;
  numberOfQuestions: number;
  textColor: string;
};

type Question = {
  text: string;
};

export function HomeScreen(props: any) {
  const prompts: Prompt[] = [
    {
      company: "Microsoft",
      title: "Behavioral round 1",
      companyLogo:
        "https://pngriver.com/wp-content/uploads/2018/04/Download-Microsoft-Logo-PNG-HD.png",
      primaryColor: "#A635FF",
      secondaryColor: "#7C2CFF",
      numberOfQuestions: 3,
      textColor: "#fff"
    },
    {
      company: "Facebook",
      title: "Behavioral final 2",
      companyLogo:
        "https://en.facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png",
      primaryColor: "#3586FF",
      secondaryColor: "#632CFF",
      numberOfQuestions: 3,
      textColor: "#fff"
    },
    {
      company: "Google",
      title: "Behavioral round 1",
      companyLogo: "https://pluspng.com/img-png/google-logo-png-open-2000.png",
      primaryColor: "#FF9635",
      secondaryColor: "#FFAA2C",
      numberOfQuestions: 3,
      textColor: "#fff"
    },
    {
      company: "Carnival",
      title: "Behavioral round 1",
      companyLogo: "https://pluspng.com/img-png/google-logo-png-open-2000.png",
      primaryColor: "#DD3434",
      secondaryColor: "#FF3434",
      numberOfQuestions: 3,
      textColor: "#fff"
    }
  ];

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

  function handleOnPress(prompt: Prompt) {
    props.navigation.navigate("PromptQuestionnaire", {
      questions,
      primaryColor: prompt.primaryColor,
      secondaryColor: prompt.secondaryColor
    });
  }

  return (
    <SScrollView>
      <SHeader>
        <SHeaderTitle>Questionnaire set</SHeaderTitle>
      </SHeader>
      <SView>
        {prompts.map((prompt: Prompt, index: any) => {
          return (
            <PromptCard
              key={index}
              company={prompt.company}
              title={prompt.title}
              companyLogo={prompt.companyLogo}
              primaryColor={prompt.primaryColor}
              secondaryColor={prompt.secondaryColor}
              numberOfQuestions={prompt.numberOfQuestions}
              textColor={prompt.textColor}
              onPress={() => handleOnPress(prompt)}
            />
          );
        })}
      </SView>
    </SScrollView>
  );
}
