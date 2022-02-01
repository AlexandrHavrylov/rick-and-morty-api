import { createSlice } from "@reduxjs/toolkit";
import { fetchCharacters } from "./api-operations.js";

const initialState = {
  characters: [],
  characterToFind: {
    name: "",
    gender: "",
    status: "",
  },
  isLoading: false,
  curentPage: 1,
  filter: {
    name: "",
    gender: "",
    status: "",
  },
};

export const apiSlice = createSlice({
  name: "rickAndMortyAPI",
  initialState,
  reducers: {
    setPage: (state, action) => {
      state.curentPage = action.payload;
    },
    setCharacterToFind: (state, action) => {
      state.characterToFind = action.payload;
    },
    resetCharacters: (state) => {
      state.characters = [];
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
  extraReducers: {
    [fetchCharacters.pending](state, _) {
      state.isLoading = true;
    },

    [fetchCharacters.fulfilled](state, action) {
      state.characters = [...state.characters, ...action.payload];
      state.isLoading = false;
    },

    [fetchCharacters.rejected](state, _) {
      state.isLoading = false;
    },
  },
});

export const { setPage, setCharacterToFind, resetCharacters, setFilter } =
  apiSlice.actions;
