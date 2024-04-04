import { create } from "zustand";
import { BASE_URL } from "./constant";
import {
  IAllPokemonDIO,
  IPokemon,
  IPokemonListDb,
  IPokemonType,
} from "./types";

type Store = {
  pokemonListDb: IPokemonListDb[];
  pokemonList: IPokemon[];
  fetchAllPokemonName: () => void;
  setFilter: (filter: string) => void;
  error: string | null;
  fetchPokemonList: () => void;
  setCurrentPokemon: (pokemonName: string) => void;
  currentPokemon: string | null;
};

export const usePokedexStore = create<Store>()((set) => ({
  pokemonListDb: [],
  setCurrentPokemon: (pokemonName) =>
    set(() => ({ currentPokemon: pokemonName })),
  currentPokemon: null,
  fetchPokemonList: async () => {
    try {
      const allPokemonApi = await fetch(
        `${BASE_URL}/pokemon/?limit=20&offset=20`
      );
      const allPokemon = (await allPokemonApi.json()) as IAllPokemonDIO;

      if (allPokemon.results?.length === 0) return;

      const listPokemon: IPokemon[] = [];

      for (const pokemon of allPokemon.results!) {
        const response = await fetch(pokemon.url!);
        const pokemonDetail = (await response.json()) as IPokemon;

        listPokemon.push(pokemonDetail);
      }

      set(() => ({ pokemonList: listPokemon }));
    } catch (error) {
      set(() => ({ error: "Error while fetching data" }));
    }
  },
  pokemonList: [],
  filterQuery: null,
  setFilter: async (filterNumber) => {
    set(() => ({ error: null }));

    try {
      const allPokemonApi = await fetch(`${BASE_URL}/type/${filterNumber}/`);
      const allPokemon = (await allPokemonApi.json()).pokemon as IPokemonType[];
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

      set(() => ({ pokemonListDb: allPokemon.results! }));
    } catch (error) {
      set(() => ({ error: "Error while fetching the data!" }));
    }
  },
}));
