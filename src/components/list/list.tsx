import { PokeCard } from "../pokeCard";
import type { Pokemon } from "../../pages/home/home";

type ListProps = {
  data?: Pokemon[];
  error?: string;
};

export type PokeCardProps = {
  name: string;
};

export const List: React.FC<ListProps> = ({ data, error }) => {
  if (error) return <div>Loading Error</div>;
  if (!data) return <div>Please wait</div>;

  return (
    <div>
      {data.map((pokemon) => (
        <PokeCard key={pokemon.name} name={pokemon.name} />
      ))}
    </div>
  );
};
