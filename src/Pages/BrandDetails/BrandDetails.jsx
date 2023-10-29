import { useLoaderData, useParams } from "react-router-dom";
import BrandDetailsCard from "./BrandDetailsCard";
import { useEffect, useState } from "react";

const BrandDetails = () => {
  const [product, setProduct] = useState([]);
  const { brand } = useParams();

  const products = useLoaderData();

  useEffect(() => {
    const cars = products.filter((product) => product.brand === brand);
    setProduct(cars);
  }, [brand, products]);
  return (
    <>
    {/* sliders */}
      <div className="carousel w-full mt-3">
        <div id="slide1" className="carousel-item relative w-full">
          <img src="https://i.pinimg.com/originals/af/f4/d6/aff4d6b4df03bfc5b47e50f6e8105127.png" className="w-full"/>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src="https://i.ibb.co/yhm4dZS/img-2.jpg" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src="https://i.ibb.co/sCXPTCX/img-8.jpg"className="w-full"/>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img src="https://i.ibb.co/rv6Y6WX/2023-rolls-royce-black-badge-wraith-black-arrow-interior.jpg"className="w-full"/>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-5xl gap-12 mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        {product.map((products) => (
          <BrandDetailsCard
            key={products._id}
            products={products}
          ></BrandDetailsCard>
        ))}
      </div>
    </>
  );
};

export default BrandDetails;
