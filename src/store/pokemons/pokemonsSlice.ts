import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SimplePokemon } from "@/pokemons";

interface PokemonState {
  favorites: {
    [key: string]: SimplePokemon;
  };
}

/* const getInitialState = (): PokemonState => {
  return JSON.parse(localStorage.getItem("favorite-pokemons") ?? "{}");
}; */

const initialState: PokemonState = {
  favorites: {},
  // ...getInitialState(),
  /* "4": { id: "4", name: "charmander" },
  "7": { id: "7", name: "squirtle" },
  "94": { id: "94", name: "gengar" }, */
};

const pokemonsSlice = createSlice({
  name: "pokemons",
  initialState,
  reducers: {
    setFavorites(state, action: PayloadAction<{ [key: string]: SimplePokemon }>) {
      state.favorites = action.payload;
    },
    toggleFavorite(state, action: PayloadAction<SimplePokemon>) {
      const pokemon = action.payload;
      const { id } = pokemon;

      if (!!state.favorites[id]) {
        delete state.favorites[id];
        // return;
      } else {
        state.favorites[id] = pokemon;
      }

      //! This is not allowed in REDUX
      localStorage.setItem("favorite-pokemons", JSON.stringify(state.favorites));
    },
  },
});

export const { toggleFavorite, setFavorites } = pokemonsSlice.actions;

export default pokemonsSlice.reducer;
