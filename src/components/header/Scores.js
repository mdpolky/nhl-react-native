<script src="http://localhost:8097"></script>;
import { TouchableOpacity, Text, View, StyleSheet } from "react-native";
import { getHeaderTitle } from "@react-navigation/elements";
import Ionicons from "@expo/vector-icons/Ionicons";
import * as Constants from "../constants";
import { useSafeAreaInsets } from "react-native-safe-area-context";

function ScoresHeaderLeft({ navigation, searchDate }) {
  return (
    <TouchableOpacity
      style={styles.headerLeft}
      onPress={() =>
        navigation.navigate("Calendar", { searchDate: searchDate })
      }
    >
      <Text style={styles.headerLeftText}>{searchDate}</Text>
    </TouchableOpacity>
  );
}

function ScoresHeaderRight({ navigation, searchDate }) {
  return (
    <TouchableOpacity
      style={styles.headerRight}
      onPress={() =>
        navigation.navigate("Calendar", { searchDate: searchDate })
      }
    >
      <Ionicons
        name="ios-calendar"
        size={32}
        color={Constants.accentColor}
        style={styles.headerRightIcon}
      />
    </TouchableOpacity>
  );
}

export function ScoresHeader(props) {
  const insets = useSafeAreaInsets();
  const title = getHeaderTitle(props.options, props.route.name);
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        height: insets.top + 44,
        paddingTop: insets.top,
        backgroundColor: Constants.darkBg,
      }}
    >
      <ScoresHeaderLeft {...props} />
      <View style={styles.headerTitleContainer}>
        <Text style={styles.headerTitleText}>{title}</Text>
      </View>
      <ScoresHeaderRight {...props} />
    </View>
  );
}

const styles = StyleSheet.create({
  headerTitleText: {
    fontWeight: "600",
    fontSize: 16,
    color: Constants.lightText,
    alignSelf: "center",
  },
  headerLeft: { flexGrow: 1, flexBasis: 0 },
  headerLeftText: { color: Constants.accentColor, paddingLeft: 10 },
  headerTitleContainer: { flexGrow: 1, flexBasis: 0 },
  headerRight: { flexGrow: 1, flexBasis: 0 },
  headerRightIcon: { alignSelf: "flex-end", paddingRight: 10 },
});
