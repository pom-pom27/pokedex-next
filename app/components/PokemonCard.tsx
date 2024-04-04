import Image from "next/image";
import Link from "next/link";
import { Type } from "../types";
import PokemonTypeChip from "./PokemonTypeChip";

interface IPokemonCard {
  pokemonName: string | null;
  pokemonImageUrl?: string | null;
  pokemonTypes: Type[] | null;
}

const PokemonCard = ({
  pokemonName,
  pokemonImageUrl,
  pokemonTypes,
}: IPokemonCard) => {
  return (
    <Link
      className="flex flex-col max-w-44 h-64 w-full justify-center items-center gap-3 border border-black rounded-lg dark:border-white"
      href={pokemonName!}
    >
      <div className="capitalize">{pokemonName}</div>
      <Image
        src={pokemonImageUrl ?? ""}
        width={150}
        height={150}
        alt={pokemonName ?? "No name"}
      />

      <div className="flex  gap-3 ">
        {pokemonTypes?.map((type) => (
          <PokemonTypeChip key={type.type?.name} title={type.type?.name} />
        ))}
      </div>
    </Link>
  );
};

export default PokemonCard;
