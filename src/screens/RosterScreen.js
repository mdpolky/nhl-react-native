import { View, ActivityIndicator, StyleSheet } from "react-native";
import { rosterMoq } from "../Store";
import * as Constants from "../components/constants";

export default function RosterScreen() {
  const [isLoading, setIsLoading] = useState(false); //TODO: Wire this up
  const tableRows = rosterMoq;
  return (
    <View style={styles.container}>
      {isLoading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color={Constants.accentColor} />
        </View>
      ) : (
        <RosterTable rows={tableRows} />
      )}
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
});
