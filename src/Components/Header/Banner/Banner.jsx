const Banner = () => {
  return (
    <div>
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img src="https://i.ibb.co/yhm4dZS/img-2.jpg"className="w-full"/>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="text-white">
              ❮
            </a>
            <a href="#slide2" className="text-white">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src="https://i.ibb.co/4PDcdcf/img-5.jpg" className="w-full"/>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="text-white">
              ❮
            </a>
            <a href="#slide3" className="text-white">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src="https://i.ibb.co/sCXPTCX/img-8.jpg"className="w-full"/>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="text-white">
              ❮
            </a>
            <a href="#slide4" className="text-white">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/SJxhwP5/img-1.jpg"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="text-white">
              ❮
            </a>
            <a href="#slide1" className="text-white">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
