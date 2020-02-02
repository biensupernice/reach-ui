import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import { HomeScreen, PromptQuestionnaire } from "./screens";

const Navigator = createStackNavigator(
  {
    HomeScreen: { screen: HomeScreen },
    PromptQuestionnaire: { screen: PromptQuestionnaire }
  },
  {
    initialRouteName: "PromptQuestionnaire",
    headerMode: "none",
    navigationOptions: { swipeEnabled: true, gesturesEnabled: true }
  }
);

const App = createAppContainer(Navigator);

export default App;
