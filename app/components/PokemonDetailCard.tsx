import Image from "next/image";

interface IPokemonDetailCard {
  pokemonName: string;
}

const PokemonDetailCard = ({ pokemonName }: IPokemonDetailCard) => {
  return (
    <div className="w-full flex flex-col rounded-lg bg-gray-600 text-white p-8 justify-center  gap-5">
      <h1 className="font-bold text-4xl capitalize">{pokemonName}</h1>
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-2xl">
        <Image
          width={400}
          height={400}
          src={
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/21.svg"
          }
          alt={pokemonName}
        />
        <div className="flex flex-col text-black gap-6 bg-white w-fit  p-8">
          <div>Type: </div>
          <div>Height: </div>
          <div>Weight: </div>
          <div className="flex gap-4 bg-white w-fit flex-col items-center">
            Stats
            <div className="flex  w-fit gap-5  flex-wrap  p-8">
              <div className=" ">HP: </div>
              <div className=" ">Attack: </div>
              <div className=" ">Defense: </div>
              <div className=" ">Speed: </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonDetailCard;
