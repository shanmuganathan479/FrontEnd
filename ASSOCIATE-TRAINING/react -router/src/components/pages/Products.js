import React from "react";
import { useLocation, useParams } from "react-router-dom";

const Products = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>Product -{id}</h1>
    </div>
  );
};

export default Products;
