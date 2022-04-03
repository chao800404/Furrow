/** @format */

import { useParams } from "react-router-dom";

const CollectionOverView = () => {
  const { collectionId } = useParams();

  return (
    <div style={{ height: "100vh" }}>
      <h1>{collectionId}</h1>
    </div>
  );
};

export default CollectionOverView;
