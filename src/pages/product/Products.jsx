import ProductCard from "@/components/ProductCard";
import { API_URL } from "@/Constant";
import { json, useLoaderData } from "react-router-dom";

const Products = () => {
  const products = useLoaderData();
  return (
    <section className="m-8">
      <h1></h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {products && products.results && products.results.length > 0 ? (
          products.results.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))
        ) : (
          <div className="col-span-full text-center text-gray-600">
            No Products Found
          </div>
      )}
    
      </div>
    </section>
  );
};

export default Products;

export const productFilter = async ({ params }) => {
  const response = await fetch(
    `${API_URL}/api/products/filter?category=${params.category}`
  );

  if (!response.ok) {
    throw Error("Could not fetch products.");
  }

  return response.json();
};
