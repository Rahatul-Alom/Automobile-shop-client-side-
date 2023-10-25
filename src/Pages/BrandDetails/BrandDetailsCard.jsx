import { Link } from "react-router-dom";

const BrandDetailsCard = ({products}) => {
const {_id,name, brand, photo, price, rating, description} = products;
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img
          src={photo}
          alt="loading"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <Link to={`/seeDetails/${_id}`}><button className="btn bg-blue-950 text-white font-bold">See Details</button></Link>
          <button className="btn bg-blue-950 text-white font-bold">Update</button>
        </div>
      </div>
    </div>
  );
};

export default BrandDetailsCard;
