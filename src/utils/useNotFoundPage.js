/** @format */

import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const useNotFoundPage = (data) => {
  const navigate = useNavigate();

  useEffect(() => {
    new Promise((reject) => {
      reject(data);
    }).then((res) => {
      if (!res) navigate("/not-found");
    });
  }, [data, navigate]);
};

export default useNotFoundPage;
