import type { Pokemon } from "../../pages/home/home";
type ListProps = {
  data?: Pokemon[];
  error?: string;
};

export const List: React.FC<ListProps> = ({ data, error }) => {
  if (error) return <div>Loading Error</div>;
  if (!data) return <div>Please wait</div>;

  return (
    <div>
      {data.map((pokemon) => (
        <div key={pokemon.name}>
          {/* <PokemonCard name={pokemon.name} index={index + 1} /> */}
          {pokemon.name}
        </div>
      ))}
    </div>
  );
};
