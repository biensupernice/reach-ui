import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styled from "styled-components";
import { LinearGradient } from "expo-linear-gradient";

const Card = styled(View)`
  width: 350px;
  height: 150px;
  flex-direction: row;
`;

const SCardCompanyName = styled(Text)`
  color: ${props => props.textColor};
  font-weight: bold;
  font-size: 35px;
`;

const SCardTitle = styled(Text)`
  color: ${props => props.textColor};
  font-size: 20px;
  font-weight: 300;
  line-height: 40px;
`;

const SCardNumOfQuestions = styled(Text)`
  color: ${props => props.textColor};
  font-size: 20px;
  font-weight: 500;
`;

const CardContent = styled(View)`
  flex: 1;
  justify-content: center;
  left: 35px;
`;

const CompanyLogoContainer = styled(View)`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const CompanyLogo = styled(Image)`
  height: 90px;
  width: 90px;
  right: 5px;
`;

type PromptCardProps = {
  company: string;
  title: string;
  textColor: string; // hex
  primaryColor: string; // hex
  secondaryColor: string; // hex
  companyLogo: string; // url
  numberOfQuestions: number;
  onPress: any;
};

export function PromptCard(props: PromptCardProps) {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <LinearGradient
        colors={[props.primaryColor, props.secondaryColor]}
        style={{ marginVertical: 10, borderRadius: 10 }}
      >
        <Card
          backgroundColor={props.primaryColor}
          style={{
            shadowOpacity: 0.4,
            shadowRadius: 6,
            shadowColor: "rgba(0,0,0,0.7)",
            shadowOffset: { height: 5, width: 0 },
            background: "linear-gradient(#e66465, #9198e5);"
          }}
        >
          {/* Left */}
          <CardContent>
            <SCardCompanyName textColor={props.textColor}>
              {props.company}
            </SCardCompanyName>
            <SCardTitle textColor={props.textColor}>{props.title}</SCardTitle>
            <SCardNumOfQuestions textColor={props.textColor}>
              {props.numberOfQuestions} Questions
            </SCardNumOfQuestions>
          </CardContent>

          {/* Righr */}
          <CompanyLogoContainer>
            <CompanyLogo source={{ uri: props.companyLogo }} />
          </CompanyLogoContainer>
        </Card>
      </LinearGradient>
    </TouchableOpacity>
  );
}
