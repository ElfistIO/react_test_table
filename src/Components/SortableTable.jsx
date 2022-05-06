import { useEffect, useMemo, useState } from "react";
import { Filter } from "./Filter";
import TablePagination from "./TablePagination";

export const SortableTable = ({ rows }) => {
  const [sortConfig, setSortConfig] = useState({ key: "name" });
  const [sortState, setSortState] = useState(rows);
  const [rowsState, setRowsState] = useState(rows);
  const [pageSize, setPageSize] = useState(4);
  const [currentPage, setCurrentPage] = useState(1);
  const [condition, setCondition] = useState("");

  useEffect(() => {
    if (currentPage >= rows.length / pageSize) setCurrentPage(1);
  }, [pageSize]);

  useMemo(() => {
    const firstPageIndex = (currentPage - 1) * pageSize;
    const lastPageIndex = firstPageIndex + pageSize;
    const newData = rows.slice(firstPageIndex, lastPageIndex);
    setRowsState(newData);
  }, [currentPage, pageSize, rows]);

  useMemo(() => {
    let sortedRows = [...rowsState];
    if (sortConfig.key === "name") {
      sortedRows.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? 1 : -1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === "descending" ? -1 : 1;
        }
        return 0;
      });
      setSortState(sortedRows);
    } else if (
      (sortConfig.key === "quantity") &
      (sortConfig.optionKey === "equals")
    ) {
      let filteredRows = sortedRows.filter(
        (row) => row.quantity === parseInt(condition)
      );
      setSortState(filteredRows);
      return;
    } else if (
      (sortConfig.key === "quantity") &
      (sortConfig.optionKey === "contains")
    ) {
      let filteredRows = sortedRows.filter(
        (row) =>
          row.toString().toLowerCase().indexOf(condition.toLowerCase()) !== -1
      );
      setSortState(filteredRows);
      return;
    } else if (
      (sortConfig.key === "quantity") &
      (sortConfig.optionKey === "more")
    ) {
      let filteredRows = sortedRows.filter(
        (row) => row.quantity >= parseInt(condition)
      );
      setSortState(filteredRows);
      return;
    } else if (
      (sortConfig.key === "quantity") &
      (sortConfig.optionKey === "less")
    ) {
      let filteredRows = sortedRows.filter(
        (row) => row.quantity <= parseInt(condition)
      );
      setSortState(filteredRows);
      return;
    } else if (
      (sortConfig.key === "distance") &
      (sortConfig.optionKey === "equals")
    ) {
      let filteredRows = sortedRows.filter(
        (row) => row.distance === parseInt(condition)
      );
      setSortState(filteredRows);
      return;
    } else if (
      (sortConfig.key === "distance") &
      (sortConfig.optionKey === "contains")
    ) {
      let filteredRows = sortedRows.filter(
        (row) => row.distance === parseInt(condition)
      );
      setSortState(filteredRows);
      return;
    } else if (
      (sortConfig.key === "distance") &
      (sortConfig.optionKey === "more")
    ) {
      let filteredRows = sortedRows.filter(
        (row) => row.distance >= parseInt(condition)
      );
      setSortState(filteredRows);
      return;
    } else if (
      (sortConfig.key === "distance") &
      (sortConfig.optionKey === "less")
    ) {
      let filteredRows = sortedRows.filter(
        (row) => row.distance <= parseInt(condition)
      );
      setSortState(filteredRows);
      return;
    }
    return sortedRows;
  }, [rowsState, sortConfig, condition]);

  return (
    <>
      <div className="container">
        <nav className="mb-50 teal lighten-2">
          <div className="nav-wrapper">
            <span className="brand-logo center">Table</span>
          </div>
        </nav>
        <table className="centered">
          <thead>
            <tr>
              <th>
                <p>Date</p>
              </th>
              <th>
                <p>Name</p>
              </th>
              <th>
                <p>Quantity</p>
              </th>
              <th>
                <p>Distance</p>
              </th>
            </tr>
          </thead>
          <tbody>
            {sortState.length > 0 ? (
              sortState.map((row, index) => {
                if (index < pageSize) {
                  return (
                    <tr key={row.id}>
                      <td>{row.date}</td>
                      <td>{row.name}</td>
                      <td>{row.quantity}</td>
                      <td>{row.distance}</td>
                    </tr>
                  );
                }
              })
            ) : (
              <tr>
                <td>Nothing has been found...</td>
              </tr>
            )}
          </tbody>
        </table>
        <TablePagination
          totalCount={rows.length}
          pageSize={pageSize}
          changeItemsPerPage={(page) => setPageSize(page)}
          onPageChange={(page) => setCurrentPage(page)}
          currentPage={currentPage}
        />
        <Filter
          setSortConfig={setSortConfig}
          sortConfig={sortConfig}
          setCondition={setCondition}
          condition={condition}
        />
      </div>
    </>
  );
};
