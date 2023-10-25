import Footer from "../../Components/Footer/Footer";
import Banner from "../../Components/Header/Banner/Banner";

const About = () => {
    return (
        <div>
            <Banner></Banner>
            <div className='my-12 mx-auto max-w-6xl' >
                    <h1 className='text-6xl font-bold text-blue-950 text-center'>About Us</h1>
                    <p className='font-semibold text-lg mt-7 text-center'>We are not a car manufacturer; we are creators of exceptional automobiles. With a relentless pursuit of perfection and an unwavering focus on every detail, we transform ordinary transportation into extraordinary driving experiences. Our mission is clear - to bring your automotive dreams to life.</p>
                    <h1 className='text-4xl mt-12 font-bold text-blue-950 text-center'>Our Commitment</h1>
                    <p className='font-semibold text-lg mt-7 text-center'>
                    We firmly believe that every car we produce is an opportunity to craft unforgettable journeys. Whether it is a stylish daily driver, a powerful performance vehicle, or an eco-friendly marvel, we are committed to making each one remarkable. Our team's dedication, innovation, and passion ensure that your car ownership experience stands out and leaves a lasting impression. Let us be your automotive partner. Contact us today, and let's begin designing your unforgettable drives together.
                   </p>
                </div>
            <Footer></Footer>
        </div>
    );
};

export default About;