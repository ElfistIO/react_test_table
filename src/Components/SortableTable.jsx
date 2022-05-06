import { useEffect, useMemo, useState } from "react";
import TablePagination from "./TablePagination";

export const SortableTable = ({ rowsProps }) => {
  let products = rowsProps;
  const rows = rowsProps;
  const [sortConfig, setSortConfig] = useState(null);
  const [rowsState, setRowsState] = useState(rows);
  const [pageSize, setPageSize] = useState(3);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    if (currentPage >= rows.length / pageSize) setCurrentPage(1);
  }, [pageSize]);

  useMemo(() => {
    const firstPageIndex = (currentPage - 1) * pageSize;
    const lastPageIndex = firstPageIndex + pageSize;

    const newData = rows.slice(firstPageIndex, lastPageIndex);

    setRowsState(newData);
  }, [currentPage, pageSize]);

  useMemo(() => {
    let sortedProducts = [...products];
    if (sortConfig !== null) {
      sortedProducts.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? 1 : -1;
        }
        return 0;
      });
    }
    products = sortedProducts;
    return sortedProducts;
  }, [products, sortConfig]);

  const requestSort = (key) => {
    let direction = "ascending";
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === "ascending"
    ) {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  return (
    <div className="container">
      <nav className="mb-50">
        <div className="nav-wrapper">
          <span className="brand-logo center">Table</span>
        </div>
      </nav>
      <table className="centered">
        <thead>
          <tr>
            <th>
              <button
                className="waves-effect waves-light btn"
                type="button"
                onClick={() => requestSort("date")}
              >
                Date
              </button>
            </th>
            <th>
              <button
                className="waves-effect waves-light btn"
                type="button"
                onClick={() => requestSort("name")}
              >
                Name
              </button>
            </th>
            <th>
              <button
                className="waves-effect waves-light btn"
                type="button"
                onClick={() => requestSort("quantity")}
              >
                Quantity
              </button>
            </th>
            <th>
              <button
                className="waves-effect waves-light btn"
                type="button"
                onClick={() => requestSort("distance")}
              >
                Distance
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          {rowsState.map((product) => (
            <tr key={product.id}>
              <td>{product.date}</td>
              <td>{product.name}</td>
              <td>{product.quantity}</td>
              <td>{product.distance}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <TablePagination
        totalCount={rows.length}
        pageSize={pageSize}
        changeItemsPerPage={(page) => setPageSize(page)}
        onPageChange={(page) => setCurrentPage(page)}
        currentPage={currentPage}
      />
    </div>
  );
};
