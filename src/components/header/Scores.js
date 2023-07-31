import { TouchableOpacity, Text } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export function ScoresHeaderLeft({ navigation, searchDate }) {
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("Calendar", { searchDate: searchDate })
      }
    >
      <Text style={{ paddingLeft: 10, color: "#bada55" }}>{searchDate}</Text>
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
        color="#bada55"
        style={{ paddingRight: 10 }}
      />
    </TouchableOpacity>
  );
}
