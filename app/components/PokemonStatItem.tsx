interface IPokemonStatItem {
  title: string;
  stat?: number | null;
  color: string;
}

const PokemonStatItem = ({ title, stat, color }: IPokemonStatItem) => {
  return (
    <div className={`flex-1 flex gap-3 rounded-lg ${color} p-2`}>
      {title}:<span className="font-bold ">{stat}</span>
    </div>
  );
};

export default PokemonStatItem;
