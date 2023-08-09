import { TouchableOpacity, Text, View, StyleSheet } from "react-native";
import { getHeaderTitle } from "@react-navigation/elements";
import Ionicons from "@expo/vector-icons/Ionicons";
import * as Theme from "../theme";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { format, add, sub } from "date-fns";
import { parseDate, dateStringFormat } from "../../util/date";
import { useMyTeamStore } from "../../Store";
import { nhlTeamThemes } from "../constants";

function ScoresHeaderLeft({ accentColor, navigation, searchDate }) {
  const parsedDate = parseDate(searchDate);
  const previousDate = sub(parsedDate, { days: 1 });
  const formattedDate = format(previousDate, dateStringFormat);
  return (
    <TouchableOpacity
      style={styles.headerLeft}
      onPress={() =>
        navigation.navigate("Scores", { searchDate: formattedDate })
      }
    >
      <Ionicons
        name="chevron-back"
        size={24}
        color={accentColor}
        style={styles.headerLeftIcon}
      />
    </TouchableOpacity>
  );
}

function ScoresHeaderCenter({ accentColor, navigation, searchDate }) {
  const parsedDate = parseDate(searchDate);
  const formattedDate = format(parsedDate, "cccc ',' LLLL do");
  return (
    <TouchableOpacity
      style={styles.headerCenter}
      onPress={() =>
        navigation.navigate("Calendar", { searchDate: searchDate })
      }
    >
      <View style={styles.headerCenterInner}>
        <Ionicons name="ios-calendar" size={24} color={accentColor} />
        <Text style={styles.headerCenterText}>{formattedDate}</Text>
      </View>
    </TouchableOpacity>
  );
}

function ScoresHeaderRight({ accentColor, navigation, searchDate }) {
  const parsedDate = parseDate(searchDate);
  const nextDate = add(parsedDate, { days: 1 });
  const formattedDate = format(nextDate, dateStringFormat);
  return (
    <TouchableOpacity
      style={styles.headerRight}
      onPress={() =>
        navigation.navigate("Scores", { searchDate: formattedDate })
      }
    >
      <Ionicons
        name="chevron-forward"
        size={24}
        color={accentColor}
        style={styles.headerRightIcon}
      />
    </TouchableOpacity>
  );
}

export function ScoresHeader(props) {
  const insets = useSafeAreaInsets();
  const title = getHeaderTitle(props.options, props.route.name);
  const selectedTeamId = useMyTeamStore((state) => state.selectedTeamId);
  const accentColor = nhlTeamThemes[selectedTeamId];
  return (
    <View
      style={{
        height: insets.top + 44 + 10,
        paddingTop: insets.top,
        backgroundColor: Theme.darkBg,
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
        <ScoresHeaderLeft accentColor={accentColor} {...props} />
        <ScoresHeaderCenter accentColor={accentColor} {...props} />
        <ScoresHeaderRight accentColor={accentColor} {...props} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerTitleText: {
    fontWeight: "600",
    fontSize: 16,
    color: Theme.lightText,
    alignSelf: "center",
  },
  headerLeft: { flexGrow: 1, flexBasis: 0 },
  headerLeftIcon: { paddingLeft: 10 },
  headerCenter: { flexGrow: 10, flexBasis: 0 },
  headerCenterInner: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  headerCenterText: {
    fontSize: 16,
    color: Theme.lightText,
  },
  headerRight: { flexGrow: 1, flexBasis: 0 },
  headerRightIcon: {
    alignSelf: "flex-end",
    paddingRight: 10,
  },
});
