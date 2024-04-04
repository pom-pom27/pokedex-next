import { ReactNode } from "react";

interface IPokemonDetailItem {
  title: string;
  children: ReactNode;
}

const PokemonDetailItem = ({ title, children }: IPokemonDetailItem) => {
  return (
    <div className="flex flex-col gap-3">
      {title}:<div className="flex gap-3 flex-wrap">{children}</div>
    </div>
  );
};

export default PokemonDetailItem;
