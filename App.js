import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StatusBar } from "expo-status-bar";
import MyTeamScreen from "./src/screens/MyTeamScreen";
import NewsScreen from "./src/screens/NewsScreen";
import ScoresScreen from "./src/screens/ScoresScreen";
import StandingsScreen from "./src/screens/StandingsScreen";
import MenuScreen from "./src/screens/MenuScreen";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="SJS" component={MyTeamScreen} />
        <Tab.Screen name="News" component={NewsScreen} />
        <Tab.Screen name="Scores" component={ScoresScreen} />
        <Tab.Screen name="Standings" component={StandingsScreen} />
        <Tab.Screen name="Menu" component={MenuScreen} />
      </Tab.Navigator>
      <StatusBar />
    </NavigationContainer>
  );
}
