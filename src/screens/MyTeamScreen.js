import { useState, useEffect } from "react";
import {
  ActivityIndicator,
  ScrollView,
  View,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import * as NhlClient from "../clients/NhlApi";
import * as Theme from "../components/theme";
import { NhlTeamIcon } from "../components/shared/common";
import { useMyTeamStore } from "../Store";

export default function MyTeamScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [teams, setTeams] = useState([[]]);
  const [selectedTeamId, setSelectedTeamId] = useMyTeamStore((state) => [
    state.selectedTeamId,
    state.setSelectedTeamId,
  ]);

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
          <ActivityIndicator size="large" color={Theme.accentColor} />
        </View>
      ) : (
        <ScrollView>
          <View style={styles.container}>
            {teams.map((id) => (
              <TouchableOpacity key={id} onPress={() => setSelectedTeamId(id)}>
                <NhlTeamIcon
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
    backgroundColor: Theme.accentColor,
    borderWidth: 1,
  },
});
