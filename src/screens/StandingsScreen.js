<script src="http://localhost:8097"></script>;
import React, { Component, useState, useEffect } from "react";
import { StyleSheet, View, ScrollView, ActivityIndicator } from "react-native";
import { Table, TableWrapper, Row } from "react-native-reanimated-table";

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
  const rowArray = props.rows || [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]];

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

function dataToRow(data) {
  if (!data) {
    console.log("error with standings data");
    return;
  }
  return [data["team"]["name"], 1, 2, 3, 4, 5, 6, 7, 8, 9];
}

export default function StandingsScreen() {
  const [isLoading, setLoading] = useState(true);
  const [tableRows, setTableRows] = useState([
    ["Boston", 200, 3, 4, 5, 6, 7, 8, 9, 10],
  ]);

  const getStandings = async () => {
    try {
      const response = await fetch(
        "https://statsapi.web.nhl.com/api/v1/standings/byLeague"
      );
      const json = await response.json();
      setTableRows(json.records[0].teamRecords.map(dataToRow));
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getStandings();
  }, []);

  return (
    <View style={styles.container}>
      {isLoading ? <ActivityIndicator /> : <StandingsTable rows={tableRows} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
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
