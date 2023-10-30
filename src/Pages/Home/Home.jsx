import Banner from "../../Components/Header/Banner/Banner";
import Footer from "../../Components/Footer/Footer";
import { useLoaderData } from "react-router-dom";
import Brands from "../../Components/Brands/Brands";
import TotalCar from "../../Components/OurAchivement/OurAchivement";
import OurTeam from "../../Components/OurTeam/OurTeam";

const Home = () => {
    const brands = useLoaderData()
    return (
        <div>
            <Banner></Banner>
            <h1 className="mt-16 text-center font-bold text-5xl lg:text-7xl" >Our Brands</h1>
            <div className="my-20 gap-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto max-w-6xl">         
              {
                brands.map(brand=> <Brands key={brand.id} brands={brand}></Brands>)
              }
            </div>
            <TotalCar></TotalCar>
            <OurTeam></OurTeam>
            <Footer></Footer>
        </div>
    );
};

export default Home;