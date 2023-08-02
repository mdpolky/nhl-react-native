import { createWithEqualityFn } from "zustand/traditional";

export const useMyTeamStore = createWithEqualityFn((set) => ({
  selectedTeamId: null,
  setSelectedTeamId: (teamId) => set(() => ({ selectedTeamId: teamId })),
  removeSelectedTeamId: () => set(() => ({ selectedTeamId: null })),
}));

export const rosterMoq = [
  {
    person: {
      id: 8479316,
      fullName: "Luke Kunin",
      link: "/api/v1/people/8479316",
      firstName: "Luke",
      lastName: "Kunin",
      primaryNumber: "11",
      birthDate: "1997-12-04",
      currentAge: 25,
      birthCity: "Chesterfield",
      birthStateProvince: "MO",
      birthCountry: "USA",
      nationality: "USA",
      height: "6' 0\"",
      weight: 197,
      active: true,
      alternateCaptain: false,
      captain: false,
      rookie: false,
      shootsCatches: "R",
      rosterStatus: "I",
      currentTeam: {
        id: 28,
        name: "San Jose Sharks",
        link: "/api/v1/teams/28",
      },
      primaryPosition: {
        code: "C",
        name: "Center",
        type: "Forward",
        abbreviation: "C",
      },
    },
    jerseyNumber: "11",
    position: {
      code: "C",
      name: "Center",
      type: "Forward",
      abbreviation: "C",
    },
  },
  {
    person: {
      id: 8471709,
      fullName: "Marc-Edouard Vlasic",
      link: "/api/v1/people/8471709",
      firstName: "Marc-Edouard",
      lastName: "Vlasic",
      primaryNumber: "44",
      birthDate: "1987-03-30",
      currentAge: 36,
      birthCity: "Montréal",
      birthStateProvince: "QC",
      birthCountry: "CAN",
      nationality: "CAN",
      height: "6' 1\"",
      weight: 205,
      active: true,
      alternateCaptain: false,
      captain: false,
      rookie: false,
      shootsCatches: "L",
      rosterStatus: "Y",
      currentTeam: {
        id: 28,
        name: "San Jose Sharks",
        link: "/api/v1/teams/28",
      },
      primaryPosition: {
        code: "D",
        name: "Defenseman",
        type: "Defenseman",
        abbreviation: "D",
      },
    },
    jerseyNumber: "44",
    position: {
      code: "D",
      name: "Defenseman",
      type: "Defenseman",
      abbreviation: "D",
    },
  },
  {
    person: {
      id: 8474053,
      fullName: "Logan Couture",
      link: "/api/v1/people/8474053",
      firstName: "Logan",
      lastName: "Couture",
      primaryNumber: "39",
      birthDate: "1989-03-28",
      currentAge: 34,
      birthCity: "Guelph",
      birthStateProvince: "ON",
      birthCountry: "CAN",
      nationality: "CAN",
      height: "6' 1\"",
      weight: 206,
      active: true,
      alternateCaptain: false,
      captain: true,
      rookie: false,
      shootsCatches: "L",
      rosterStatus: "Y",
      currentTeam: {
        id: 28,
        name: "San Jose Sharks",
        link: "/api/v1/teams/28",
      },
      primaryPosition: {
        code: "C",
        name: "Center",
        type: "Forward",
        abbreviation: "C",
      },
    },
    jerseyNumber: "39",
    position: {
      code: "C",
      name: "Center",
      type: "Forward",
      abbreviation: "C",
    },
  },
  {
    person: {
      id: 8474578,
      fullName: "Erik Karlsson",
      link: "/api/v1/people/8474578",
      firstName: "Erik",
      lastName: "Karlsson",
      primaryNumber: "65",
      birthDate: "1990-05-31",
      currentAge: 33,
      birthCity: "Landsbro",
      birthCountry: "SWE",
      nationality: "SWE",
      height: "6' 0\"",
      weight: 190,
      active: true,
      alternateCaptain: true,
      captain: false,
      rookie: false,
      shootsCatches: "R",
      rosterStatus: "Y",
      currentTeam: {
        id: 28,
        name: "San Jose Sharks",
        link: "/api/v1/teams/28",
      },
      primaryPosition: {
        code: "D",
        name: "Defenseman",
        type: "Defenseman",
        abbreviation: "D",
      },
    },
    jerseyNumber: "65",
    position: {
      code: "D",
      name: "Defenseman",
      type: "Defenseman",
      abbreviation: "D",
    },
  },
  {
    person: {
      id: 8476881,
      fullName: "Tomas Hertl",
      link: "/api/v1/people/8476881",
      firstName: "Tomas",
      lastName: "Hertl",
      primaryNumber: "48",
      birthDate: "1993-11-12",
      currentAge: 29,
      birthCity: "Praha",
      birthCountry: "CZE",
      nationality: "CZE",
      height: "6' 3\"",
      weight: 215,
      active: true,
      alternateCaptain: true,
      captain: false,
      rookie: false,
      shootsCatches: "L",
      rosterStatus: "Y",
      currentTeam: {
        id: 28,
        name: "San Jose Sharks",
        link: "/api/v1/teams/28",
      },
      primaryPosition: {
        code: "C",
        name: "Center",
        type: "Forward",
        abbreviation: "C",
      },
    },
    jerseyNumber: "48",
    position: {
      code: "C",
      name: "Center",
      type: "Forward",
      abbreviation: "C",
    },
  },
  {
    person: {
      id: 8476988,
      fullName: "Matt Benning",
      link: "/api/v1/people/8476988",
      firstName: "Matt",
      lastName: "Benning",
      primaryNumber: "5",
      birthDate: "1994-05-25",
      currentAge: 29,
      birthCity: "Edmonton",
      birthStateProvince: "AB",
      birthCountry: "CAN",
      nationality: "CAN",
      height: "6' 1\"",
      weight: 203,
      active: true,
      alternateCaptain: false,
      captain: false,
      rookie: false,
      shootsCatches: "R",
      rosterStatus: "Y",
      currentTeam: {
        id: 28,
        name: "San Jose Sharks",
        link: "/api/v1/teams/28",
      },
      primaryPosition: {
        code: "D",
        name: "Defenseman",
        type: "Defenseman",
        abbreviation: "D",
      },
    },
    jerseyNumber: "5",
    position: {
      code: "D",
      name: "Defenseman",
      type: "Defenseman",
      abbreviation: "D",
    },
  },
  {
    person: {
      id: 8477335,
      fullName: "Kyle Burroughs",
      link: "/api/v1/people/8477335",
      firstName: "Kyle",
      lastName: "Burroughs",
      primaryNumber: "44",
      birthDate: "1995-07-12",
      currentAge: 28,
      birthCity: "Vancouver",
      birthStateProvince: "BC",
      birthCountry: "CAN",
      nationality: "CAN",
      height: "6' 0\"",
      weight: 193,
      active: true,
      alternateCaptain: false,
      captain: false,
      rookie: false,
      shootsCatches: "R",
      rosterStatus: "Y",
      currentTeam: {
        id: 28,
        name: "San Jose Sharks",
        link: "/api/v1/teams/28",
      },
      primaryPosition: {
        code: "D",
        name: "Defenseman",
        type: "Defenseman",
        abbreviation: "D",
      },
    },
    jerseyNumber: "44",
    position: {
      code: "D",
      name: "Defenseman",
      type: "Defenseman",
      abbreviation: "D",
    },
  },
  {
    person: {
      id: 8477407,
      fullName: "Anthony Duclair",
      link: "/api/v1/people/8477407",
      firstName: "Anthony",
      lastName: "Duclair",
      primaryNumber: "10",
      birthDate: "1995-08-26",
      currentAge: 27,
      birthCity: "Pointe-Claire",
      birthStateProvince: "QC",
      birthCountry: "CAN",
      nationality: "CAN",
      height: "5' 11\"",
      weight: 197,
      active: true,
      alternateCaptain: false,
      captain: false,
      rookie: false,
      shootsCatches: "L",
      rosterStatus: "Y",
      currentTeam: {
        id: 28,
        name: "San Jose Sharks",
        link: "/api/v1/teams/28",
      },
      primaryPosition: {
        code: "L",
        name: "Left Wing",
        type: "Forward",
        abbreviation: "LW",
      },
    },
    jerseyNumber: "10",
    position: {
      code: "L",
      name: "Left Wing",
      type: "Forward",
      abbreviation: "LW",
    },
  },
  {
    person: {
      id: 8478039,
      fullName: "Kaapo Kahkonen",
      link: "/api/v1/people/8478039",
      firstName: "Kaapo",
      lastName: "Kahkonen",
      primaryNumber: "36",
      birthDate: "1996-08-16",
      currentAge: 26,
      birthCity: "Helsinki",
      birthCountry: "FIN",
      nationality: "FIN",
      height: "6' 2\"",
      weight: 217,
      active: true,
      alternateCaptain: false,
      captain: false,
      rookie: false,
      shootsCatches: "L",
      rosterStatus: "Y",
      currentTeam: {
        id: 28,
        name: "San Jose Sharks",
        link: "/api/v1/teams/28",
      },
      primaryPosition: {
        code: "G",
        name: "Goalie",
        type: "Goalie",
        abbreviation: "G",
      },
    },
    jerseyNumber: "36",
    position: {
      code: "G",
      name: "Goalie",
      type: "Goalie",
      abbreviation: "G",
    },
  },
  {
    person: {
      id: 8478067,
      fullName: "Oskar Lindblom",
      link: "/api/v1/people/8478067",
      firstName: "Oskar",
      lastName: "Lindblom",
      primaryNumber: "23",
      birthDate: "1996-08-15",
      currentAge: 26,
      birthCity: "Gavle",
      birthCountry: "SWE",
      nationality: "SWE",
      height: "6' 1\"",
      weight: 191,
      active: true,
      alternateCaptain: false,
      captain: false,
      rookie: false,
      shootsCatches: "L",
      rosterStatus: "Y",
      currentTeam: {
        id: 28,
        name: "San Jose Sharks",
        link: "/api/v1/teams/28",
      },
      primaryPosition: {
        code: "L",
        name: "Left Wing",
        type: "Forward",
        abbreviation: "LW",
      },
    },
    jerseyNumber: "23",
    position: {
      code: "L",
      name: "Left Wing",
      type: "Forward",
      abbreviation: "LW",
    },
  },
  {
    person: {
      id: 8478099,
      fullName: "Kevin Labanc",
      link: "/api/v1/people/8478099",
      firstName: "Kevin",
      lastName: "Labanc",
      primaryNumber: "62",
      birthDate: "1995-12-12",
      currentAge: 27,
      birthCity: "Brooklyn",
      birthStateProvince: "NY",
      birthCountry: "USA",
      nationality: "USA",
      height: "5' 11\"",
      weight: 185,
      active: true,
      alternateCaptain: false,
      captain: false,
      rookie: false,
      shootsCatches: "R",
      rosterStatus: "Y",
      currentTeam: {
        id: 28,
        name: "San Jose Sharks",
        link: "/api/v1/teams/28",
      },
      primaryPosition: {
        code: "R",
        name: "Right Wing",
        type: "Forward",
        abbreviation: "RW",
      },
    },
    jerseyNumber: "62",
    position: {
      code: "R",
      name: "Right Wing",
      type: "Forward",
      abbreviation: "RW",
    },
  },
  {
    person: {
      id: 8478406,
      fullName: "Mackenzie Blackwood",
      link: "/api/v1/people/8478406",
      firstName: "Mackenzie",
      lastName: "Blackwood",
      primaryNumber: "29",
      birthDate: "1996-12-09",
      currentAge: 26,
      birthCity: "Thunder Bay",
      birthStateProvince: "ON",
      birthCountry: "CAN",
      nationality: "CAN",
      height: "6' 4\"",
      weight: 225,
      active: true,
      alternateCaptain: false,
      captain: false,
      rookie: false,
      shootsCatches: "L",
      rosterStatus: "Y",
      currentTeam: {
        id: 28,
        name: "San Jose Sharks",
        link: "/api/v1/teams/28",
      },
      primaryPosition: {
        code: "G",
        name: "Goalie",
        type: "Goalie",
        abbreviation: "G",
      },
    },
    jerseyNumber: "29",
    position: {
      code: "G",
      name: "Goalie",
      type: "Goalie",
      abbreviation: "G",
    },
  },
  {
    person: {
      id: 8479379,
      fullName: "Givani Smith",
      link: "/api/v1/people/8479379",
      firstName: "Givani",
      lastName: "Smith",
      primaryNumber: "54",
      birthDate: "1998-02-27",
      currentAge: 25,
      birthCity: "Toronto",
      birthStateProvince: "ON",
      birthCountry: "CAN",
      nationality: "CAN",
      height: "6' 2\"",
      weight: 214,
      active: true,
      alternateCaptain: false,
      captain: false,
      rookie: false,
      shootsCatches: "L",
      rosterStatus: "Y",
      currentTeam: {
        id: 28,
        name: "San Jose Sharks",
        link: "/api/v1/teams/28",
      },
      primaryPosition: {
        code: "R",
        name: "Right Wing",
        type: "Forward",
        abbreviation: "RW",
      },
    },
    jerseyNumber: "54",
    position: {
      code: "R",
      name: "Right Wing",
      type: "Forward",
      abbreviation: "RW",
    },
  },
  {
    person: {
      id: 8479439,
      fullName: "Jacob MacDonald",
      link: "/api/v1/people/8479439",
      firstName: "Jacob",
      lastName: "MacDonald",
      primaryNumber: "9",
      birthDate: "1993-02-26",
      currentAge: 30,
      birthCity: "Portland",
      birthStateProvince: "OR",
      birthCountry: "USA",
      nationality: "USA",
      height: "6' 0\"",
      weight: 204,
      active: true,
      alternateCaptain: false,
      captain: false,
      rookie: false,
      shootsCatches: "L",
      rosterStatus: "Y",
      currentTeam: {
        id: 28,
        name: "San Jose Sharks",
        link: "/api/v1/teams/28",
      },
      primaryPosition: {
        code: "D",
        name: "Defenseman",
        type: "Defenseman",
        abbreviation: "D",
      },
    },
    jerseyNumber: "9",
    position: {
      code: "D",
      name: "Defenseman",
      type: "Defenseman",
      abbreviation: "D",
    },
  },
  {
    person: {
      id: 8479983,
      fullName: "Mario Ferraro",
      link: "/api/v1/people/8479983",
      firstName: "Mario",
      lastName: "Ferraro",
      primaryNumber: "38",
      birthDate: "1998-09-17",
      currentAge: 24,
      birthCity: "Toronto",
      birthStateProvince: "ON",
      birthCountry: "CAN",
      nationality: "CAN",
      height: "6' 0\"",
      weight: 209,
      active: true,
      alternateCaptain: false,
      captain: false,
      rookie: false,
      shootsCatches: "L",
      rosterStatus: "Y",
      currentTeam: {
        id: 28,
        name: "San Jose Sharks",
        link: "/api/v1/teams/28",
      },
      primaryPosition: {
        code: "D",
        name: "Defenseman",
        type: "Defenseman",
        abbreviation: "D",
      },
    },
    jerseyNumber: "38",
    position: {
      code: "D",
      name: "Defenseman",
      type: "Defenseman",
      abbreviation: "D",
    },
  },
  {
    person: {
      id: 8480160,
      fullName: "Radim Simek",
      link: "/api/v1/people/8480160",
      firstName: "Radim",
      lastName: "Simek",
      primaryNumber: "51",
      birthDate: "1992-09-20",
      currentAge: 30,
      birthCity: "Mlada Boleslav",
      birthCountry: "CZE",
      nationality: "CZE",
      height: "6' 0\"",
      weight: 204,
      active: true,
      alternateCaptain: false,
      captain: false,
      rookie: false,
      shootsCatches: "L",
      rosterStatus: "Y",
      currentTeam: {
        id: 28,
        name: "San Jose Sharks",
        link: "/api/v1/teams/28",
      },
      primaryPosition: {
        code: "D",
        name: "Defenseman",
        type: "Defenseman",
        abbreviation: "D",
      },
    },
    jerseyNumber: "51",
    position: {
      code: "D",
      name: "Defenseman",
      type: "Defenseman",
      abbreviation: "D",
    },
  },
  {
    person: {
      id: 8480216,
      fullName: "Jacob Peterson",
      link: "/api/v1/people/8480216",
      firstName: "Jacob",
      lastName: "Peterson",
      primaryNumber: "24",
      birthDate: "1999-07-19",
      currentAge: 24,
      birthCity: "Lidkoping",
      birthCountry: "SWE",
      nationality: "SWE",
      height: "6' 1\"",
      weight: 180,
      active: true,
      alternateCaptain: false,
      captain: false,
      rookie: false,
      shootsCatches: "L",
      rosterStatus: "Y",
      currentTeam: {
        id: 28,
        name: "San Jose Sharks",
        link: "/api/v1/teams/28",
      },
      primaryPosition: {
        code: "C",
        name: "Center",
        type: "Forward",
        abbreviation: "C",
      },
    },
    jerseyNumber: "24",
    position: {
      code: "C",
      name: "Center",
      type: "Forward",
      abbreviation: "C",
    },
  },
  {
    person: {
      id: 8481477,
      fullName: "Nico Sturm",
      link: "/api/v1/people/8481477",
      firstName: "Nico",
      lastName: "Sturm",
      primaryNumber: "7",
      birthDate: "1995-05-03",
      currentAge: 28,
      birthCity: "Augsburg",
      birthCountry: "DEU",
      nationality: "DEU",
      height: "6' 3\"",
      weight: 209,
      active: true,
      alternateCaptain: false,
      captain: false,
      rookie: false,
      shootsCatches: "L",
      rosterStatus: "Y",
      currentTeam: {
        id: 28,
        name: "San Jose Sharks",
        link: "/api/v1/teams/28",
      },
      primaryPosition: {
        code: "C",
        name: "Center",
        type: "Forward",
        abbreviation: "C",
      },
    },
    jerseyNumber: "7",
    position: {
      code: "C",
      name: "Center",
      type: "Forward",
      abbreviation: "C",
    },
  },
  {
    person: {
      id: 8481567,
      fullName: "Henry Thrun",
      link: "/api/v1/people/8481567",
      firstName: "Henry",
      lastName: "Thrun",
      primaryNumber: "3",
      birthDate: "2001-03-12",
      currentAge: 22,
      birthCity: "Southborough",
      birthStateProvince: "MA",
      birthCountry: "USA",
      nationality: "USA",
      height: "6' 2\"",
      weight: 190,
      active: true,
      alternateCaptain: false,
      captain: false,
      rookie: true,
      shootsCatches: "L",
      rosterStatus: "Y",
      currentTeam: {
        id: 28,
        name: "San Jose Sharks",
        link: "/api/v1/teams/28",
      },
      primaryPosition: {
        code: "D",
        name: "Defenseman",
        type: "Defenseman",
        abbreviation: "D",
      },
    },
    jerseyNumber: "3",
    position: {
      code: "D",
      name: "Defenseman",
      type: "Defenseman",
      abbreviation: "D",
    },
  },
  {
    person: {
      id: 8481812,
      fullName: "Nikolai Knyzhov",
      link: "/api/v1/people/8481812",
      firstName: "Nikolai",
      lastName: "Knyzhov",
      primaryNumber: "71",
      birthDate: "1998-03-20",
      currentAge: 25,
      birthCity: "Kemerovo",
      birthCountry: "RUS",
      nationality: "RUS",
      height: "6' 3\"",
      weight: 222,
      active: true,
      alternateCaptain: false,
      captain: false,
      rookie: false,
      shootsCatches: "L",
      rosterStatus: "Y",
      currentTeam: {
        id: 28,
        name: "San Jose Sharks",
        link: "/api/v1/teams/28",
      },
      primaryPosition: {
        code: "D",
        name: "Defenseman",
        type: "Defenseman",
        abbreviation: "D",
      },
    },
    jerseyNumber: "71",
    position: {
      code: "D",
      name: "Defenseman",
      type: "Defenseman",
      abbreviation: "D",
    },
  },
  {
    person: {
      id: 8482222,
      fullName: "Alexander Barabanov",
      link: "/api/v1/people/8482222",
      firstName: "Alexander",
      lastName: "Barabanov",
      primaryNumber: "94",
      birthDate: "1994-06-17",
      currentAge: 29,
      birthCity: "St. Petersburg",
      birthCountry: "RUS",
      nationality: "RUS",
      height: "5' 10\"",
      weight: 195,
      active: true,
      alternateCaptain: false,
      captain: false,
      rookie: false,
      shootsCatches: "L",
      rosterStatus: "Y",
      currentTeam: {
        id: 28,
        name: "San Jose Sharks",
        link: "/api/v1/teams/28",
      },
      primaryPosition: {
        code: "L",
        name: "Left Wing",
        type: "Forward",
        abbreviation: "LW",
      },
    },
    jerseyNumber: "94",
    position: {
      code: "L",
      name: "Left Wing",
      type: "Forward",
      abbreviation: "LW",
    },
  },
];

export const useRoster = createWithEqualityFn((set) => ({
  roster: null,
  fetch: async (teamId) => {
    const response = await fetch(teamId);
    set({ roster: await response.json() });
  },
}));
