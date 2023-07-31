import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import MyTeamScreen from "./src/screens/MyTeamScreen";
import NewsScreen from "./src/screens/NewsScreen";
import ScoresScreen from "./src/screens/ScoresScreen";
import StandingsScreen from "./src/screens/StandingsScreen";
import MenuScreen from "./src/screens/MenuScreen";
import CalendarScreen from "./src/screens/CalendarScreen";
import {
  ScoresHeaderLeft,
  ScoresHeaderRight,
} from "./src/components/header/Scores";
import { TabBar } from "./src/components/TabBar";
import * as Constants from "./src/components/constants";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function TabStack() {
  return (
    <Tab.Navigator
      initialRouteName="Scores"
      tabBar={(props) => <TabBar {...props} />}
      screenOptions={{
        headerStyle: {
          backgroundColor: Constants.darkBg,
        },
        headerTintColor: Constants.lightText,
      }}
    >
      <Tab.Group>
        <Tab.Screen name="My Team" component={MyTeamScreen} />
        <Tab.Screen name="News" component={NewsScreen} />
        <Tab.Screen
          name="Scores"
          component={ScoresScreen}
          options={({ navigation }) => ({
            headerLeft: () => <ScoresHeaderLeft navigation={navigation} />,
            headerRight: () => <ScoresHeaderRight navigation={navigation} />,
          })}
        />
        <Tab.Screen name="Standings" component={StandingsScreen} />
        <Tab.Screen name="Menu" component={MenuScreen} />
      </Tab.Group>
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Back"
          component={TabStack}
          options={{ headerShown: false }}
        />
        <Stack.Group screenOptions={{ presentation: "modal" }}>
          <Stack.Screen name="Calendar" component={CalendarScreen} />
        </Stack.Group>
      </Stack.Navigator>
      <StatusBar style="light" />
    </NavigationContainer>
  );
}
