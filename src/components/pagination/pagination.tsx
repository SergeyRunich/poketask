type PaginationProps = {
  count: number;
  currentPage: number;
  handlePageChange: (page: number) => void;
};

export const Pagination: React.FC<PaginationProps> = ({
  count,
  currentPage,
  handlePageChange,
}) => {
  const totalPages = Math.ceil(count / 20);

  const paginationButtons = [];
  for (let page = 1; page <= totalPages; page++) {
    paginationButtons.push(
      <button
        key={page}
        onClick={() => handlePageChange(page)}
        className={page === currentPage ? "active" : ""}
      >
        {page}
      </button>
    );
  }

  return <div className='pagination'>{paginationButtons}</div>;
};
