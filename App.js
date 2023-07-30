import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import { View, Text, TouchableOpacity } from "react-native";
import MyTeamScreen from "./src/screens/MyTeamScreen";
import NewsScreen from "./src/screens/NewsScreen";
import ScoresScreen from "./src/screens/ScoresScreen";
import StandingsScreen from "./src/screens/StandingsScreen";
import MenuScreen from "./src/screens/MenuScreen";
import CalendarScreen from "./src/screens/CalendarScreen";
import Ionicons from "@expo/vector-icons/Ionicons";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function TabBar({ state, descriptors, insets, navigation }) {
  return (
    <View
      style={{
        flexDirection: "row",
        paddingBottom: insets.bottom,
        paddingTop: 10,
      }}
    >
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;
        const tabColor = isFocused ? "#bada55" : "gray";

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        let iconName;
        switch (route.name) {
          case "My Team":
            iconName = isFocused
              ? "ios-information-circle"
              : "ios-information-circle-outline";
            break;
          case "News":
            iconName = isFocused ? "ios-newspaper" : "ios-newspaper-outline";
            break;
          case "Scores":
            iconName = isFocused ? "ios-calendar" : "ios-calendar-outline";
            break;
          case "Standings":
            iconName = isFocused ? "ios-bar-chart" : "ios-bar-chart-outline";
            break;
          default:
            iconName = isFocused ? "ios-menu" : "ios-menu-outline";
        }

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={iconName}
            key={iconName}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{
              flex: 1,
              alignItems: "center",
            }}
          >
            <Ionicons name={iconName} size={32} color={tabColor} />
            <Text style={{ color: tabColor }}>{label}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

function TabStack() {
  return (
    <Tab.Navigator
      initialRouteName="Scores"
      tabBar={(props) => <TabBar {...props} />}
    >
      <Tab.Group>
        <Tab.Screen name="My Team" component={MyTeamScreen} />
        <Tab.Screen name="News" component={NewsScreen} />
        <Tab.Screen
          name="Scores"
          component={ScoresScreen}
          options={({ navigation }) => ({
            headerRight: () => {
              return (
                <TouchableOpacity
                  onPress={() => navigation.navigate("Calendar")}
                >
                  <Ionicons
                    name="ios-calendar"
                    size={32}
                    color="#bada55"
                    style={{ paddingRight: 10 }}
                  />
                </TouchableOpacity>
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
          name="TabStack"
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
