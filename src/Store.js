import { createWithEqualityFn } from "zustand/traditional";

export const useMyTeamStore = createWithEqualityFn((set) => ({
  selectedTeamId: null, //TODO: start as null
  setSelectedTeamId: (teamId) => set(() => ({ selectedTeamId: teamId })),
  removeSelectedTeamId: () => set(() => ({ selectedTeamId: null })),
}));
