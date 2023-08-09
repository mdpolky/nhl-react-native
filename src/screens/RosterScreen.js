import { useState, useEffect } from "react";
import {
  ScrollView,
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
} from "react-native";
import * as NhlClient from "../clients/NhlApi";
import * as Theme from "../components/theme";
import { PlayerTableCell, RosterTable } from "../components/Roster";
import { format } from "date-fns";
import { parseDate } from "../util/date";

function formatBirthplace(city, stateProvince, country) {
  return [city, stateProvince, country].filter((val) => val).join(", ");
}

function formatBirthdate(birthDate) {
  const parsedDate = parseDate(birthDate);
  return format(parsedDate, "MMM d ',' yyyy");
}

function toRosterTableRow(data, index, arr) {
  if (!data) {
    throw new TypeError("The data passed to toRosterTableRow has an issue");
  }

  return [
    <PlayerTableCell
      id={data["person"]["id"]}
      name={data["person"]["fullName"]}
    />,
    data["person"]["primaryNumber"],
    data["person"]["primaryPosition"]["abbreviation"],
    data["person"]["shootsCatches"],
    data["person"]["height"],
    data["person"]["weight"],
    formatBirthdate(data["person"]["birthDate"]),
    formatBirthplace(
      data["person"]["birthCity"],
      data["person"]["birthStateProvince"],
      data["person"]["birthCountry"]
    ),
  ];
}

function isForward(data, index, arr) {
  return ["C", "LW", "RW"].includes(
    data["person"]["primaryPosition"]["abbreviation"]
  );
}

function isDefender(data, index, arr) {
  return data["person"]["primaryPosition"]["abbreviation"] === "D";
}

function isGoalie(data, index, arr) {
  return data["person"]["primaryPosition"]["abbreviation"] === "G";
}

export default function RosterScreen({ navigation, route }) {
  const [isLoading, setIsLoading] = useState(true);
  const [roster, setRoster] = useState([[]]);

  useEffect(() => {
    NhlClient.getRoster(route.params?.teamId).then((result) => {
      setRoster(result);
      setIsLoading(false);
    });
  }, [route.params?.teamId]);

  return (
    <View style={styles.container}>
      {isLoading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color={Theme.accentColor} />
        </View>
      ) : (
        <ScrollView>
          <Text style={styles.tableTitle}>Forwards</Text>
          <RosterTable rows={roster.filter(isForward).map(toRosterTableRow)} />
          <Text style={styles.tableTitle}>Defensemen</Text>
          <RosterTable rows={roster.filter(isDefender).map(toRosterTableRow)} />
          <Text style={styles.tableTitle}>Goalies</Text>
          <RosterTable rows={roster.filter(isGoalie).map(toRosterTableRow)} />
        </ScrollView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
  },
  tableTitle: {
    fontSize: 30,
    paddingTop: 20,
    paddingBottom: 5,
  },
});
