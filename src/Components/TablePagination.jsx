import { useEffect, useState } from "react";
import usePagination from "./usePagination";

export const TablePagination = ({
  totalCount,
  pageSize,
  onPageChange,
  currentPage,
  siblingsCount = 1,
}) => {
  const [totalPages, setTotalPages] = useState(
    Math.ceil(totalCount / pageSize)
  );

  useEffect(() => {
    setTotalPages(Math.ceil(totalCount / pageSize));
  }, [pageSize]);

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingsCount,
    pageSize,
  });

  const handlePrevClick = () => {
    let changedPage = currentPage > 1 ? currentPage - 1 : currentPage;
    onPageChange(changedPage);
  };

  const handleNextClick = () => {
    onPageChange(currentPage + 1);
  };

  return (
    <ul className="pagination">
      <li onClick={() => handlePrevClick()} disabled={currentPage === 1}>
        <i className="material-icons">chevron_left</i>
      </li>
      {paginationRange.map((_pageNumber, index) => {
        let current = index + 1;
        return (
          <li
            className="waves-effect"
            key={index}
            active={currentPage === current}
            onClick={() => onPageChange(current)}
            disabled={totalCount <= pageSize}
          >
            {current}
          </li>
        );
      })}
      <li
        onClick={() => handleNextClick()}
        disabled={currentPage === totalPages}
      >
        <i className="material-icons">chevron_right</i>
      </li>
    </ul>
  );
};

export default TablePagination;
