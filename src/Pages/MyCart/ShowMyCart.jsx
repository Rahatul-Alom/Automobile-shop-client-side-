import { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { FaStar } from 'react-icons/fa';


const SowMyCart = ({myCartProduct}) => {
    const {_id,name, brand, photo, price, rating, description} = myCartProduct;

    // rating
    const starArray = Array.from({ length: 5 }, (_, index) => (
      <FaStar size={25} key={index} color={index < rating ? "gold" : "gray"} />
    ));

    const handleDelete = id =>{
      fetch(`https://automobile-brand-server-uwuerlnzt-rahatul-aloms-projects.vercel.app/myCart/${id}`,{
        method: "DELETE"
      })
      .then(res=> res.json())
      .then(data => {
        if(data.deletedCount > 0){
          Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                'Deleted!',
                'Your product has been deleted fom your cart.',
                'success'
              )
            }

          })
        }
      })
    }
    return (
      <div className="card bg-base-100 shadow-xl">
        <figure><img src={photo} alt="loading"/>
        </figure>
        <div className="card-body">
          <h2 className="card-title text-blue-700">Brand: {brand}</h2>
          <h2 className="card-title"> Type: {name}</h2>
          <p>{description}</p>
          <p className="flex">{starArray}</p>
          <p>Price: ${price}</p>
          <div className="card-actions justify-center mt-3">
            <Link to={`/seeDetails/${_id}`}><button className="btn bg-blue-950 text-white font-bold">See Details</button></Link>
           <button onClick={ () => handleDelete(_id)} className="btn bg-blue-950 text-white font-bold">Delete form card</button>
          </div>
        </div>
      </div>
    );
};

export default SowMyCart;