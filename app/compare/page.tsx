"use client";

import { useEffect, useState } from "react";
import { fetchPokemonDetail } from "../[pokemonName]/page";
import GoBackButton from "../components/GoBackButton";
import PokemonDetailCard from "../components/PokemonDetailCard";
import SearchInput from "../components/SearchInput";
import { IPokemon } from "../types";

interface IPage {}

const Page = ({
  params,
  searchParams,
}: {
  params: { pokemonName: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const pokemon1 = searchParams.pokemon1;
  const pokemon2 = searchParams.pokemon2;

  const [pokemonDetail1, setPokemonDetail1] = useState<IPokemon | null>(null);
  const [pokemonDetail2, setPokemonDetail2] = useState<IPokemon | null>(null);

  const pokeDetail1 = async () => {
    const pokemonDetail1 = await fetchPokemonDetail(
      (pokemon1 as string) ?? "bulbasaur"
    );

    setPokemonDetail1(pokemonDetail1);
  };

  const pokeDetail2 = async () => {
    const pokemonDetail2 = await fetchPokemonDetail(pokemon2 as string);

    setPokemonDetail2(pokemonDetail2);
  };

  useEffect(() => {
    pokeDetail1();
  }, [pokemon1]);

  useEffect(() => {
    if (pokemon2) {
      pokeDetail2();
    }
  }, [pokemon2]);

  return (
    <div className="flex flex-col gap-8 mb-6 mx-4 lg:mx-0">
      <GoBackButton />

      <div className="flex gap-8 lg:gap-3 flex-col lg:flex-row">
        <div className="flex-1 gap-5 flex flex-col">
          <div className="w-full flex ">
            <SearchInput pokemonSearchParam="pokemon1" />
          </div>
          {pokemonDetail1 && <PokemonDetailCard pokemon={pokemonDetail1} />}
        </div>
        <div className="flex-1 gap-5 flex flex-col ">
          <div className="w-full flex ">
            <SearchInput pokemonSearchParam="pokemon2" />
          </div>
          {pokemonDetail2 && <PokemonDetailCard pokemon={pokemonDetail2} />}
        </div>
      </div>
    </div>
  );
};

export default Page;
