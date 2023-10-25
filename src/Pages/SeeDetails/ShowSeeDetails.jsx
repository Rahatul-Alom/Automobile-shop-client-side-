import { Link } from "react-router-dom";

const ShowSeeDetails = ({details}) => {
  const { _id, name, brand, photo, price, rating, description } = details;
  return (
    <div>
      <div className="mx-auto max-w-7xl my-12">
        <img className=" w-full" src={photo} alt="" />
        <h2 className="text-5xl font-bold my-11 text-black">{name}</h2>
        <p className="mb-9">{description}</p>
        <Link to={`/brandDetails/${brand}`}>
          <button className="btn  bg-blue-950 text-white font-semibold">
            Go Back
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ShowSeeDetails;
