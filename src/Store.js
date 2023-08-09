import { createWithEqualityFn } from "zustand/traditional";

export const useMyTeamStore = createWithEqualityFn((set) => ({
  selectedTeamId: 28,
  setSelectedTeamId: (teamId) => set(() => ({ selectedTeamId: teamId })),
  removeSelectedTeamId: () => set(() => ({ selectedTeamId: null })),
  teams: [],
  setTeams: (teams) => set(() => ({ teams: teams })),
}));
