import { Container, Button } from "./styled";
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
  const buttonsToShow = 20;

  const paginationButtons = [];

  // Calculate the start and end page for the pagination range
  let startPage = Math.max(currentPage - Math.floor(buttonsToShow / 2), 1);
  let endPage = Math.min(startPage + buttonsToShow - 1, totalPages);

  // Check that the range is centered when near the beginning or end
  if (endPage - startPage + 1 < buttonsToShow) {
    startPage = Math.max(endPage - buttonsToShow + 1, 1);
  }

  if (currentPage > 1) {
    paginationButtons.push(
      <Button key='prev' onClick={() => handlePageChange(currentPage - 1)}>
        Prev
      </Button>
    );
  }

  for (let page = startPage; page <= endPage; page++) {
    paginationButtons.push(
      <Button
        key={page}
        onClick={() => handlePageChange(page)}
        className={page === currentPage ? "active" : ""}
      >
        {page}
      </Button>
    );
  }

  if (currentPage < totalPages) {
    paginationButtons.push(
      <Button key='next' onClick={() => handlePageChange(currentPage + 1)}>
        Next
      </Button>
    );
  }

  return <Container>{paginationButtons}</Container>;
};
