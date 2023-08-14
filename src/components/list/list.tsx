import { PokeCard } from "../pokeCard";
import type { Pokemon } from "../../pages/home/home";
import { Container } from "./styled";

type ListProps = {
  pokemons: Pokemon[];
};

export const List: React.FC<ListProps> = ({ pokemons }) => {
  return (
    <Container>
      {pokemons.map((pokemon) => (
        <PokeCard key={pokemon.name} name={pokemon.name} />
      ))}
    </Container>
  );
};
