import { useMemo } from "react";

const range = (start, end) => {
  let length = end - start + 1;
  return Array.from({ length }, (_, index) => index + start);
};

const usePagination = ({
  totalCount,
  pageSize,
  siblingsCount = 3,
  currentPage,
}) => {
  const paginationRange = useMemo(() => {
    const totalPageCount = Math.ceil(totalCount / pageSize);

    const totalPageNumbers = siblingsCount + 5;

    if (totalPageNumbers >= totalPageCount) {
      return range(1, totalPageCount);
    }

    const leftSiblingIndex = Math.max(currentPage - siblingsCount, 1);
    const rightSiblingIndex = Math.min(
      currentPage + siblingsCount,
      totalPageCount
    );

    const firstPageIndex = 1;
    const lastPageIndex = totalPageCount;
  }, [totalCount, pageSize, siblingsCount, currentPage]);

  return paginationRange;
};

export default usePagination;
