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
  const [searchDate, setSearchDate] = useState("2023-07-30");

  if (route.params && route.params.searchDate) {
    setSearchDate(route.params.searchDate);
  }

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
  }, []);

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
    gap: 20,
  },
  noGamesContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  gameCardContainer: {
    height: 150,
    borderWidth: 1,
    flexDirection: "row",
    padding: 50,
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
