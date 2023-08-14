import { PokeCardProps } from "../list/list";
import useSWR from "swr";
import { AxiosError } from "axios";
import { PokeCardItem } from "./styled";

type PokemonApiResponse = {
  results: object;
  name: string;
  height: number;
  weight: number;
};

export const PokeCard: React.FC<PokeCardProps> = ({ name }) => {
  const { data } = useSWR<PokemonApiResponse, AxiosError<string>>(
    `pokemon/${name}`
  );
  return (
    <PokeCardItem>
      <h1>{data?.name}</h1>
      <span>Height: {data?.height}</span> <span>Weight: {data?.weight}</span>
    </PokeCardItem>
  );
};
