/** @format */

import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const useNotFoundPage = (data) => {
  const navigate = useNavigate();

  useEffect(() => {
    let canceled = false;
    const timeout = new Promise((reject) => {
      if (canceled) return;
      setTimeout(() => reject(undefined), 8000);
    });

    const resData = new Promise((reject) => {
      if (canceled) return;
      reject(data);
    });

    Promise.race([timeout, resData]).then((res) => {
      if (!res) navigate("/not-found");
    });

    return () => {
      canceled = true;
      clearTimeout(timeout);
    };
  }, [data, navigate]);
};

export default useNotFoundPage;
