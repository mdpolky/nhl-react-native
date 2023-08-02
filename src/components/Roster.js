import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Table, Row } from "react-native-reanimated-table";
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
  const tableHead = [
    "Player",
    "#",
    "Pos",
    "Sh",
    "Ht",
    "Wt",
    "Dob",
    "Birthplace",
  ];
  const widthArr = [150, 50, 50, 50, 50, 50, 100, 150];
  const rowArray = props.rows;

  return (
    <ScrollView horizontal={true}>
      <View>
        <Table borderStyle={styles.tableHeaderBorder}>
          <Row
            data={tableHead}
            widthArr={widthArr}
            style={styles.headerRow}
            textStyle={styles.headerText}
          />
        </Table>
        <ScrollView style={styles.dataWrapper}>
          <Table borderStyle={styles.tableBorder}>
            {rowArray.map((row, index) => (
              <Row
                key={index}
                data={row}
                widthArr={widthArr}
                style={[styles.row, index % 2 && styles.altRow]}
                textStyle={styles.text}
              />
            ))}
          </Table>
        </ScrollView>
      </View>
    </ScrollView>
  );
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
  },
  playerLeft: { margin: 5 },
  playerRight: { flex: 1 },
  playerPhoto: {
    height: 40,
    width: 40,
    borderRadius: "50%",
    borderWidth: 1,
    borderColor: "lightgray",
  },
});
