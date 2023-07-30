import { View, Text } from "react-native";

{
  /* todo: get team images for table cells */
}
const TeamIcon = ({ team }) => {
  return (
    <View>
      <Text>{team}</Text>
    </View>
  );
};

function dataToRow(data) {
  if (!data) {
    throw new TypeError("The data passed to dataToRow has an issue");
  }
  return [
    data.team.name,
    //<TeamIcon team={data["team"]["name"]} />,
    data.gamesPlayed,
    data.leagueRecord.wins,
    data.leagueRecord.losses,
    data.leagueRecord.ot,
    data.points,
    Math.round((data.pointsPercentage + Number.EPSILON) * 1000) / 1000,
    data.goalsScored,
    data.goalsAgainst,
    data.goalsScored - data.goalsAgainst,
  ];
}

export async function getStandings() {
  try {
    const response = await fetch(
      "https://statsapi.web.nhl.com/api/v1/standings/byLeague"
    );
    const json = await response.json();
    return json.records[0].teamRecords.map(dataToRow);
  } catch (error) {
    console.error(error);
  }
}

export async function getTeams() {
  try {
    const response = await fetch("https://statsapi.web.nhl.com/api/v1/teams");
    const json = await response.json();
    return json.teams.map((t) => t["id"]);
  } catch (error) {
    console.error(error);
  }
}
//startDate: "2023-01-01"
export async function getGames(startDate) {
  try {
    const response = await fetch(
      `https://statsapi.web.nhl.com/api/v1/schedule?startDate=${startDate}&endDate=${startDate}`
    );
    const json = await response.json();
    return json?.dates[0]?.games;
  } catch (error) {
    console.error(error);
  }
}

export async function getGame(gameId) {
  try {
    const response = await fetch(
      `https://statsapi.web.nhl.com/api/v1/game/${startDate}/feed/live`
    );
    const json = await response.json();
    return json.dates[0].games;
  } catch (error) {
    console.error(error);
  }
}
