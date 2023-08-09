<script src="http://10.0.0.41:8097"></script>;
import { useState, useEffect } from "react";
import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import * as NhlClient from "../clients/NhlApi";
import * as Theme from "../components/theme";
import { NhlTeamIcon } from "../components/shared/common";
import { useMyTeamStore } from "../Store";

function TeamSelect() {
  const [teams, setSelectedTeamId] = useMyTeamStore((state) => [
    state.teams,
    state.setSelectedTeamId,
  ]);

  return (
    <ScrollView>
      <View style={styles.teamsContainer}>
        {teams.map((id) => (
          <TouchableOpacity key={id} onPress={() => setSelectedTeamId(id)}>
            <NhlTeamIcon style={styles.teamLogo} id={id} />
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

function SelectedTeam() {
  const selectedTeamId = useMyTeamStore((state) => state.selectedTeamId);
  return (
    <View style={{ flex: 1 }}>
      <Text>Sharks</Text>
      <NhlTeamIcon
        id={selectedTeamId}
        style={{ flex: 1, justifyContent: "flex-end" }}
        contentFit="contain"
      />
    </View>
  );
}

export default function MyTeamScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedTeamId, setTeams] = useMyTeamStore((state) => [
    state.selectedTeamId,
    state.setTeams,
  ]);

  useEffect(() => {
    NhlClient.getTeams().then((result) => {
      setTeams(result);
      setIsLoading(false);
    });
  }, []);

  return (
    <View style={styles.container}>
      {(() => {
        if (isLoading) {
          return (
            <View style={styles.loadingContainer}>
              <ActivityIndicator size="large" color={Theme.accentColor} />
            </View>
          );
        } else if (selectedTeamId) {
          return <SelectedTeam />;
        } else {
          return <TeamSelect />;
        }
      })()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
  },
  teamsContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 5,
    padding: 10,
  },
  teamLogo: {
    width: 70,
    height: 70,
  },
});
