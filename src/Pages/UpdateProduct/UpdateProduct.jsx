import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import Swal from "sweetalert2";
import "../../App.css"
import { FaStar } from 'react-icons/fa';


const UpdateProduct = () => {
    const product = useLoaderData();
    const {_id, productType, name, photo, brand, description, price } = product;
    const [selectedRating, setSelectedRating] = useState(0);

    const handleUpdateProduct = event =>{
        event.preventDefault();
        
        const form = event.target;
        const productType = form.productType.value;
        const name = form.name.value;
        const brand = form.brand.value;
        const photo = form.photo.value;
        const price = form.price.value;
        const description = form.description.value;
    
        const updateProduct = { productType, name, brand, photo, price, rating: selectedRating, description}
    
        fetch(`http://localhost:5000/product/${_id}`,{
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(updateProduct)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount > 0){
              Swal.fire({
                title: 'Success!',
                text: 'Product Updated successfully',
                icon: 'success',
                confirmButtonText: 'Go Back'
              })
            }
        })
    }
    return (
        <div>
        <div className=" p-20">
          <h1 className="text-4xl md:text-5xl lg:text-6xl
           text-center font-bold text-blue-950">
            Update Product
          </h1>
            <div className="hero-content mt-7">
              <div className="card flex-shrink-0 w-full max-w-xl shadow-2xl bg-base-100">
                <form onSubmit={handleUpdateProduct} className="card-body">
                  <div className="form-control">
                  <select name="productType" defaultValue={productType} className="select select-bordered w-full max-w-xl">
                  <option value="Type Of Product" disabled>Type Of Product</option>    
                  <option value="SAV">SAV</option>
                  <option value="Sedan">Sedan</option>
                  <option value="Coupe">Coupe</option>
                  <option value="Convertible">Convertible</option>
              </select>
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Name</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Name"
                      name="name"
                      defaultValue={name}
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Brand Name</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Brand Name"
                      name="brand"
                      defaultValue={brand}
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Photo Url</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Photo Url"
                      name="photo"
                      defaultValue={photo}
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Price</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Price"
                      name="price"
                      defaultValue={price}
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Rating</span>
                    </label>
                    <div className="rating">
                  {[1, 2, 3, 4, 5].map((ratingValue) => (
                    <label key={ratingValue} className="rating-input-label">
                      <input
                        type="radio"
                        name="rating"
                        value={ratingValue}
                        checked={ratingValue === selectedRating}
                        onChange={() => setSelectedRating(ratingValue)}
                      />
                      <FaStar size={25} 
                       color={ratingValue <= selectedRating ? '#FFBF00' : 'black'}
                      >
                      </FaStar>
                    </label>
                  ))}
                </div>
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Short Description</span>
                    </label>
                          <textarea className="border-2 p-3 rounded-lg" placeholder="Short Description" name="description" defaultValue={description} cols="30" rows="10"></textarea>
                  </div>
                  <div className="form-control mt-6">
                    <button className="btn bg-blue-950 text-white font-bold">Update Product</button>
                  </div>
                </form>
              </div>
            </div>
        </div>
      </div>
    );
};

export default UpdateProduct;