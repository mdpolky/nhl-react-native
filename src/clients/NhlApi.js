export async function getStandings() {
  try {
    const response = await fetch(
      "https://statsapi.web.nhl.com/api/v1/standings/byLeague"
    );
    const json = await response.json();
    return json.records[0].teamRecords;
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
