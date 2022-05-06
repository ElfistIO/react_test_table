export const Filter = ({ setSortConfig, sortConfig, setCondition }) => {
  return (
    <>
      <nav className="mb-50 teal lighten-2">
        <div className="nav-wrapper">
          <span className="brand-logo center">Filter</span>
        </div>
      </nav>
      <div className="row valign-wrapper">
        <div className="col s4">
          <a className="dropdown-trigger btn" href="#!" data-target="dropdown1">
            Select column
          </a>
          <ul id="dropdown1" className="dropdown-content">
            <li>
              <a
                onClick={() =>
                  setSortConfig({ direction: "ascenging", key: "name" })
                }
                href="#!"
              >
                Name
              </a>
            </li>
            <li>
              <a onClick={() => setSortConfig({ key: "quantity" })} href="#!">
                Quantity
              </a>
            </li>
            <li>
              <a onClick={() => setSortConfig({ key: "distance" })} href="#!">
                Distance
              </a>
            </li>
          </ul>
        </div>
        {sortConfig.key === "name" ? (
          <>
            <div className="col s4">
              <a
                className="dropdown-trigger btn"
                href="#!"
                data-target="dropdown2"
              >
                Choose condition
              </a>
              <ul id="dropdown2" className="dropdown-content">
                <li>
                  <a
                    onClick={() =>
                      setSortConfig({ direction: "ascenging", key: "name" })
                    }
                    href="#!"
                  >
                    ascending
                  </a>
                </li>
                <li>
                  <a
                    onClick={() =>
                      setSortConfig({ direction: "descending", key: "name" })
                    }
                    href="#!"
                  >
                    descending
                  </a>
                </li>
              </ul>
            </div>
          </>
        ) : (
          <>
            <div className="col s4">
              <a
                className="dropdown-trigger btn"
                href="#!"
                data-target="dropdown2"
              >
                Choose condition
              </a>
              <ul id="dropdown2" className="dropdown-content">
                <li>
                  <a
                    onClick={() =>
                      setSortConfig({
                        ...sortConfig,
                        ...{ optionKey: "equals" },
                      })
                    }
                    href="#!"
                  >
                    Equals
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => setSortConfig({ key: "contains" })}
                    href="#!"
                  >
                    Contains
                  </a>
                </li>
                <li>
                  <a onClick={() => setSortConfig({ key: "more" })} href="#!">
                    More than
                  </a>
                </li>
                <li>
                  <a onClick={() => setSortConfig({ key: "less" })} href="#!">
                    Less than
                  </a>
                </li>
              </ul>
            </div>
            <form
              className="input-field col s4"
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <div className="input-field">
                <input
                  onChange={(e) => setCondition(e.target.value)}
                  id="Filter"
                  type="text"
                  className="validate"
                />
                <label htmlFor="Filter">Filter...</label>
              </div>
            </form>
          </>
        )}
      </div>
    </>
  );
};
