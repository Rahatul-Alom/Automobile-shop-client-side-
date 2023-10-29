import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { FaStar } from 'react-icons/fa';


const ShowSeeDetails = ({details}) => {
  const { _id, name, brand, photo, price, rating, description, productType } = details;
  const myCart = { _id, name, brand, photo, price, rating, description, productType };
  const starArray = Array.from({ length: 5 }, (_, index) => (
    <FaStar size={25} key={index} color={index < rating ? "gold" : "gray"} />
  ));


  const handleAddToCart = ()=>{
      fetch(`https://automobile-brand-server-uwuerlnzt-rahatul-aloms-projects.vercel.app/myCart`,{
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(myCart)
    })
        .then(res => res.json())
        .then(data => {
          console.log(data)
            Swal.fire({
              title: 'Success!',
              text: 'Product added to your cart successfully',
              icon: 'success',
              confirmButtonText: 'Go Back'
            })
      })
  }
  return (
    <div>
      <div className="mx-auto max-w-7xl my-12">
        <img className=" w-full" src={photo} alt="" />
        <h2 className="text-5xl font-bold my-11 text-black">{name}</h2>
        <p className="mb-9">{description}</p>
        <p className="mb-4 font-bold">Price: ${price}</p>
        <p className="mb-4 font-semibold">Type: {productType}</p>
        <p className="flex font-bold">Rating: {starArray}</p>
        <Link to={`/brandDetails/${brand}`}>
          <button className="btn mt-5  bg-blue-950 text-white font-semibold">
            Go Back
          </button>
        </Link>
        <button onClick={handleAddToCart} className="btn ml-1 bg-blue-950 text-white font-semibold">
            Add to cart
          </button>
      </div>
    </div>
  );
};

export default ShowSeeDetails;
