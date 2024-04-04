import { FaArrowLeft } from "react-icons/fa";

import Link from "next/link";
import PokemonDetailCard from "../components/PokemonDetailCard";

const Page = ({
  params,
  searchParams,
}: {
  params: { pokemonName: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  return (
    <div className="flex flex-col gap-10">
      <Link className=" rounded-full bg-gray-300 w-fit p-4" href="/">
        <FaArrowLeft className="text-gray-600 text-xl" />
      </Link>

      <PokemonDetailCard pokemonName={params.pokemonName} />
    </div>
  );
};

export default Page;
