import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <section className="relative w-full h-[500px] bg-blue-700 text-white flex items-center justify-center overflow-hidden">
  {/* Background Banner Image */}
  <img 
    src="https://farm4.staticflickr.com/3075/3168662394_7d7103de7d_z_d.jpg" 
    alt="Product Plaza Banner" 
    className="absolute inset-0 w-full h-full object-cover opacity-70"
  />

  {/* Overlay Text Content */}
  <div className="relative z-10 flex flex-col items-center text-center px-4 sm:px-8">
    <h1 className="text-4xl sm:text-5xl font-bold text-yellow-400 mb-4">Welcome to Product Plaza</h1>
    <p className="text-lg sm:text-xl mb-6 max-w-lg text-white">
      Discover top-quality products that cater to your needs and lifestyle. 
      Explore our collections and find what you’re looking for today!
    </p>
    <button className="bg-yellow-400 text-blue-700 font-semibold py-2 px-6 rounded-lg shadow-md hover:bg-yellow-500 transition duration-300">
      Shop Now
    </button>
  </div>

  {/* Optional Decorative Element */}
  <div className="absolute bottom-0 w-full h-20 bg-gradient-to-t from-blue-700 via-transparent"></div>
</section>

  );
};

export default Banner;
