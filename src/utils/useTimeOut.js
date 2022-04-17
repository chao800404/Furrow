/** @format */

import { useEffect } from "react";

const useTimeOut = (callback, time) => {
  useEffect(() => {
    const timeOut = setTimeout(() => callback(), time);
    return () => clearTimeout(timeOut);
  }, [callback, time]);
};

export default useTimeOut;
