import { useLoaderData, useParams } from "react-router-dom";
import BrandDetailsCard from "./BrandDetailsCard";
import { useEffect, useState } from "react";

const BrandDetails = () => {
  const products = useLoaderData();
  const [product, setProduct] = useState([]);
  const {brand} = useParams()
  useEffect(() => {
    const bmws = products.filter((produtc) => produtc.brand === brand);
    setProduct(bmws);
  }, [brand, products]);
  console.log(product);
  return (
    <div className="mx-auto max-w-5xl gap-12 mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
      {product.map((products) => (
        <BrandDetailsCard
          key={products._id}
          products={products}
        ></BrandDetailsCard>
      ))}
    </div>
  );
};

export default BrandDetails;
