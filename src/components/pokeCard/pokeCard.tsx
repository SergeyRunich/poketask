import { AxiosError } from "axios";
import { PokeCardItem } from "./styled";
import useRequest from "../../utils/useRequest";

type PokemonApiResponse = {
  name: string;
  height: number;
  weight: number;
};

type PokeCardProps = {
  name: string;
};

export const PokeCard: React.FC<PokeCardProps> = ({ name }) => {
  const { data, isLoading, error } = useRequest<
    PokemonApiResponse,
    AxiosError<string>
  >({
    url: `/pokemon/${name}`,
  });

  return (
    <PokeCardItem>
      <h1>{name}</h1>
      {isLoading ? (
        <span>Loading pokemon info...</span>
      ) : error ? (
        <span>Error loading data</span>
      ) : (
        <>
          <span>Height: {data?.height}</span>{" "}
          <span>Weight: {data?.weight}</span>
        </>
      )}
    </PokeCardItem>
  );
};
