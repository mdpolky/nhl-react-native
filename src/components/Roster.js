import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Table } from "../components/shared/Table";
import { PlayerThumbnail } from "./shared/common";

export const PlayerTableCell = ({ id, name }) => {
  return (
    <View style={styles.playerCellContainer}>
      <View style={styles.playerLeft}>
        <PlayerThumbnail style={styles.playerPhoto} id={id} />
      </View>
      <View style={styles.playerRight}>
        <Text>{name}</Text>
      </View>
    </View>
  );
};

export const RosterTable = (props) => {
  const headers = ["Player", "#", "Pos", "Sh", "Ht", "Wt", "Dob", "Birthplace"];
  const columnWidths = [150, 50, 50, 50, 50, 50, 100, 150];

  return <Table headers={headers} columnWidths={columnWidths} {...props} />;
};

const styles = StyleSheet.create({
  playerCellContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  playerLeft: { width: 40, margin: 5 },
  playerRight: { width: 95, marginRight: 5 },
  playerPhoto: {
    height: 40,
    width: 40,
    borderRadius: "50%",
    borderWidth: 1,
    borderColor: "lightgray",
  },
});
