import { create } from "zustand";
import { BASE_URL } from "./constant";
import { IAllPokemon, IAllPokemonDIO, IPokemon, IPokemonType } from "./types";

type Store = {
  allPokemonName: IAllPokemon[] | null;
  pokemonList: IPokemon[];
  currentPokemon: IPokemon | null;
  fetchAllPokemonName: () => void;
  setFilter: (filter: string) => void;
  error: string | null;
};

export const usePokedexStore = create<Store>()((set) => ({
  allPokemonName: null,
  currentPokemon: null,
  pokemonList: [],
  filterQuery: null,
  setFilter: async (filterNumber) => {
    set(() => ({ error: null }));

    try {
      const allPokemonApi = await fetch(`${BASE_URL}/type/${filterNumber}/`);
      const allPokemon = (await allPokemonApi.json()).pokemon as IPokemonType[];

      // const convertedPokemons: IPokemon[] = allPokemon.map((pokemon) => {
      //   return {};
      // });

      // set(() => ({ allPokemonName: allPokemon }));
    } catch (error) {
      set(() => ({ error: "Error while fetching the data!" }));
    }
  },
  error: null,
  fetchAllPokemonName: async () => {
    set(() => ({ error: null }));

    try {
      const allPokemonApi = await fetch(
        `https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0`
      );
      const allPokemon = (await allPokemonApi.json()) as IAllPokemonDIO;
      set(() => ({ allPokemonName: allPokemon.results }));
    } catch (error) {
      set(() => ({ error: "Error while fetching the data!" }));
    }
  },
  setCurrentPokemon: () =>
    set((state) => ({ currentPokemon: state.currentPokemon })),
}));
