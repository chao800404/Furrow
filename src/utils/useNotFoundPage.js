/** @format */

import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const useNotFoundPage = (data) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (data === undefined) navigate("/not-found");
  }, [data, navigate]);
};

export default useNotFoundPage;
