import { useEffect, useState } from "react";
import api from "../utils/apiClient";

const useData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    api
      .get("/")
      .then((res) => setData(res.data.results))
      .catch((err) => console.log(err));
  }, []);

  return { data };
};

export default useData;
