import { createWithEqualityFn } from "zustand/traditional";

export const useMyTeamStore = createWithEqualityFn((set) => ({
  selectedTeamId: null,
  setSelectedTeamId: (teamId) => set(() => ({ selectedTeamId: teamId })),
  removeSelectedTeamId: () => set(() => ({ selectedTeamId: null })),
}));
