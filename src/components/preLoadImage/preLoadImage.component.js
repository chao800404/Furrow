/** @format */

import { useState } from "react";
import Spinner from "../spinner/spinner.component";

const PreLoadImage = ({ text, url, className = null }) => {
  const [loading, setLoading] = useState(0);
  return (
    <div className={className} style={{ position: "relative" }}>
      {loading ? null : (
        <Spinner
          style={{
            position: "absolute",
            hidden: "100%",
            top: 0,
            left: 0,
            backgroundColor: "#999",
          }}
        />
      )}
      <img alt={text} src={url} onLoad={() => setLoading(1)} />
    </div>
  );
};

export default PreLoadImage;
