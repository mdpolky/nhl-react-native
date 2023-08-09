import Ionicons from "@expo/vector-icons/Ionicons";
import { Image } from "expo-image";
import { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { TouchableHighlight } from "react-native-gesture-handler";
import { useMyTeamStore } from "../../Store";

export const NhlTeamIcon = (props) => {
  return (
    <Image
      contentFit="scale-down"
      source={`https://www-league.nhlstatic.com/images/logos/teams-current-primary-light/${props.id}.svg`}
      {...props}
    />
  );
};

export const PlayerThumbnail = (props) => {
  const imgPath = `https://cms.nhl.bamgrid.com/images/headshots/current/60x60/${props.id}.jpg`;
  const [useDefault, setUseDefault] = useState(false);
  const defaultImgPath =
    "https://cms.nhl.bamgrid.com/images/headshots/current/60x60/skater.jpg";
  useEffect(() => {
    async function checkImage(request) {
      try {
        const response = await fetch(request);
        if (!response.ok) {
          throw new Error("Network response was not OK");
        }
      } catch (error) {
        setUseDefault(true);
      }
    }
    checkImage(imgPath);
  }, []);

  return <Image {...props} source={useDefault ? defaultImgPath : imgPath} />;
};

export function MenuListItem({ item, index, separators, navigation }) {
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

/* menuItems: [{:key "MenuOption1"},...] */
export function MenuList({ navigation, menuItems }) {
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
});
