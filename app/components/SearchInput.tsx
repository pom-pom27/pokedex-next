"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { useShallow } from "zustand/react/shallow";
import { usePokedexStore } from "../globalstate";
import { useDebounce } from "../hooks/useDebounce";
import SearchItem from "./SearchItem";

interface ISearchInput {
  pokemonSearchParam?: string;
}

const SearchInput = ({ pokemonSearchParam }: ISearchInput) => {
  const { pokemonListDb, fetchAllPokemonName } = usePokedexStore(
    useShallow((state) => ({
      pokemonListDb: state.pokemonListDb,
      fetchAllPokemonName: state.fetchAllPokemonName,
    }))
  );

  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  useEffect(() => {
    fetchAllPokemonName();
  }, []);

  const [searchQuery, setSearchQuery] = useState("");

  const searchDebounce = useDebounce<string>(searchQuery);

  const filteredPokemon = pokemonListDb?.filter((pokemon) =>
    pokemon.name?.includes(searchDebounce)
  );

  const isCompare = pathname === "/compare";

  return (
    <div className="flex justify-center rounded-lg relative group w-full">
      <input
        type="text"
        placeholder="Search pokemon by name (minimum 2 characters)"
        className="w-full p-3  rounded-lg border-2 outline-primary border-gray-500 placeholder:text-gray-500 dark:text-black"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      {searchDebounce.length >= 2 && (
        <div className=" bg-white border-2 border-gray-500  w-full max-h-44 absolute top-16 hidden flex-col overflow-auto group-focus-within:flex dark:text-black ">
          {filteredPokemon?.length !== 0 &&
            filteredPokemon?.map((pokemon) => (
              <SearchItem
                key={pokemon.name}
                pokemonName={pokemon.name ?? "No Name"}
                url={
                  !isCompare
                    ? `${pokemon.name}`
                    : `${pathname}?${createQueryString(
                        pokemonSearchParam!,
                        pokemon.name!
                      )}`
                }
              />
            ))}
          {filteredPokemon?.length === 0 && (
            <SearchItem pokemonName="Pokemon not found" />
          )}
        </div>
      )}
    </div>
  );
};

export default SearchInput;
