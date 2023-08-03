import { View, Text, StyleSheet, ScrollView } from "react-native";
import { NhlTeamIcon } from "../components/shared/common";
import { nhlTeamAbbreviations } from "../components/constants";
import { Table } from "../components/shared/Table";

export const TeamTableCell = ({ rank, team, teamId }) => {
  return (
    <View style={styles.tableCellContainer}>
      <Text style={styles.teamRank}>{rank}</Text>
      <NhlTeamIcon style={styles.teamIcon} id={teamId} />
      <Text style={styles.teamAbb}>{nhlTeamAbbreviations[team]}</Text>
    </View>
  );
};

export const StandingsTable = (props) => {
  const headers = [
    "NHL",
    "GP",
    "W",
    "L",
    "OT",
    "PTS",
    "P%",
    "GF",
    "GA",
    "DIFF",
  ];
  const columnWidths = [100, 100, 100, 100, 100, 100, 100, 100, 100, 100];

  return <Table headers={headers} columnWidths={columnWidths} {...props} />;
};

const styles = StyleSheet.create({
  tableCellContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  teamRank: { width: 25, marginLeft: 5 },
  teamIcon: {
    width: 35,
    height: 35,
  },
  teamAbb: { width: 35 },
  headerRow: {
    height: 50,
    backgroundColor: "#fafafa",
  },
  text: {
    textAlign: "center",
    fontWeight: "100",
  },
  headerText: {
    textAlign: "center",
    fontWeight: 700,
  },
  dataWrapper: {
    marginTop: -1,
  },
  row: {
    height: 40,
    backgroundColor: "#fff",
  },
  altRow: {
    backgroundColor: "#fafafa",
  },
  tableHeaderBorder: {
    borderWidth: 1,
    borderColor: "#C1C0B9",
  },
  tableBorder: {
    borderWidth: 1,
    borderColor: "#C1C0B9",
  },
});
