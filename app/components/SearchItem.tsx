import Link from "next/link";

interface ISearchItem {
  pokemonName: string;
  url?: string;
}

const SearchItem = ({ pokemonName, url }: ISearchItem) => {
  //router.refresh() is not working as intended, so i use reload().

  return (
    <>
      {url && (
        <Link
          className="p-2  border-b border-gray-400 capitalize cursor-pointer"
          href={url}
        >
          {pokemonName}
        </Link>
      )}
      {!url && (
        <div className="p-2  border-b border-gray-400 text-gray-500">
          {pokemonName}
        </div>
      )}
    </>
  );
};

export default SearchItem;
