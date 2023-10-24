const AddProdutc = () => {
const handleAddProduct = event =>{
    event.preventDefault();
    
    const form = event.target;
    const name = form.name.value;
    const brand = form.brand.value;
    const photo = form.photo.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const description = form.description.value;
    console.log(name, brand, photo, price, rating, description)
}

  return (
    <div>
      <div className=" p-20">
        <h1 className="text-4xl md:text-5xl lg:text-6xl
         text-center font-extrabold text-blue-950">
          Add Product
        </h1>
          <div className="hero-content mt-7">
            <div className="card flex-shrink-0 w-full max-w-xl shadow-2xl bg-base-100">
              <form onSubmit={handleAddProduct} className="card-body">
                {/* <div className="form-control">
                <select className="select select-bordered w-full max-w-xl">
                    <option disabled selected>Type Of Product</option>
                     <option>SAVs</option>
                     <option>Sedans</option>
                     <option>Coupes</option>
                </select>
                </div> */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Name"
                    name="name"
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
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Rating</span>
                  </label>
                  <input
                    type="text"
                    name="rating"
                    placeholder="Rating" 
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Short Description</span>
                  </label>
                        <textarea className="border-2 p-3 rounded-lg" placeholder="Short Description" name="description" cols="30" rows="10"></textarea>
                </div>
                <div className="form-control mt-6">
                  <button className="btn bg-blue-950 text-white font-bold">Add Product</button>
                </div>
              </form>
            </div>
          </div>
      </div>
    </div>
  );
};

export default AddProdutc;
