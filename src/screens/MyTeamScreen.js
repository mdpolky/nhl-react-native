import { useState, useEffect } from "react";
import {
  ActivityIndicator,
  ScrollView,
  View,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import * as NhlClient from "../clients/NhlApi";
import * as Constants from "../components/constants";
import { NhlTeamSvg } from "../components/shared/common";

export default function MyTeamScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [teams, setTeams] = useState([[]]);
  const [selectedTeamId, setSelectedTeamId] = useState(28);

  useEffect(() => {
    NhlClient.getTeams().then((result) => {
      setTeams(result);
      setIsLoading(false);
    });
  }, []);

  return (
    <View style={styles.container}>
      {isLoading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color={Constants.accentColor} />
        </View>
      ) : (
        <ScrollView>
          <View style={styles.container}>
            {teams.map((id) => (
              <TouchableOpacity key={id} onPress={() => setSelectedTeamId(id)}>
                <NhlTeamSvg
                  style={
                    id === selectedTeamId
                      ? styles.selectedTeamLogo
                      : styles.teamLogo
                  }
                  id={id}
                />
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
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
    backgroundColor: "white",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
  },
  teamLogo: {
    width: 80,
    height: 80,
  },
  selectedTeamLogo: {
    width: 80,
    height: 80,
    backgroundColor: Constants.accentColor,
    borderWidth: 1,
  },
});
