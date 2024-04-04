"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useShallow } from "zustand/react/shallow";
import { usePokedexStore } from "../globalstate";

interface IGoBackButton {
  pokemonName?: string;
}

const GoBackButton = ({ pokemonName }: IGoBackButton) => {
  const { setCurrentPokemon } = usePokedexStore(
    useShallow((state) => ({
      currentPokemon: state.currentPokemon,
      setCurrentPokemon: state.setCurrentPokemon,
    }))
  );

  const router = useRouter();

  useEffect(() => {
    if (pokemonName) {
      setCurrentPokemon(pokemonName);
    }
  }, []);

  return (
    <button
      className=" rounded-full bg-gray-300 w-fit p-4"
      onClick={() => router.back()}
    >
      <FaArrowLeft className="text-gray-600 text-xl" />
    </button>
  );
};

export default GoBackButton;
