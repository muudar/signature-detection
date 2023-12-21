import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/data")
      .then((response) => setData(response.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <h1>React + FastAPI App</h1>
      {data && <p>{JSON.stringify(data)}</p>}
    </div>
  );
}

export default App;
