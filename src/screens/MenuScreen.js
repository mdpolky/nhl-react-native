import { Text, View, StyleSheet, FlatList } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { TouchableHighlight } from "react-native-gesture-handler";
import { useMyTeamStore } from "../Store";

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

function MenuListItem({ item, index, separators, navigation }) {
  const selectedTeamId = useMyTeamStore((state) => state.selectedTeamId);
  const navigateTo = () => {
    switch (item.key) {
      case "Rosters":
        navigation.navigate("Roster", { teamId: selectedTeamId });
        break;
      default:
        console.log(`case for ${item.key} missing in MenuScreen`);
    }
  };

  return (
    <TouchableHighlight
      key={item.key}
      onPress={navigateTo}
      underlayColor="lightgray"
      onShowUnderlay={separators.highlight}
      onHideUnderlay={separators.unhighlight}
    >
      <View style={styles.itemContainer}>
        <Text style={styles.itemText}>{item.key}</Text>
        <Ionicons name="ios-arrow-forward" size={24} color="gray" />
      </View>
    </TouchableHighlight>
  );
}

export default function MenuScreen({ navigation }) {
  const menuItems = [
    { key: "Stats" },
    { key: "Standings" },
    { key: "Rosters" },
    { key: "Teams" },
  ];
  return (
    <View style={styles.container}>
      <FlatList
        data={menuItems}
        renderItem={(props) => (
          <MenuListItem {...props} navigation={navigation} />
        )}
        ItemSeparatorComponent={(props) => {
          return (
            <View
              style={{
                height: 1,
                backgroundColor: props.highlighted ? "lightgray" : "gray",
              }}
            />
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  itemText: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  aboutCard: {
    flex: 1,
    height: 200,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
});
