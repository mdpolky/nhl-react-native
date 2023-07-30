import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { CalendarList } from "react-native-calendars";

export default function CalendarScreen({ navigation, route }) {
  const [selected, setSelected] = useState(
    route.params && route.params.searchDate ? route.params.searchDate : ""
  );
  return (
    <CalendarList
      showScrollIndicator={true}
      horizontal={true}
      pagingEnabled={true}
      onDayPress={(day) => {
        setSelected(day.dateString);
      }}
      markedDates={{
        [selected]: {
          selected: true,
          disableTouchEvent: true,
        },
      }}
    />
  );
}

const styles = StyleSheet.create({});
