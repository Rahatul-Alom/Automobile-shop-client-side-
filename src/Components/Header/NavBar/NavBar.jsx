import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import {AuthContext} from "../../../Context/AuthProvider"
import userImg from "../../../assets/userImg.jpg"


const NavBar = () => {
  const {user, logOut} = useContext(AuthContext)

  const handleSingOut = () =>{
    logOut()
    .then(result =>{
        console.log(result)
    })
    .catch(error =>{
        console.log(error)
    })
}
  const links = (
    <>
      <li className="font-bold"><NavLink to={"/"}>Home</NavLink></li>
      <li className="font-bold"><NavLink to={"/About"}>About Us</NavLink></li>
      {
        user&&<>
           <li className="font-bold"><NavLink to={"/AddProduct"}>Add Product</NavLink></li>
          <li className="font-bold"><NavLink to={"/MyCart"}>My Cart</NavLink></li>
        </>
      }
    </>
  );

  return (
    <div className="navbar bg-blend-multiply">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52"
          >
            {links}
          </ul>
        </div>
        <img src="https://i.ibb.co/S0xvwZj/7941372.png" className="h-9" alt="" />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
            {links}
        </ul>
      </div>
      <div className="navbar-end">
      {
            user?. email ? 
              <>
             <span className="mr-3 font-semibold"> {user.displayName} </span>
                <div className="w-10 rounded-full mr-3">
                  <img className="rounded-full" src={user.photoURL} />
                </div>
                 <button onClick={handleSingOut} className="btn bg-blue-950 text-white font-semibold">Sing Out</button>
              </>
            :
             <>
            <div className="w-10 rounded-full mr-4">
               <img src="https://i.ibb.co/XsDHQ4n/user-Defaulf.png" />
             </div>
            <Link to="/Login"><button className="btn bg-blue-950 text-white font-semibold">Login</button></Link>
            </>
        }
      </div>
    </div>
  );
};

export default NavBar;
