import { List } from "../../components/list";
import { Pagination } from "../../components/pagination";
import type { AxiosError } from "axios";
import { useCallback, useState } from "react";
import Loading from "../../components/loading/loading";
import useRequest from "../../utils/useRequest";

const PAGE_ITEM_COUNT = 20;

export type PokemonApiResponse = {
  results: Pokemon[];
  count: number;
};
export type Pokemon = {
  name: string;
};

export const HomePage: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const { data, error, isLoading } = useRequest<
    PokemonApiResponse,
    AxiosError<string>
  >({
    url: "/pokemon",
    params: {
      limit: PAGE_ITEM_COUNT,
      offset: (currentPage - 1) * PAGE_ITEM_COUNT,
    },
  });

  const handlePageChange = useCallback(
    (page: number) => {
      setCurrentPage(page);
    },
    [setCurrentPage]
  );

  if (isLoading || !data?.results) {
    return <Loading />;
  }

  if (error) {
    return <div>Error loading pokemons list</div>;
  }

  return (
    <div>
      <List pokemons={data.results} />
      <Pagination
        count={data.count ?? 0}
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />
    </div>
  );
};
