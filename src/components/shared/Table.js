import { isValidElement } from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import * as Constants from "../constants";

function Cell(props) {
  const width = props.width;
  const isElement = isValidElement(props.data);
  return (
    <View
      style={isElement ? { width: width } : [styles.cell, { width: width }]}
    >
      {isElement ? (
        <View>{props.data}</View>
      ) : (
        <Text style={props.textStyle}>{props.data}</Text>
      )}
    </View>
  );
}

function Row(props) {
  return (
    <View style={[styles.row, props.rowStyle]}>
      {props.data.map((cell, i) => {
        return (
          <Cell
            key={i}
            id={i}
            data={cell}
            width={props.columnWidths[i]}
            textStyle={props.textStyle}
          />
        );
      })}
    </View>
  );
}

function Rows(props) {
  return (
    <View style={styles.rows}>
      {props.rows.map((row, i) => {
        const rowStyle = i % 2 ? styles.altRow : styles.row;
        return <Row key={i} data={row} rowStyle={rowStyle} {...props} />;
      })}
    </View>
  );
}

export function Table(props) {
  return (
    <ScrollView horizontal={true}>
      <View style={styles.table}>
        <View style={styles.headers}>
          <Row
            data={props.headers}
            columnWidths={props.columnWidths}
            rowStyle={styles.headerRow}
            textStyle={styles.headerText}
          />
        </View>
        <ScrollView>
          <Rows {...props} />
        </ScrollView>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  table: {},
  headers: {},
  headerRow: {
    height: 50,
    backgroundColor: Constants.darkBg,
  },
  headerText: { fontSize: 14, color: Constants.lightText },
  rows: {},
  row: { flexDirection: "row", backgroundColor: Constants.lightBg },
  altRow: { backgroundColor: "white" },
  cell: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
