import useSWR from "swr";
import { List } from "../../components/list";
import { Pagination } from "../../components/pagination";
import { AxiosError } from "axios";
import { useState } from "react";

export type PokemonApiResponse = {
  results: Pokemon[];
  count: number;
};
export type Pokemon = {
  name: string;
};

export const HomePage: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  const { data, error } = useSWR<PokemonApiResponse, AxiosError<string>>(
    `pokemon?limit=20&offset=${(currentPage - 1) * 20}`
  );

  return (
    <div>
      <List data={data?.results} error={error?.response?.data} />
      <Pagination
        count={data?.count ?? 0}
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />
    </div>
  );
};
