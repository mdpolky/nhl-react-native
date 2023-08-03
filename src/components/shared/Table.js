import { isValidElement } from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";

function Cell(props) {
  const width = props.width || 50;
  return (
    <View style={[styles.cell, { width: width }]}>
      {isValidElement(props.data) ? (
        <View>{props.data}</View>
      ) : (
        <Text>{props.data}</Text>
      )}
    </View>
  );
}

function Row(props) {
  return (
    <View style={styles.row}>
      {props.data.map((cell, i) => {
        return (
          <Cell key={i} id={i} data={cell} width={props.columnWidths[i]} />
        );
      })}
    </View>
  );
}

function Rows(props) {
  return (
    <View style={styles.rows}>
      {props.rows.map((row, i) => {
        return <Row key={i} data={row} {...props} />;
      })}
    </View>
  );
}

export function Table(props) {
  return (
    <ScrollView horizontal={true}>
      <View style={styles.table}>
        <View style={styles.headers}>
          <Row data={props.headers} columnWidths={props.columnWidths} />
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
  rows: {},
  row: { flexDirection: "row" },
  cell: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
