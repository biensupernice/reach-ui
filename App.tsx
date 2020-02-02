import React from "react";
import { StatusBar } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import { HomeScreen, PromptQuestionnaire, ResultScreen } from "./screens";

<StatusBar barStyle="light-content" />;

const Navigator = createStackNavigator(
  {
    HomeScreen: { screen: HomeScreen },
    PromptQuestionnaire: { screen: PromptQuestionnaire },
    ResultScreen: { screen: ResultScreen }
  },
  {
    initialRouteName: "HomeScreen",
    headerMode: "none",

    navigationOptions: { swipeEnabled: true, gesturesEnabled: true }
  }
);

const App = createAppContainer(Navigator);

export default App;
