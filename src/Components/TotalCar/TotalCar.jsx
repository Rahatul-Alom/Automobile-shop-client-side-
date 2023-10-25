
const TotalCar = () => {
    return (
        <div>
            <div className="bg-cover bg-center h-screen md:h-36 lg:h-48"style={{backgroundImage: "url(https://i.ibb.co/4PDcdcf/img-5.jpg)",}}>
                <div className="lg:pt-16 md:pt-7 flex flex-col md:gap-20 lg:gap-36 lg:flex-row md:flex-row justify-center">
                    <div className="flex items-center">
                        <img src="https://i.ibb.co/4mtvF5c/1.png" className="h-16 w-16" alt="" />
                        <div className="ml-2">
                             <h1 className="text-white font-semibold text-lg">2500</h1>
                            <p className="text-white font-semibold">Total Cars</p>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <img src="https://i.ibb.co/0qck0Tj/2.png" className="h-16 w-16" alt="" />
                        <div className="ml-2">
                             <h1 className="text-white font-semibold text-lg">1500</h1>
                            <p className="text-white font-semibold">Dealer Reviews</p>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <img src="https://i.ibb.co/RPQbCSx/3.png" className="h-16 w-16" alt="" />
                        <div className="ml-2">
                             <h1 className="text-white font-semibold text-lg">2000</h1>
                            <p className="text-white font-semibold">Happy Clients</p>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <img src="https://i.ibb.co/Rzxg1Cf/4.png" className="h-16 w-16" alt="" />
                        <div className="ml-2">
                             <h1 className="text-white font-semibold text-lg">500</h1>
                            <p className="text-white font-semibold">Awards Winning</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TotalCar;