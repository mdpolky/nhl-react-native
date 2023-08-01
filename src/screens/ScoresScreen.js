import { useState, useEffect } from "react";
import {
  ActivityIndicator,
  View,
  Text,
  StyleSheet,
  ScrollView,
} from "react-native";
import * as NhlClient from "../clients/NhlApi";
import { ScoresHeader } from "../components/header/Scores";
import * as Constants from "../components/constants";
import { NhlTeamIcon } from "../components/shared/common";

const GameCard = (props) => {
  const game = props.game;
  const teamIconSize = 75;
  const isHomeWin = game.teams.home.score > game.teams.away.score;
  return (
    <View style={styles.gameCardContainer}>
      <View style={styles.teamRow}>
        <NhlTeamIcon
          style={{ width: teamIconSize, height: teamIconSize }}
          id={game.teams.away.team.id}
        />
        <Text style={!isHomeWin ? styles.highlightTeamValue : styles.teamValue}>
          {game.teams.away.team.name}
        </Text>
        <Text
          style={!isHomeWin ? styles.highlightScoreValue : styles.scoreValue}
        >
          {game.teams.away.score}
        </Text>
      </View>
      <View style={styles.teamRow}>
        <NhlTeamIcon
          style={{ width: teamIconSize, height: teamIconSize }}
          id={game.teams.home.team.id}
        />
        <Text style={isHomeWin ? styles.highlightTeamValue : styles.teamValue}>
          {game.teams.home.team.name}
        </Text>
        <Text
          style={isHomeWin ? styles.highlightScoreValue : styles.scoreValue}
        >
          {game.teams.home.score}
        </Text>
      </View>
    </View>
  );
};

export default function ScoresScreen({ navigation, route }) {
  const [isLoading, setIsLoading] = useState(true);
  const [games, setGames] = useState([[]]);
  const [searchDate, setSearchDate] = useState(
    route.params?.searchDate ? route.params.searchDate : "2023-01-01" //TODO: should this default to today()?
  );
  useEffect(() => {
    if (route.params) setSearchDate(route.params.searchDate);
    navigation.setOptions({
      header: (props) => <ScoresHeader {...props} searchDate={searchDate} />,
    });

    NhlClient.getGames(searchDate).then((result) => {
      setGames(result);
      setIsLoading(false);
    });
  });

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {isLoading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color={Constants.accentColor} />
        </View>
      ) : games ? (
        <View style={styles.gamesContainer}>
          {games.map((game) => (
            <GameCard game={game} key={game.gamePk} />
          ))}
        </View>
      ) : (
        <View style={styles.noGamesContainer}>
          <Text>No games today</Text>
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  gamesContainer: {
    flex: 1,
    gap: 10,
    alignItems: "space-between",
    marginTop: 10,
  },
  noGamesContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  gameCardContainer: {
    height: 170,
    width: "100%",
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderBlockColor: "lightgray",
    padding: 10,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  teamRow: { flexDirection: "row" },
  rightCard: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-end",
  },
  highlightTeamValue: {
    fontWeight: "600",
    alignSelf: "center",
  },
  teamValue: {
    fontWeight: "300",
    alignSelf: "center",
  },
  highlightScoreValue: {
    fontWeight: "600",
    alignSelf: "center",
    marginLeft: "auto",
    fontSize: 24,
  },
  scoreValue: {
    fontWeight: "300",
    alignSelf: "center",
    marginLeft: "auto",
    fontSize: 24,
  },
});
