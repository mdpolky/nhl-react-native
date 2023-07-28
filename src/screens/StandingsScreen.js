import React, { Component, useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { Table, TableWrapper, Row } from "react-native-reanimated-table";
import * as NhlClient from "../clients/NhlApi";

const StandingsTable = (props) => {
  const tableHead = [
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
  const widthArr = [100, 100, 100, 100, 100, 100, 100, 100, 100, 100];
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

export default function StandingsScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [tableRows, setTableRows] = useState([[]]);

  useEffect(() => {
    NhlClient.getStandings().then((result) => {
      setTableRows(result);
      setIsLoading(false);
    });
  }, []);

  return (
    <View style={styles.container}>
      {isLoading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#bada55" />
        </View>
      ) : (
        <StandingsTable rows={tableRows} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
  },
  headerRow: {
    height: 50,
    backgroundColor: "#cecece",
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
    backgroundColor: "#E7E6E1",
  },
  altRow: {
    backgroundColor: "#F7F6E7",
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
