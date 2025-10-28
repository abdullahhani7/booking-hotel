 
import hotel_2 from "../../src/assets/hotel_3.jpg";

const Hero = () => {
  return (
    <div
      className=" relative flex flex-col items-center justify-center p-10 text-white bg-no-repeat bg-cover bg-center h-screen"
      style={{ backgroundImage: `url(${hotel_2})` }}
    >
      Hero
    </div>
  );
};

export default Hero;
