import { TouchableOpacity, Text } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export function ScoresHeaderLeft({ navigation }) {
  return (
    <TouchableOpacity onPress={() => navigation.navigate("Calendar")}>
      <Text style={{ paddingLeft: 10 }}>Monday, January 1</Text>
    </TouchableOpacity>
  );
}

export function ScoresHeaderRight({ navigation }) {
  return (
    <TouchableOpacity onPress={() => navigation.navigate("Calendar")}>
      <Ionicons
        name="ios-calendar"
        size={32}
        color="#bada55"
        style={{ paddingRight: 10 }}
      />
    </TouchableOpacity>
  );
}
