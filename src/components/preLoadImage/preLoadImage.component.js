/** @format */

import { useState } from "react";
import Spinner from "../spinner/spinner.component";
import { urlFor } from "../../lib/client";
import { PreloadImageContainer } from "./preLoadImage.styles";

const PreLoadImage = ({ text, url, className = null }) => {
  const [loading, setLoading] = useState(false);
  return (
    <PreloadImageContainer className={className} style={{}}>
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
        onLoad={() => setLoading((preLoad) => (preLoad = true))}
      />
    </PreloadImageContainer>
  );
};

export default PreLoadImage;
