import { View, Text, StyleSheet } from "react-native";
import { NhlTeamIcon } from "../components/shared/common";
import { nhlTeamAbbreviations } from "../components/constants";

export const TeamTableCell = ({ rank, team, teamId }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.teamRank}>{rank}</Text>
      <NhlTeamIcon style={styles.teamIcon} id={teamId} />
      <Text style={styles.teamAbb}>{nhlTeamAbbreviations[team]}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: 5,
    paddingRight: 5,
  },
  teamRank: { flexGrow: 1, flexBasis: 0 },
  teamIcon: { flexGrow: 2, flexBasis: 0, width: 25, height: 25 },
  teamAbb: { flexGrow: 2, flexBasis: 0 },
});
