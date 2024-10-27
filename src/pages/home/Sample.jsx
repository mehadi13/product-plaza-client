import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { API_URL } from "@/Constant";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Sample = ({ category }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`${API_URL}/api/products/filter?page=1&limit=4&category=${category}`);

        if (!response.ok) {
          throw new Error("Could not fetch products.");
        }

        const data = await response.json();
        setProducts(data.results);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProducts();
  }, [category]);

  return (
    <section className="mt-5">
      <div className="flex justify-between mb-2">
        <h2 className="font-bold text-2xl">{category}</h2>
        <Link to={`/products/${category}`}>
        <Button 
        className="bg-yellow-400 text-blue-700 font-semibold py-2 px-6 rounded-lg shadow-md hover:bg-yellow-500 transition duration-300">
          View All
          <ArrowRight />
        </Button>
        </Link>
      </div>
      <Separator/>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-4">
        {products && products.length > 0 ? (
          products.map((product, index) => <ProductCard key={index} product={product}/>)
        ) : (
          <div className="font-bold">Product Not Present For {category}</div>
        )}
      </div>
    </section>
  );
};

export default Sample;
