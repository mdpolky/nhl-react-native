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

const GameCard = (props) => {
  const game = props.game;
  const isHomeWin = game.teams.home.score > game.teams.away.score;
  return (
    <View style={styles.gameContainer}>
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

export default function ScoresScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [startDate, setStartDate] = useState("2023-01-01"); //todo: add datepicker
  const [games, setGames] = useState([[]]);

  useEffect(() => {
    NhlClient.getGames(startDate).then((result) => {
      setGames(result);
      setIsLoading(false);
    });
  }, []);

  return (
    <ScrollView style={styles.container}>
      {isLoading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#bada55" />
        </View>
      ) : (
        <View style={styles.container}>
          {games.map((game) => (
            <GameCard game={game} key={game.gamePk} />
          ))}
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 20,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
  },
  gameContainer: {
    height: 150,
    borderWidth: 5,
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
