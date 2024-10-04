import { Metadata } from "next";
import { PokemonsFavoritesGrid } from "@/pokemons";

export const metadata: Metadata = {
  title: "Favorites",
  description: "My favorite pokemons list",
};

export default async function PokemonsPage() {
  return (
    <div className="flex flex-col ">
      <span className="text-5xl my-2">
        Favorite Pokemons List <small className="text-blue-500">Global state</small>
      </span>
      <PokemonsFavoritesGrid />
    </div>
  );
}
