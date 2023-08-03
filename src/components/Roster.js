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
  playerCellContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 1,
  },
  playerLeft: { width: 50 },
  playerRight: { width: 100 },
  playerPhoto: {
    height: 40,
    width: 40,
    borderRadius: "50%",
    borderWidth: 1,
    borderColor: "lightgray",
  },
});
