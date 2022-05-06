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
    let changedPage =
      currentPage < Math.ceil(totalCount / pageSize)
        ? currentPage + 1
        : currentPage;
    onPageChange(changedPage);
  };

  return (
    <ul className="pagination center-align mb-50">
      <li
        className="waves-effect"
        onClick={() => handlePrevClick()}
        disabled={currentPage === 1}
      >
        <a href="#!">
          <i className="material-icons">chevron_left</i>
        </a>
      </li>
      {paginationRange.map((_pageNumber, index) => {
        let current = index + 1;
        return (
          <li
            className="waves-effect"
            key={index}
            active={(currentPage === current).toString()}
            onClick={() => onPageChange(current)}
            disabled={totalCount <= pageSize}
          >
            <a href="#!">{current}</a>
          </li>
        );
      })}
      <li
        className="waves-effect"
        onClick={() => handleNextClick()}
        disabled={currentPage === totalPages}
      >
        <a href="#!">
          <i className="material-icons">chevron_right</i>
        </a>
      </li>
    </ul>
  );
};

export default TablePagination;
