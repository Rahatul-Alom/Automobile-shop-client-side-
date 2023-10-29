import { Link } from "react-router-dom";
import { FaStar } from 'react-icons/fa';


const BrandDetailsCard = ({products}) => {
const {_id,name, brand, photo, price, rating, description} = products;
const starArray = Array.from({ length: 5 }, (_, index) => (
  <FaStar size={25} key={index} color={index < rating ? "gold" : "gray"} />
));
  return (
    <div>
      {/* shwo brand details cards */}
      <div className="card bg-base-100 shadow-xl mt-12">
      <figure>
        <img
          src={photo}
          alt="loading"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{brand}</h2>
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
        <p className="flex">{starArray}</p>
        <p className="font-bold text-lg">Price: ${price}</p>
        <div className="card-actions justify-center mt-3">
          <Link to={`/seeDetails/${_id}`}><button className="btn bg-blue-950 text-white font-bold">See Details</button></Link>
         <Link to={`/updateProduct/${_id}`}><button className="btn bg-blue-950 text-white font-bold">Update</button></Link>
        </div>
      </div>
      </div>
    </div>

  );
};

export default BrandDetailsCard;
