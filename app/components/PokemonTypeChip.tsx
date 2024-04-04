"use client";

interface IPokemonTypeChip {
  title?: string | null;
  handleClick?: () => void;
}

const PokemonTypeChip = ({ title, handleClick }: IPokemonTypeChip) => {
  return (
    <button
      disabled={!handleClick}
      onClick={handleClick}
      className="border border-black px-2 rounded-lg capitalize"
    >
      {title}
    </button>
  );
};

export default PokemonTypeChip;
