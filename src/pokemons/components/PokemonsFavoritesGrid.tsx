"use client";
import { useAppSelector } from "@/store";
import { SimplePokemon, PokemonsGrid } from "@/pokemons";
import { IoHeartOutline } from "react-icons/io5";

export const PokemonsFavoritesGrid = () => {
  //! hard
  /* const favorites = useAppSelector((state) => state.pokemons);
  const pokemons: SimplePokemon[] = Object.entries(favorites).map(([, value]) => value); */

  //? simple
  const favoritePokemons: SimplePokemon[] = useAppSelector((state) => Object.values(state.pokemons.favorites));
  /* const [pokemons, setPokemons] = useState(favoritePokemons);

  useEffect(() => {
    setPokemons(pokemons);
  }, [pokemons]) */

  return <>{favoritePokemons.length ? <PokemonsGrid pokemons={favoritePokemons} /> : <NoFavorites />}</>;
};

export const NoFavorites = () => {
  return (
    <div className="flex flex-col h-[50vh] items-center justify-center">
      <IoHeartOutline className="text-red-500" size={100} />
      <span>There isn&apos;t favorites</span>
    </div>
  );
};
