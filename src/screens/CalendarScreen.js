import React, { useState } from "react";
import { CalendarList } from "react-native-calendars";

export default function CalendarScreen({ navigation, route }) {
  const [selected, setSelected] = useState(
    route.params?.searchDate ? route.params.searchDate : ""
  );
  return (
    <CalendarList
      showScrollIndicator={true}
      horizontal={true}
      pagingEnabled={true}
      onDayPress={(day) => {
        setSelected(day.dateString);
        navigation.navigate("Scores", { searchDate: day.dateString });
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
