/** @format */

import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const useNotFoundPage = (data) => {
  const navigate = useNavigate();

  useEffect(() => {
    let canceled = false;
    new Promise((reject) => {
      if (canceled) return;
      reject(data);
    }).then((res) => {
      if (!res) navigate("/not-found");
    });

    return () => (canceled = true);
  }, [data, navigate]);
};

export default useNotFoundPage;
