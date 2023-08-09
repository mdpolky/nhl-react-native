import { Text, View, StyleSheet } from "react-native";
import { MenuList } from "../components/shared/common";

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

export default function MenuScreen({ navigation }) {
  const menuItems = [
    { key: "Stats" },
    { key: "Standings" },
    { key: "Rosters" },
    { key: "Teams" },
  ];
  return <MenuList menuItems={menuItems} navigation={navigation} />;
}

const styles = StyleSheet.create({
  aboutCard: {
    flex: 1,
    height: 200,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
});
