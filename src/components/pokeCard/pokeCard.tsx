import { PokeCardProps } from "../list/list";
import useSWR from "swr";
import { AxiosError } from "axios";

type PokemonApiResponse = {
  results: object;
  name: string;
  height: number;
  weight: number;
};

export const PokeCard: React.FC<PokeCardProps> = ({ name }) => {
  const { data, error } = useSWR<PokemonApiResponse, AxiosError<string>>(
    `pokemon/${name}`
  );
  return (
    <div className='card'>
      {data?.name}, Height: {data?.height}, Weight: {data?.weight}
    </div>
  );
};
