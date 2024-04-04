import GoBackButton from "../components/GoBackButton";
import PokemonDetailCard from "../components/PokemonDetailCard";
import SearchInput from "../components/SearchInput";
import { BASE_URL } from "../constant";
import { IPokemon } from "../types";

export const fetchPokemonDetail = async (pokemonName: string) => {
  try {
    const response = await fetch(`${BASE_URL}/pokemon/${pokemonName}`);

    const pokemonDetail = (await response.json()) as IPokemon;

    return pokemonDetail;
  } catch (error) {
    return null;
  }
};

const Page = async ({
  params,
}: {
  params: { pokemonName: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const pokemonDetail = await fetchPokemonDetail(params.pokemonName);

  return (
    <div className="flex flex-col gap-8 mb-6 mx-4 lg:mx-0">
      <GoBackButton pokemonName={params.pokemonName} />

      <div className="w-full flex m-auto ">
        <SearchInput />
      </div>
      <div className="w-full flex m-auto">
        <PokemonDetailCard pokemon={pokemonDetail!} />
      </div>
    </div>
  );
};

export default Page;
