/** @format */

import { useState } from "react";
import Spinner from "../spinner/spinner.component";
import { urlFor } from "../../lib/client";

const PreLoadImage = ({ text, url, className = null }) => {
  const [loading, setLoading] = useState(false);
  return (
    <div
      className={className}
      style={{ position: "relative", display: "flex" }}
    >
      {loading ? null : (
        <Spinner
          style={{
            position: "absolute",
            hidden: "100%",
            top: 0,
            left: 0,
            backgroundColor: "#FFF",
            height: "100%",
            zIndex: 30,
            minHeight: "20rem",
          }}
        />
      )}
      <img
        alt={text}
        src={urlFor(url)}
        style={{ width: "100%" }}
        onLoad={() => setLoading((preLoad) => (preLoad = true))}
      />
    </div>
  );
};

export default PreLoadImage;
