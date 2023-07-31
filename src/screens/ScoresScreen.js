<script src="http://localhost:8097"></script>;
import { useState, useEffect } from "react";
import {
  ActivityIndicator,
  View,
  Text,
  StyleSheet,
  ScrollView,
} from "react-native";
import * as NhlClient from "../clients/NhlApi";
import {
  ScoresHeaderRight,
  ScoresHeaderLeft,
} from "../components/header/Scores";

const GameCard = (props) => {
  const game = props.game;
  const isHomeWin = game.teams.home.score > game.teams.away.score;
  return (
    <View style={styles.gameCardContainer}>
      <View style={styles.leftCard}>
        <Text style={!isHomeWin ? styles.highlightCardValue : styles.cardValue}>
          {game.teams.away.team.name}
        </Text>
        <Text style={isHomeWin ? styles.highlightCardValue : styles.cardValue}>
          {game.teams.home.team.name}
        </Text>
      </View>

      <View style={styles.rightCard}>
        <Text style={!isHomeWin ? styles.highlightCardValue : styles.cardValue}>
          {game.teams.away.score}
        </Text>
        <Text style={isHomeWin ? styles.highlightCardValue : styles.cardValue}>
          {game.teams.home.score}
        </Text>
      </View>
    </View>
  );
};

export default function ScoresScreen({ navigation, route }) {
  const [isLoading, setIsLoading] = useState(true);
  const [games, setGames] = useState([[]]);
  const searchDate = route.params?.searchDate
    ? route.params.searchDate
    : "2023-07-30"; //TODO: should default to today()?

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <ScoresHeaderLeft navigation={navigation} searchDate={searchDate} />
      ),
      headerRight: () => (
        <ScoresHeaderRight navigation={navigation} searchDate={searchDate} />
      ),
    });

    NhlClient.getGames(searchDate).then((result) => {
      setGames(result);
      setIsLoading(false);
    });
  }, [route.params?.searchDate]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {isLoading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#bada55" />
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
    height: 150,
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderBlockColor: "lightgray",
    flexDirection: "row",
    padding: 50,
    backgroundColor: "#fff",
  },
  leftCard: {
    flex: 1,
    justifyContent: "center",
  },
  rightCard: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-end",
  },
  highlightCardValue: {
    fontWeight: "600",
  },
  cardValue: {
    fontWeight: "300",
  },
});
