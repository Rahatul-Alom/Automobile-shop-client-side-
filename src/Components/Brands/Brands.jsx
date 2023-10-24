import { Link } from "react-router-dom"

const Brands = ({brands}) => {
    const {id, brand, image} = brands || {};
    return (
        <div className="card bg-base-100 shadow-xl">
         <figure><img className="h-64 w-full" src={image} alt="" /></figure>
            <div className="card-body">
            <h2 className="text-center font-bold text-2xl">{brand}</h2>
             <Link to={`brands/${id}`}>
             </Link>
            </div>         
         </div>
    );
};

export default Brands;