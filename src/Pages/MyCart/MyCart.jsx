// import { useLoaderData, useParams } from "react-router-dom";
import ShowMyCart from "./ShowMyCart";
import { useEffect, useState } from "react";

const MyCart = () => {
    const [myCartProduct, setMyCartProduct] = useState([]);
  
    // const showMyCartProducs = useLoaderData();
    
    useEffect(() => {
        fetch('http://localhost:5000/myCart')
        .then(res => res.json())
        .then(data => setMyCartProduct(data))
    }, []);
    console.log(myCartProduct);
    return (
        <div className="mx-auto max-w-5xl gap-12 mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        {myCartProduct.map((myCartProduct) => (
          <ShowMyCart
            key={myCartProduct._id}
            myCartProduct={myCartProduct}
          ></ShowMyCart>
        ))}
      </div>
    );
};

export default MyCart;