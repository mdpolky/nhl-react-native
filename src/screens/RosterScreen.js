import { useState } from "react";
import { View, ActivityIndicator, StyleSheet } from "react-native";
import { rosterMoq } from "../Store";
import * as Constants from "../components/constants";
import { RosterTable } from "../components/Roster";

function formatBirthplace(person) {
  const city = person["birthCity"];
  const stateProvince = person["birthStateProvince"];
  const country = person["birthCountry"];

  return [city, stateProvince, country].filter((val) => val).join(", ");
}

function toRosterTableRow(data, index, arr) {
  if (!data) {
    throw new TypeError("The data passed to toRosterTableRow has an issue");
  }
  return [
    data["person"]["fullName"],
    data["person"]["primaryNumber"],
    data["person"]["primaryPosition"]["abbreviation"],
    data["person"]["shootsCatches"],
    data["person"]["height"],
    data["person"]["weight"],
    data["person"]["birthDate"], //TODO: format date "JAN 1, 1989"
    formatBirthplace(data["person"]),
  ];
}

export default function RosterScreen() {
  const [isLoading, setIsLoading] = useState(false); //TODO: Wire this up, should start as true
  const result = rosterMoq;
  const tableRows = result.map(toRosterTableRow);
  return (
    <View style={styles.container}>
      {isLoading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color={Constants.accentColor} />
        </View>
      ) : (
        <RosterTable rows={tableRows} />
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
});
