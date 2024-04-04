"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { usePokedexStore } from "../globalstate";
import { useDebounce } from "../hooks/useDebounce";
import SearchItem from "./SearchItem";

interface ISearchInput {}

const SearchInput = ({}: ISearchInput) => {
  const { allPokemonName: allPokemon, fetchAllPokemonName: fetchAllPokemon } =
    usePokedexStore((state) => state);
  const [searchQuery, setSearchQuery] = useState("");

  const router = useRouter();
  const searchDebounce = useDebounce<string>(searchQuery);

  const filteredPokemon = allPokemon?.filter((pokemon) =>
    pokemon.name?.includes(searchDebounce)
  );

  useEffect(() => {
    fetchAllPokemon();
  }, []);

  return (
    <div className="flex justify-center rounded-lg relative group">
      <input
        type="text"
        placeholder="Search pokemon by name (minimum 2 characters)"
        className="w-full p-3  rounded-lg border-2 outline-primary "
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      {searchDebounce.length >= 2 && (
        <div className=" bg-white border-2 border-gray-500  w-full max-h-44 absolute top-16 hidden flex-col overflow-auto group-focus-within:flex ">
          {filteredPokemon?.length !== 0 &&
            filteredPokemon?.map((pokemon) => (
              <SearchItem
                key={pokemon.name}
                pokemonName={pokemon.name ?? "No Name"}
                url={`/${pokemon.name}`}
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
