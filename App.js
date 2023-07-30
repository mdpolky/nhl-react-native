import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContext } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text, Button, Pressable } from "react-native";
import MyTeamScreen from "./src/screens/MyTeamScreen";
import NewsScreen from "./src/screens/NewsScreen";
import ScoresScreen from "./src/screens/ScoresScreen";
import StandingsScreen from "./src/screens/StandingsScreen";
import MenuScreen from "./src/screens/MenuScreen";
import CalendarScreen from "./src/screens/CalendarScreen";
import Ionicons from "@expo/vector-icons/Ionicons";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function ModalScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ fontSize: 30 }}>This is a modal!</Text>
      <Button onPress={() => navigation.goBack()} title="Dismiss" />
    </View>
  );
}

function TabStack() {
  return (
    <Tab.Navigator initialRouteName="Scores">
      <Tab.Group
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
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "#bada55",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen name="My Team" component={MyTeamScreen} />
        <Tab.Screen name="News" component={NewsScreen} />
        <Tab.Screen
          name="Scores"
          component={ScoresScreen}
          options={({ navigation }) => ({
            headerRight: () => {
              return (
                <Pressable onPress={() => navigation.navigate("Calendar")}>
                  <Ionicons
                    name="ios-calendar"
                    size={32}
                    color="#bada55"
                    style={{ paddingRight: 10 }}
                  />
                </Pressable>
              );
            },
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
          name="Scores"
          component={TabStack}
          options={{ headerShown: false }}
        />
        <Stack.Group screenOptions={{ presentation: "modal" }}>
          <Stack.Screen name="Calendar" component={CalendarScreen} />
        </Stack.Group>
      </Stack.Navigator>
      <StatusBar />
    </NavigationContainer>
  );
}
