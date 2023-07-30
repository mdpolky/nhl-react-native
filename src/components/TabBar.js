import { Text, View, TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export function TabBar({ state, descriptors, insets, navigation }) {
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