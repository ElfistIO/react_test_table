import { useEffect, useState } from "react";
import { SortableTable } from "./Components/SortableTable";
import M from "materialize-css";
import axios from "axios";

function App() {
  M.AutoInit();
  const [data, setData] = useState([]);
  const url = "http://localhost:4000/posts";

  useEffect(() => {
    axios.get(url).then((res) => {
      setData(res.data);
    });
  }, []);

  return <SortableTable rows={data} />;
}

export default App;
