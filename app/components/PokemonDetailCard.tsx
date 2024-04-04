import Image from "next/image";
import { IPokemon } from "../types";
import PokemonDetailItem from "./PokemonDetailItem";
import PokemonStatItem from "./PokemonStatItem";
import PokemonTypeChip from "./PokemonTypeChip";

interface IPokemonDetailCard {
  pokemon: IPokemon;
}

const PokemonDetailCard = ({ pokemon }: IPokemonDetailCard) => {
  return (
    <div className=" flex flex-1 flex-col rounded-lg bg-gray-600 text-white p-8  gap-7 ">
      <h1 className="font-bold text-4xl capitalize  text-center">
        {pokemon.name}
      </h1>
      <div className="flex flex-col lg:flex-row items-center justify-evenly gap-8 text-xl">
        <Image
          width={300}
          height={300}
          className="max-w-48"
          src={
            pokemon.sprites?.other?.dream_world?.front_default ??
            pokemon.sprites?.front_shiny!
          }
          alt={pokemon.name ?? "No name"}
        />
        <div className="flex flex-col text-black gap-6 bg-white w-fit  p-8 rounded-lg">
          <PokemonDetailItem title="Type">
            {pokemon.types?.map((type) => (
              <PokemonTypeChip title={type.type?.name} key={type.type?.name} />
            ))}
          </PokemonDetailItem>
          <PokemonDetailItem title="Height">{pokemon.height}</PokemonDetailItem>
          <PokemonDetailItem title="Weight">{pokemon.weight}</PokemonDetailItem>
          <div className="flex gap-4 bg-white w-fit flex-col items-center">
            <div className="border-2 border-primary w-full text-center px-4 rounded-lg bg-primary text-white font-bold text-2xl">
              Stats
            </div>
            <div className="flex  max-w-80  gap-5  flex-wrap  text-white">
              <PokemonStatItem
                color="bg-green-600"
                title="HP"
                stat={pokemon.stats![0].base_stat}
              />
              <PokemonStatItem
                color="bg-red-600"
                title="Attack"
                stat={pokemon.stats![1].base_stat}
              />
              <PokemonStatItem
                color="bg-blue-600"
                title="Defense"
                stat={pokemon.stats![2].base_stat}
              />
              <PokemonStatItem
                color="bg-gray-600"
                title="Speed"
                stat={pokemon.stats![5].base_stat}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonDetailCard;
