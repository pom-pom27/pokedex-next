import { BASE_URL } from "../constant";
import { IAllPokemon, IAllPokemonDIO, IPokemon } from "../types";
import PokemonCard from "./PokemonCard";

interface IPokemonList {}

let limit = 20;

const fetchListPokemon = async () => {
  try {
    const allPokemonApi = await fetch(
      `${BASE_URL}/pokemon/?limit=${limit}&offset=${limit}`
    );
    const allPokemon = (await allPokemonApi.json()) as IAllPokemonDIO;

    return allPokemon.results;
  } catch (error) {
    return null;
  }
};

const fetchAllPokemonDetail = async (allPokemon: IAllPokemon[]) => {
  if (allPokemon.length === 0) return;
  const allPokemonDetail: IPokemon[] = [];

  for (const pokemon of allPokemon) {
    const response = await fetch(pokemon.url!);
    const pokemonDetail = (await response.json()) as IPokemon;

    allPokemonDetail.push(pokemonDetail);
  }

  return allPokemonDetail;
};
const PokemonList = async ({}: IPokemonList) => {
  const pokemons = await fetchListPokemon();

  const pokemonAllDetail = await fetchAllPokemonDetail(pokemons ?? []);

  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {pokemons?.map((pokemon, idx) => {
        const pokemonDetail = pokemonAllDetail![idx];

        return (
          <PokemonCard
            pokemonName={pokemonDetail.name}
            pokemonImageUrl={pokemonDetail.sprites?.front_shiny}
            key={pokemon.name}
            pokemonTypes={pokemonDetail.types}
          />
        );
      })}
    </div>
  );
};

export default PokemonList;
