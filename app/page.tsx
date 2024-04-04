import Filter from "./components/Filter";
import PokemonList from "./components/PokemonList";
import SearchInput from "./components/SearchInput";

export default function Home() {
  return (
    <div className="flex flex-col gap-6 items-center">
      <div className="w-4/5 flex gap-3 flex-col">
        <SearchInput />
        <Filter />
      </div>
      <PokemonList />
    </div>
  );
}
