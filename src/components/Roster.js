import { View, StyleSheet, ScrollView } from "react-native";
import { Table, Row } from "react-native-reanimated-table";

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
