import { useState } from "react";

export const Filter = ({ setSortConfig, sortConfig, setCondition }) => {
  const [buttonState, setButtonState] = useState("Select column");
  const [optButtonState, setOptButtonState] = useState("Choose condition");

  function handleMainFilterButton() {
    setButtonState(sortConfig.key);
    setOptButtonState("Choose condition");
  }
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
            {buttonState}
          </a>
          <ul id="dropdown1" className="dropdown-content">
            <li onClick={handleMainFilterButton}>
              <a
                onClick={() =>
                  setSortConfig({ direction: "ascenging", key: "name" })
                }
                href="#!"
              >
                Name
              </a>
            </li>
            <li onClick={handleMainFilterButton}>
              <a onClick={() => setSortConfig({ key: "quantity" })} href="#!">
                Quantity
              </a>
            </li>
            <li onClick={handleMainFilterButton}>
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
                {optButtonState}
              </a>
              <ul id="dropdown2" className="dropdown-content">
                <li onClick={() => setOptButtonState("ascending")}>
                  <a
                    onClick={() =>
                      setSortConfig({ direction: "ascenging", key: "name" })
                    }
                    href="#!"
                  >
                    ascending
                  </a>
                </li>
                <li onClick={() => setOptButtonState("descending")}>
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
                {optButtonState}
              </a>
              <ul id="dropdown2" className="dropdown-content">
                <li onClick={() => setOptButtonState("Equals")}>
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
                <li onClick={() => setOptButtonState("Contains")}>
                  <a
                    onClick={() =>
                      setSortConfig({
                        ...sortConfig,
                        ...{ optionKey: "Contains" },
                      })
                    }
                    href="#!"
                  >
                    Contains
                  </a>
                </li>
                <li onClick={() => setOptButtonState("More than")}>
                  <a
                    onClick={() =>
                      setSortConfig({
                        ...sortConfig,
                        ...{ optionKey: "more" },
                      })
                    }
                    href="#!"
                  >
                    More than
                  </a>
                </li>
                <li onClick={() => setOptButtonState("Less than")}>
                  <a
                    onClick={() =>
                      setSortConfig({
                        ...sortConfig,
                        ...{ optionKey: "less" },
                      })
                    }
                    href="#!"
                  >
                    Less than
                  </a>
                </li>
              </ul>
            </div>
            <form className="input-field col s4">
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
