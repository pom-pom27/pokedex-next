"use client";
import { pokemonTypes } from "../constant";
import PokemonTypeChip from "./PokemonTypeChip";

interface IFilter {}

const Filter = ({}: IFilter) => {
  return (
    <div className="flex gap-3 flex-col items-center ">
      <div>Filter By: </div>
      <div className="flex gap-3 flex-wrap items-center justify-center">
        <PokemonTypeChip handleClick={() => {}} key="all" title="All" />

        {pokemonTypes.map((type) => (
          <PokemonTypeChip
            key={type.name}
            handleClick={() => {}}
            title={type.name}
          />
        ))}
      </div>
    </div>
  );
};

export default Filter;
