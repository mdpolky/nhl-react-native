import { Text, View, StyleSheet } from "react-native";

const About = () => {
  return (
    <View style={styles.container}>
      <View style={styles.aboutCard}>
        <Text>NHL React Native App</Text>
        <Text>Created by Matt Polky</Text>
      </View>
    </View>
  );
};

export default function MenuScreen() {
  return <About />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  aboutCard: {
    flex: 1,
    height: 200,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
});
