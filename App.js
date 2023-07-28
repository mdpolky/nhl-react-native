import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StatusBar } from "expo-status-bar";
import MyTeamScreen from "./src/screens/MyTeamScreen";
import NewsScreen from "./src/screens/NewsScreen";
import ScoresScreen from "./src/screens/ScoresScreen";
import StandingsScreen from "./src/screens/StandingsScreen";
import MenuScreen from "./src/screens/MenuScreen";
import Ionicons from "@expo/vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            switch (route.name) {
              case "My Team":
                iconName = focused
                  ? "ios-information-circle"
                  : "ios-information-circle-outline";
                break;
              case "News":
                iconName = focused ? "ios-newspaper" : "ios-newspaper-outline";
                break;
              case "Scores":
                iconName = focused ? "ios-calendar" : "ios-calendar-outline";
                break;
              case "Standings":
                iconName = focused ? "ios-bar-chart" : "ios-bar-chart-outline";
                break;
              default:
                iconName = focused ? "ios-menu" : "ios-menu-outline";
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "#bada55",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen name="My Team" component={MyTeamScreen} />
        <Tab.Screen name="News" component={NewsScreen} />
        <Tab.Screen name="Scores" component={ScoresScreen} />
        <Tab.Screen name="Standings" component={StandingsScreen} />
        <Tab.Screen name="Menu" component={MenuScreen} />
      </Tab.Navigator>
      <StatusBar />
    </NavigationContainer>
  );
}
