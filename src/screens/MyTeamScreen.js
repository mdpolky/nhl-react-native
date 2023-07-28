<script src="http://localhost:8097"></script>;
import { useState, useEffect } from "react";
import { ActivityIndicator, View, StyleSheet } from "react-native";
import { SvgUri } from "react-native-svg";
import * as NhlClient from "../clients/NhlApi";

export default function MyTeamScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [teams, setTeams] = useState([[]]);
  const [selectedTeamId, setSelectedTeamId] = useState(28);

  useEffect(() => {
    NhlClient.getTeams().then((result) => {
      setIsLoading(false);
      setTeams(result);
    });
  }, []);

  return (
    <View style={styles.container}>
      {isLoading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#bada55" />
        </View>
      ) : (
        <View style={styles.container}>
          {teams.map((id) => (
            <SvgUri
              style={
                id === selectedTeamId
                  ? styles.selectedTeamLogo
                  : styles.teamLogo
              }
              key={id}
              uri={`https://www-league.nhlstatic.com/images/logos/teams-current-primary-light/${id}.svg`}
            />
          ))}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  teamLogo: {
    width: 80,
    height: 80,
  },
  selectedTeamLogo: {
    width: 80,
    height: 80,
    backgroundColor: "#bada55",
  },
});
