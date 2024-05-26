import { create } from "zustand";
import AI_avatar1 from "@/public/AI_avatar1.svg";

export const useGameSettingsStore = create((set) => ({
  gameSettings: {
    rounds: [3, 5, 7, 10],
    categories: [
      "Name",
      "Animal",
      "Place",
      "Things",
      "Books",
      "Celebrities",
      "Fruits",
      "Subject",
    ],
  },
  userSelected: {
    currentRound: 1,
    selectedRound: 3,
    selectedCategory: [
      "Name",
      "Animal",
      "Place",
      "Things",
      "Books",
      "Celebrities",
      "Fruits",
      "Subject",
    ],
    selectedAIOpponent: [
      {
        src: AI_avatar1,
        alt: "beginner level 1",
        id: "530d13fb-c7e9-4394-ab0a-cfcb82eb8b88",
      },
    ],
  },
  defaultSettings: () =>
    set((state) => ({
      userSelected: {
        currentRound: 1,
        selectedRound: 1,
        selectedCategory: null,
        selectedAIOpponent: null,
      },
    })),
  saveGameSettings: (userSettings) =>
    set((state) => ({
      userSelected: {
        ...state.userSelected,
        selectedRound: userSettings.selectedRound,
        selectedCategory: userSettings.selectedCategory,
        selectedAIOpponent: userSettings.selectedAIOpponent,
      },
    })),
  setCurrentRound: (newRound) =>
    set((state) => ({
      userSelected: {
        ...state.userSelected,
        currentRound: newRound,
      },
    })),
}));
