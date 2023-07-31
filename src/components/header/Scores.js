import { TouchableOpacity, Text, View, StyleSheet } from "react-native";
import { getHeaderTitle } from "@react-navigation/elements";
import Ionicons from "@expo/vector-icons/Ionicons";
import * as Constants from "../constants";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { format, parse } from "date-fns";

function ScoresHeaderLeft({ navigation, searchDate }) {
  return (
    <TouchableOpacity
      style={styles.headerLeft}
      onPress={
        () => navigation.navigate("Scores", { searchDate: "2023-01-01" }) //TODO: searchDate-1
      }
    >
      <Ionicons name="chevron-back" size={24} style={styles.headerLeftIcon} />
    </TouchableOpacity>
  );
}

function ScoresHeaderCenter({ navigation, searchDate }) {
  const parsedDate = parse(searchDate, "yyyy-MM-dd", new Date());
  const formattedDate = format(parsedDate, "cccc ',' LLLL do");
  return (
    <TouchableOpacity
      style={styles.headerCenter}
      onPress={() =>
        navigation.navigate("Calendar", { searchDate: searchDate })
      }
    >
      <View style={styles.headerCenterInner}>
        <Ionicons name="ios-calendar" size={24} color={Constants.accentColor} />
        <Text style={styles.headerCenterText}>{formattedDate}</Text>
      </View>
    </TouchableOpacity>
  );
}

function ScoresHeaderRight({ navigation, searchDate }) {
  return (
    <TouchableOpacity
      style={styles.headerRight}
      onPress={
        () => navigation.navigate("Scores", { searchDate: "2023-01-03" }) //TODO: searchDate+1
      }
    >
      <Ionicons
        name="chevron-forward"
        size={24}
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
        height: insets.top + 44,
        paddingTop: insets.top,
        backgroundColor: Constants.darkBg,
      }}
    >
      <View>
        <Text style={styles.headerTitleText}>{title}</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <ScoresHeaderLeft {...props} />
        <ScoresHeaderCenter {...props} />
        <ScoresHeaderRight {...props} />
      </View>
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
  headerLeftIcon: { color: Constants.accentColor, paddingLeft: 10 },
  headerCenter: { flexGrow: 10, flexBasis: 0 },
  headerCenterInner: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  headerCenterText: {
    fontSize: 16,
    color: Constants.lightText,
  },
  headerRight: { flexGrow: 1, flexBasis: 0 },
  headerRightIcon: {
    alignSelf: "flex-end",
    paddingRight: 10,
    color: Constants.accentColor,
  },
});
