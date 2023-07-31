import { TouchableOpacity, Text } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import * as Constants from "../constants";

export function ScoresHeaderLeft({ navigation, searchDate }) {
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("Calendar", { searchDate: searchDate })
      }
    >
      <Text style={{ paddingLeft: 10, color: Constants.accentColor }}>
        {searchDate}
      </Text>
    </TouchableOpacity>
  );
}

export function ScoresHeaderRight({ navigation, searchDate }) {
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("Calendar", { searchDate: searchDate })
      }
    >
      <Ionicons
        name="ios-calendar"
        size={32}
        color={Constants.accentColor}
        style={{ paddingRight: 10 }}
      />
    </TouchableOpacity>
  );
}
