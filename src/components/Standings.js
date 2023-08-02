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
  },
  teamRank: { width: 25, paddingLeft: 5 },
  teamIcon: {
    width: 35,
    height: 35,
  },
  teamAbb: { width: 35 },
});
