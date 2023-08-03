import React, { useState, useEffect } from "react";
import { StyleSheet, View, ActivityIndicator } from "react-native";
import * as NhlClient from "../clients/NhlApi";
import * as Constants from "../components/constants";
import { TeamTableCell, StandingsTable } from "../components/Standings";

function toStandingsTableRow(data, index, arr) {
  if (!data) {
    throw new TypeError("The data passed to toStandingsTableRow has an issue");
  }
  return [
    <TeamTableCell
      rank={index + 1}
      team={data["team"]["name"]}
      teamId={data["team"]["id"]}
    />,
    data.gamesPlayed,
    data.leagueRecord.wins,
    data.leagueRecord.losses,
    data.leagueRecord.ot,
    data.points,
    Math.round((data.pointsPercentage + Number.EPSILON) * 1000) / 1000,
    data.goalsScored,
    data.goalsAgainst,
    data.goalsScored - data.goalsAgainst,
  ];
}

export default function StandingsScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [rows, setRows] = useState([[]]);
  useEffect(() => {
    NhlClient.getStandings().then((result) => {
      setRows(result.map(toStandingsTableRow));
      setIsLoading(false);
    });
  }, []);

  return (
    <View style={styles.container}>
      {isLoading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color={Constants.accentColor} />
        </View>
      ) : (
        <StandingsTable rows={rows} />
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
