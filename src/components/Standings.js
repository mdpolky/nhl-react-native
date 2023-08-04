import { View, Text, StyleSheet, ScrollView } from "react-native";
import { NhlTeamIcon } from "../components/shared/common";
import { nhlTeamAbbreviations } from "../components/constants";
import { Table } from "../components/shared/Table";

export const TeamTableCell = ({ rank, team, teamId }) => {
  return (
    <View style={styles.teamContainer}>
      <Text style={styles.teamRank}>{rank}</Text>
      <NhlTeamIcon style={styles.teamIcon} id={teamId} />
      <Text style={styles.teamAbb}>{nhlTeamAbbreviations[team]}</Text>
    </View>
  );
};

export const StandingsTable = (props) => {
  const headers = ["", "GP", "W", "L", "OT", "PTS", "P%", "GF", "GA", "DIFF"];
  const columnWidths = [115, 100, 100, 100, 100, 100, 100, 100, 100, 100];

  return <Table headers={headers} columnWidths={columnWidths} {...props} />;
};

const styles = StyleSheet.create({
  teamContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  teamRank: { width: 25, marginLeft: 5 },
  teamIcon: {
    width: 35,
    height: 50,
    marginLeft: 5,
    marginRight: 5,
  },
  teamAbb: { width: 35, marginRight: 5 },
});
