import Filter from "./components/Filter";
import PokemonList from "./components/PokemonList";
import SearchInput from "./components/SearchInput";

export default function Home() {
  return (
    <div className="flex flex-col gap-6 items-center">
      <div className="w-3/5">
        <SearchInput />
      </div>
      <Filter />
      <PokemonList />
    </div>
  );
}
